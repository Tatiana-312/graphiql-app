import { EditorView } from '@codemirror/view';
import { HighlightStyle } from '@codemirror/language';
import { tags } from '@lezer/highlight';

export const myTheme = EditorView.theme(
  {
    '&': {
      height: '100vh',
      width: '100%',
      color: '#ddd',
      backgroundColor: '#3d3d3d',
      fontSize: '17px',
      paddingBottom: '25px',
      overflow: "auto"
    },
    '.response &': {
      flexGrow: '1',
    },
    '.response > &': {
      height: '100vh',
      backgroundColor: '#494949',
      padding: '0px',
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
  },
  { dark: true }
);

export const myHighlightStyle = HighlightStyle.define([
  { tag: tags.keyword, color: '#fc6' },
  { tag: tags.name, color: '#096' },
  { tag: tags.comment, color: '#b28d', fontStyle: 'italic' },
]);
