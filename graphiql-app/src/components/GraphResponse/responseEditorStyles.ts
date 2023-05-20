import { EditorView } from '@codemirror/view';

const generalTheme = {
  '&': {
    width: '100%',
    color: '#ddd',
    fontSize: '16px',
    overflow: 'auto',
    paddingTop: '11px',
  },
  '.cm-content': {
    caretColor: '#fc6',
    fontFamily: '"Noto Sans", sans-serif',
    lineHeight: '25px',
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
