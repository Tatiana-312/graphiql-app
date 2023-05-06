import { useEffect, useRef, useState } from 'react';
import { EditorView } from '@codemirror/view';
import { Compartment, EditorState } from '@codemirror/state';
import { syntaxHighlighting } from '@codemirror/language';
import { myHighlightStyle, myTheme } from '../GraphRequestEditors/editorStyles';
import { useAppSelector } from '../../hooks/redux-hooks';
import { json } from '@codemirror/lang-json';
import styles from './GraphResponse.module.scss';

const GraphResponse = () => {
  const responseParent = useRef(null);

  const data = useAppSelector((state) => state.apiData);
  const [editor, setEditor] = useState<EditorView>();

  useEffect(() => {
    if (!responseParent) return;

    const view = new EditorView({
      doc: '',
      extensions: [
        myTheme,
        syntaxHighlighting(myHighlightStyle),
        json(),
        new Compartment().of(EditorState.readOnly.of(true)),
      ],
      parent: responseParent.current!,
    });

    setEditor(view);

    return () => view.destroy();
  }, []);

  useEffect(() => {
    editor?.dispatch({
      changes: { from: 0, to: editor.state.doc.length, insert: JSON.stringify(data, null, 2) },
    });
  }, [data]);

  return (
    <div className={styles.response_container}>
      <div className="response" ref={responseParent}></div>
    </div>
  );
};

export default GraphResponse;
