import { useEffect, useRef } from 'react';
import { EditorView, keymap, lineNumbers } from '@codemirror/view';
import { defaultKeymap } from '@codemirror/commands';
import { closeBrackets } from '@codemirror/autocomplete';
import { bracketMatching, syntaxHighlighting } from '@codemirror/language';
import { myTheme } from '../editorStyles';
import { myHighlightStyle } from '../editorStyles';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux-hooks';
import { addRequestVariables } from '../../../redux/store/requestVariablesSlice';
import Button from './Button';
import styles from './VariablesSection.module.scss';

const VariablesSection = () => {
  const variablesEditorParent = useRef(null);
  const dispatch = useAppDispatch();
  const addVariables = (variables: string) => dispatch(addRequestVariables(variables));
  const queryVariables = useAppSelector((state) => state.requestVariables);

  useEffect(() => {
    if (!variablesEditorParent) return;

    const view = new EditorView({
      doc: queryVariables,
      extensions: [
        EditorView.updateListener.of((e) => {
          addVariables(e.state.doc.toString());
        }),
        myTheme,
        bracketMatching(),
        closeBrackets(),
        lineNumbers(),
        keymap.of(defaultKeymap),
        syntaxHighlighting(myHighlightStyle),
      ],
      parent: variablesEditorParent.current!,
    });

    return () => view.destroy();
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.params_buttons}>
        <Button name={'Variables'} />
        <Button name={'Headers'} />
      </div>
      <div className="variables-editor" ref={variablesEditorParent}></div>
    </div>
  );
};

export default VariablesSection;
