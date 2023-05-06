import { useEffect, useRef } from 'react';
import { EditorView, keymap, lineNumbers } from '@codemirror/view';
import { defaultKeymap, history } from '@codemirror/commands';
import { autocompletion, closeBrackets } from '@codemirror/autocomplete';
import { bracketMatching, syntaxHighlighting } from '@codemirror/language';
import { myTheme } from '../editorStyles';
import { myHighlightStyle } from '../editorStyles';
import { useAppDispatch, useAppSelector } from '../../../redux/hook';
import { addRequestVariables } from '../../../redux/store/requestVariablesSlice';
import { graphql } from 'cm6-graphql';
import { GraphQLSchema } from 'graphql';

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

  return <div className="variables-editor" ref={variablesEditorParent}></div>;
};

export default VariablesSection;
