import { useEffect, useRef, useState } from 'react';
import { EditorView } from '@codemirror/view';
import { Compartment, EditorState } from '@codemirror/state';
import { syntaxHighlighting } from '@codemirror/language';
import { myHighlightStyle } from '../GraphRequestEditors/editorStyles';
import { useAppSelector } from '../../hooks/redux-hooks';
import { json } from '@codemirror/lang-json';
import styles from './GraphResponse.module.scss';
import { useGetGraphqlMutation } from '../../redux/graphqlApi';
import { myResponseTheme } from './responseEditorStyles';

const GraphResponse = () => {
  const responseParent = useRef(null);
  const parseError = useAppSelector((state) => state.parseError);
  const [editor, setEditor] = useState<EditorView>();

  const [_, { data, error }] = useGetGraphqlMutation({ fixedCacheKey: 'myCacheKey' });

  useEffect(() => {
    if (!responseParent) return;

    const view = new EditorView({
      doc: '',
      extensions: [
        myResponseTheme,
        syntaxHighlighting(myHighlightStyle),
        json(),
        new Compartment().of(EditorState.readOnly.of(true)),
      ],
      parent: responseParent.current!,
    });

    setEditor(view);

    return () => view.destroy();
  }, []);

  const changeResponseData = (data: string | object) => {
    editor?.dispatch({
      changes: { from: 0, to: editor.state.doc.length, insert: JSON.stringify(data, null, 2) },
    });
  };

  useEffect(() => {
    changeResponseData(parseError);
  }, [parseError]);

  useEffect(() => {
    if (error) {
      changeResponseData(error);
    }
  }, [error]);

  useEffect(() => {
    if (data) {
      changeResponseData(data);
    }
  }, [data]);

  return (
    <div className={styles.response_container}>
      <div className="response" ref={responseParent}></div>
    </div>
  );
};

export default GraphResponse;
