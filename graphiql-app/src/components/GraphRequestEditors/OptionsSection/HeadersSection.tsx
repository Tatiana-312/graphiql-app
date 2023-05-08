import { FC, useEffect, useRef } from 'react';
import { EditorView, keymap, lineNumbers } from '@codemirror/view';
import { defaultKeymap } from '@codemirror/commands';
import { closeBrackets } from '@codemirror/autocomplete';
import { bracketMatching, syntaxHighlighting } from '@codemirror/language';
import { myHighlightStyle } from '../editorStyles';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux-hooks';
import { myOptionsCloseTheme, myOptionsOpenTheme } from './optionsEditorStyle';
import { addRequestHeaders } from '../../../redux/store/requestHeadersSlice';

const HeadersSection: FC = () => {
  const headersEditorParent = useRef(null);
  const dispatch = useAppDispatch();
  const addHeaders = (headers: string) => dispatch(addRequestHeaders(headers));
  const queryHeaders = useAppSelector((state) => state.requestHeaders);
  const isShown = useAppSelector((state) => state.displayVariablesSection.active);

  useEffect(() => {
    if (!headersEditorParent) return;

    const view = new EditorView({
      doc: queryHeaders,
      extensions: [
        EditorView.updateListener.of((e) => {
          addHeaders(e.state.doc.toString());
        }),
        isShown ? myOptionsOpenTheme : myOptionsCloseTheme,
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
