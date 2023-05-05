import { useCallback, useEffect, useRef, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../redux/hook';
import { addRequestSchema } from '../../redux/store/requestSchemaSlice';
import styles from './GraphRequestEditor.module.scss';
import { addRequestVariables } from '../../redux/store/requestVariablesSlice';

import { EditorView, keymap, lineNumbers } from '@codemirror/view';
import { defaultKeymap, history } from '@codemirror/commands';
import { autocompletion, closeBrackets } from '@codemirror/autocomplete';
import { HighlightStyle, bracketMatching, syntaxHighlighting } from '@codemirror/language';
import {tags} from "@lezer/highlight"
import { graphql } from 'cm6-graphql';
import { GraphQLSchema, buildClientSchema, getIntrospectionQuery } from 'graphql';

const GraphRequestEditor = () => {
  const myTextarea = useRef(null);
  const dispatch = useAppDispatch();
  const addSchema = (query: string) => dispatch(addRequestSchema(query));
  const addVariables = (variables: string) => dispatch(addRequestVariables(variables));
  const querySchema = useAppSelector((state) => state.requestSchema);
  const queryVariables = useAppSelector((state) => state.requestVariables);

  const [state, setState] = useState('');
  const [docSchema, setDocSchema] = useState<GraphQLSchema>();
  const [element, setElement] = useState<HTMLElement>();

  const url = 'https://rickandmortyapi.com/graphql';

  useEffect(() => {
    async function remoteSchema(url: string) {
      const { data, errors } = await fetch(url, {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          operationName: 'IntrospectionQuery',
          query: getIntrospectionQuery(),
        }),
      }).then((res) => res.json());

      if (errors) {
        throw new Error('Error fetching remote schema!');
      }
      setDocSchema(buildClientSchema(data));
      return buildClientSchema(data);
    }
    remoteSchema(url)
    // console.log('get schema')
  },[])

  const ref = useCallback((node: HTMLElement | null) => {
    if (!node) return;

    setElement(node);
  }, []);

  const makeRequest = async (query: string, variables: string) => {
    console.log('QUERY', query);
    console.log('VARIABLES', variables);
    const res = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({
        query: query,
        variables: JSON.parse(variables),
      }),
    });

    const data = await res.json();
    return data;
  };

  // console.log(element);

  useEffect(() => {
    if (!element && !docSchema) return;

    // console.log('doc', docSchema)

    let myTheme = EditorView.theme({
      "&": {
        height: "90vh",
        minWidth: "320px",
        color: "#045",
        backgroundColor: "#ddd",
        fontSize: "18px",
        borderRadius: "10px",
      },
      ".cm-content": {
        caretColor: "#045"
      },
      "&.cm-focused .cm-cursor": {
        borderLeftColor: "#0e9",
      },
      "&.cm-focused .cm-selectionBackground, ::selection": {
        backgroundColor: "#fff",
      },
      "&.cm-focused": {
        outline: "none",
      },
      ".cm-gutters": {
        backgroundColor: "#096",
        color: "#ddd",
        border: "none"
      },
      ".cm-scroller": {overflow: "auto"}
    }, {dark: false})

    const myHighlightStyle = HighlightStyle.define([
      {tag: tags.keyword, color: "#04d"},
      {tag: tags.name, color: "#096"},
      {tag: tags.comment, color: "#b28d", fontStyle: "italic"}
    ])

    const view = new EditorView({
      doc: 'query',
      extensions: [
        myTheme,
        bracketMatching(),
        closeBrackets(),
        history(),
        autocompletion(),
        lineNumbers(),
        keymap.of(defaultKeymap),
        syntaxHighlighting(myHighlightStyle),
        graphql(docSchema, {
          onShowInDocs(field, type, parentType) {
            alert(`Showing in docs.: Field: ${field}, Type: ${type}, ParentType: ${parentType}`);
          },
          onFillAllFields(view, schema, _query, cursor, token) {
            alert(`Filling all fields. Token: ${token}`);
          },
        }),
      ],
      parent: element,
    });

    return () => view.destroy();
  }, [element, docSchema]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('schema state', docSchema);
    setState(JSON.stringify(await makeRequest(querySchema, queryVariables), null, 4));
  };

  return (
    <div className={styles.container}>
      <form ref={myTextarea} onSubmit={handleSubmit}>
        <div className={styles.request_editor} ref={ref}></div>
        {/* <textarea
          // className={styles.editor}
          value={querySchema}
          onChange={(e) => addSchema(e.target.value)}
          // ref={myTextarea}
        /> */}
        <textarea value={queryVariables} onChange={(e) => addVariables(e.target.value)} />
        <button type="submit">Get</button>
      </form>
      <pre>
        <code>{state}</code>
      </pre>
    </div>
  );
};

export default GraphRequestEditor;
