import { FC, useEffect, useRef } from 'react';
import { EditorView, keymap, lineNumbers } from '@codemirror/view';
import { defaultKeymap } from '@codemirror/commands';
import { closeBrackets } from '@codemirror/autocomplete';
import { bracketMatching, syntaxHighlighting } from '@codemirror/language';
import { myHighlightStyle } from '../editorStyles';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux-hooks';
import { addRequestVariables } from '../../../redux/store/requestVariablesSlice';
import { myOptionsCloseTheme, myOptionsOpenTheme } from './optionsEditorStyle';

const VariablesSection: FC = () => {
  const variablesEditorParent = useRef(null);
  const dispatch = useAppDispatch();
  const addVariables = (variables: string) => dispatch(addRequestVariables(variables));
  const queryVariables = useAppSelector((state) => state.requestVariables);
  const isShown = useAppSelector((state) => state.displayVariablesSection.active);

  useEffect(() => {
    if (!variablesEditorParent) return;
    const view = new EditorView({
      doc: queryVariables,
      extensions: [
        EditorView.updateListener.of((e) => {
          addVariables(e.state.doc.toString());
        }),
        isShown ? myOptionsOpenTheme : myOptionsCloseTheme,
        bracketMatching(),
        closeBrackets(),
        lineNumbers(),
        keymap.of(defaultKeymap),
        syntaxHighlighting(myHighlightStyle),
      ],
      parent: variablesEditorParent.current!,
    });

    return () => view.destroy();
  }, [isShown]);

  return <div className="variables-editor" ref={variablesEditorParent}></div>;
};

export default VariablesSection;
