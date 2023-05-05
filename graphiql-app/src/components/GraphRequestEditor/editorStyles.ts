import { EditorView } from '@codemirror/view';
import { HighlightStyle } from '@codemirror/language';
import { tags } from '@lezer/highlight';

export const myTheme = EditorView.theme(
  {
    '&': {
      height: '90vh',
      minWidth: '320px',
      color: '#045',
      backgroundColor: '#ddd',
      fontSize: '18px',
      borderRadius: '10px',
    },
    '.cm-content': {
      caretColor: '#045',
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
      backgroundColor: '#096',
      color: '#ddd',
      border: 'none',
    },
    '.cm-scroller': { overflow: 'auto' },
  }
);

export const myHighlightStyle = HighlightStyle.define([
  { tag: tags.keyword, color: '#04d' },
  { tag: tags.name, color: '#096' },
  { tag: tags.comment, color: '#b28d', fontStyle: 'italic' },
]);
