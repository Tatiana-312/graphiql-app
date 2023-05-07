import { useEffect, useRef } from 'react';
import { EditorView, keymap, lineNumbers } from '@codemirror/view';
import { defaultKeymap } from '@codemirror/commands';
import { closeBrackets } from '@codemirror/autocomplete';
import { bracketMatching, syntaxHighlighting } from '@codemirror/language';
import { myHighlightStyle } from '../editorStyles';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux-hooks';
import { addRequestVariables } from '../../../redux/store/requestVariablesSlice';
import { myVariablesCloseTheme, myVariablesOpenTheme } from './paramsEditorStyle';

const HeadersSection = () => {
  const headersEditorParent = useRef(null);
  const dispatch = useAppDispatch();
  const addVariables = (variables: string) => dispatch(addRequestVariables(variables));
  const queryVariables = useAppSelector((state) => state.requestVariables);
  const isShown = useAppSelector((state) => state.displayVariablesSection.active);

  useEffect(() => {
    if (!headersEditorParent) return;
    const view = new EditorView({
      doc: 'queryHeaders',
      extensions: [
        // EditorView.updateListener.of((e) => {
        //   addVariables(e.state.doc.toString());
        // }),
        isShown ? myVariablesOpenTheme : myVariablesCloseTheme,
        bracketMatching(),
        closeBrackets(),
        lineNumbers(),
        keymap.of(defaultKeymap),
        syntaxHighlighting(myHighlightStyle),
      ],
      parent: headersEditorParent.current!,
    });

    return () => view.destroy();
  }, [isShown]);

  return <div className="headers-editor" ref={headersEditorParent}></div>;
};

export default HeadersSection;
