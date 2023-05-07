import { EditorView } from '@codemirror/view';

const generalTheme = {
  '&': {
    width: '100%',
    color: '#ddd',
    backgroundColor: '#3d3d3d',
    fontSize: '17px',
    paddingRight: '25px',
    paddingBottom: '25px',
  },
  '.cm-content': {
    caretColor: '#fc6',
  },
  '&.cm-focused .cm-cursor': {
    borderLeftColor: '#0e9',
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

export const myVariablesOpenTheme = EditorView.theme(
  {
    ...generalTheme,
    '.variables-editor > &, .headers-editor > &': {
      height: '10vh',
      padding: '0px',
    },
  },
  { dark: true }
);

export const myVariablesCloseTheme = EditorView.theme(
  {
    ...generalTheme,
    '.variables-editor > &, .headers-editor > &': {
      height: '0vh',
      padding: '0px',
    },
  },
  { dark: true }
);
