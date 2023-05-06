import { useEffect, useRef, useState } from 'react';
import { EditorView, keymap, lineNumbers } from '@codemirror/view';
import { defaultKeymap, history } from '@codemirror/commands';
import { autocompletion, closeBrackets } from '@codemirror/autocomplete';
import { bracketMatching, syntaxHighlighting } from '@codemirror/language';
import { graphql } from 'cm6-graphql';
import { myTheme } from '../editorStyles';
import { myHighlightStyle } from '../editorStyles';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux-hooks';
import { addRequestSchema } from '../../../redux/store/requestSchemaSlice';
import { GraphQLSchema, buildClientSchema, getIntrospectionQuery } from 'graphql';

const RequestSection = () => {
  const requestEditorParent = useRef(null);

  const dispatch = useAppDispatch();
  const addQuerySchema = (query: string) => dispatch(addRequestSchema(query));
  const querySchema = useAppSelector((state) => state.requestSchema);

  const [docSchema, setDocSchema] = useState<GraphQLSchema>();

  const url = 'https://rickandmortyapi.com/graphql';

  useEffect(() => {
    async function remoteSchema(url: string) {
      const { data, errors } = await fetch(url, {
        method: 'POST',
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
    remoteSchema(url);
  }, []);

  useEffect(() => {
    if (!requestEditorParent || !docSchema) return;

    const view = new EditorView({
      doc: querySchema,
      extensions: [
        EditorView.updateListener.of((e) => {
          addQuerySchema(e.state.doc.toString());
        }),
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
      parent: requestEditorParent.current!,
    });
    return () => view.destroy();
  }, [requestEditorParent.current, docSchema]);

  return <div ref={requestEditorParent}></div>;
};

export default RequestSection;
