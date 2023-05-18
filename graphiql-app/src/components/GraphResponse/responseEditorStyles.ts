import { EditorView } from '@codemirror/view';

const generalTheme = {
  '&': {
    width: '100%',
    color: '#ddd',
    fontSize: '17px',
    overflow: 'auto',
  },
  '.cm-content': {
    caretColor: '#fc6',
  },
  '&.cm-focused .cm-selectionBackground, ::selection': {
    backgroundColor: '#7272726a',
  },
  '&.cm-focused': {
    outline: 'none',
  },
  '.cm-scroller': { overflow: 'auto' },
};

export const myResponseTheme = EditorView.theme(
  {
    ...generalTheme,
    '.response > &': {
      height: 'calc(100vh - 80px)',
      backgroundColor: '#494949',
    },
  },
  { dark: true }
);
