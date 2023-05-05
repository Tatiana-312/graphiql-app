import { EditorView } from '@codemirror/view';
import { HighlightStyle } from '@codemirror/language';
import { tags } from '@lezer/highlight';

export const myTheme = EditorView.theme(
  {
    '&': {
      height: '80vh',
      width: '600px',
      minWidth: '320px',
      color: '#ddd',
      backgroundColor: '#3d3d3d',
      fontSize: '18px',
      borderRadius: '10px',
    },
    '.variables-editor > &': {
      height: '10vh',
    },
    '.cm-content': {
      caretColor: '#fc6',
    },
    '&.cm-focused .cm-cursor': {
      borderLeftColor: '#0e9',
    },
    '&.cm-focused .cm-selectionBackground, ::selection': {
      backgroundColor: '#fff',
    },
    '&.cm-focused': {
      outline: 'none',
    },
    '.cm-gutters': {
      backgroundColor: '#727272',
      color: '#ddd',
      border: 'none',
    },
    '.cm-scroller': { overflow: 'auto' },
  },
  {dark: true}
);

export const myHighlightStyle = HighlightStyle.define([
  { tag: tags.keyword, color: '#fc6' },
  { tag: tags.name, color: '#096' },
  { tag: tags.comment, color: '#b28d', fontStyle: 'italic' },
]);
