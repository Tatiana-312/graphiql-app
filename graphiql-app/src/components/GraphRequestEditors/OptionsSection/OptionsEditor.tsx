import { FC, useEffect } from 'react';
import { EditorView, keymap, lineNumbers } from '@codemirror/view';
import { defaultKeymap } from '@codemirror/commands';
import { closeBrackets } from '@codemirror/autocomplete';
import { bracketMatching, syntaxHighlighting } from '@codemirror/language';
import { myHighlightStyle } from '../editorStyles';
import { useAppSelector } from '../../../hooks/redux-hooks';
import { myOptionsCloseTheme, myOptionsOpenTheme } from './optionsEditorStyle';

interface OptionsProps {
  name: string;
  value: string;
  parent: React.MutableRefObject<null>;
  changeValue: (value: string) => void;
}

const OptionsEditor: FC<OptionsProps> = ({ name, value, parent, changeValue }) => {
  const isShown = useAppSelector((state) => state.displayVariablesSection.active);

  useEffect(() => {
    if (!parent) return;

    const view = new EditorView({
      doc: value,
      extensions: [
        EditorView.updateListener.of((e) => {
          changeValue(e.state.doc.toString());
        }),
        isShown ? myOptionsOpenTheme : myOptionsCloseTheme,
        bracketMatching(),
        closeBrackets(),
        lineNumbers(),
        keymap.of(defaultKeymap),
        syntaxHighlighting(myHighlightStyle),
      ],
      parent: parent.current!,
    });

    return () => view.destroy();
  }, [isShown, name]);

  return <div className={`${name}-editor`} ref={parent}></div>;
};

export default OptionsEditor;
