import { EditorView } from '@codemirror/view';

const generalTheme = {
  '&': {
    width: '100%',
    color: '#ddd',
    backgroundColor: '#3d3d3d',
    fontSize: '17px',
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
  '.cm-gutters': {
    backgroundColor: '#3d3d3d',
    color: '#ddd',
    border: 'none',
  },
  '.cm-scroller': { overflow: 'auto' },
};

export const myParamsOpenTheme = EditorView.theme(
  {
    ...generalTheme,
    '.variables-editor > &, .headers-editor > &': {
      height: '10vh',
      padding: '0px',
    },
  },
  { dark: true }
);

export const myParamsCloseTheme = EditorView.theme(
  {
    ...generalTheme,
    '.variables-editor > &, .headers-editor > &': {
      height: '0vh',
      padding: '0px',
    },
  },
  { dark: true }
);
