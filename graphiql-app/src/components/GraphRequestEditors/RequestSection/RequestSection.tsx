import { FC, useEffect, useRef } from 'react';
import { EditorView, keymap, lineNumbers } from '@codemirror/view';
import { defaultKeymap, history } from '@codemirror/commands';
import { autocompletion, closeBrackets } from '@codemirror/autocomplete';
import { bracketMatching, syntaxHighlighting } from '@codemirror/language';
import { graphql } from 'cm6-graphql';
import { myTheme } from '../editorStyles';
import { myHighlightStyle } from '../editorStyles';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux-hooks';
import { addRequestSchema } from '../../../redux/store/requestSchemaSlice';
import { buildClientSchema } from 'graphql';
import { API_URL } from '../../../utils/constants';
import { useGetGraphqlSchemaMutation } from '../../../redux/graphqlApi';
import styles from './RequestSection.module.scss';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const RequestSection: FC = () => {
  const requestEditorParent = useRef(null);

  const dispatch = useAppDispatch();
  const addQuerySchema = (query: string) => dispatch(addRequestSchema(query));
  const querySchema = useAppSelector((state) => state.requestSchema);
  const isOptionsSectionShown = useAppSelector((state) => state.displayVariablesSection.active);

  const [getGraphQlSchema, { data, error }] = useGetGraphqlSchemaMutation({
    fixedCacheKey: 'schemaKey',
  });

  useEffect(() => {
    getGraphQlSchema(API_URL);
  }, []);

  useEffect(() => {
    if (!requestEditorParent) return;

    if (error) {
      toast.error('Fetch schema error!');

      const view = new EditorView({
        doc: querySchema,
        extensions: [
          EditorView.updateListener.of((e) => {
            addQuerySchema(e.state.doc.toString());
          }),
          myTheme,
          bracketMatching(),
          closeBrackets(),
          history(),
          autocompletion(),
          lineNumbers(),
          keymap.of(defaultKeymap),
          syntaxHighlighting(myHighlightStyle),
          graphql(),
        ],
        parent: requestEditorParent.current!,
      });
      return () => view.destroy();
    } else if (data) {
      const view = new EditorView({
        doc: querySchema,
        extensions: [
          EditorView.updateListener.of((e) => {
            addQuerySchema(e.state.doc.toString());
          }),
          myTheme,
          bracketMatching(),
          closeBrackets(),
          history(),
          autocompletion(),
          lineNumbers(),
          keymap.of(defaultKeymap),
          syntaxHighlighting(myHighlightStyle),
          graphql(buildClientSchema(data.data), {
            onShowInDocs(field, type, parentType) {
              alert(`Showing in docs.: Field: ${field}, Type: ${type}, ParentType: ${parentType}`);
            },
            onFillAllFields(_view, _schema, _query, _cursor, token) {
              alert(`Filling all fields. Token: ${token}`);
            },
          }),
        ],
        parent: requestEditorParent.current!,
      });
      return () => view.destroy();
    }
  }, [requestEditorParent.current, data, error]);

  return (
    <div className={isOptionsSectionShown ? styles.small : styles.big} ref={requestEditorParent}>
      <ToastContainer
        position="top-center"
        toastStyle={{
          backgroundImage: 'linear-gradient(135deg, #f0e6d2, #E0B052)',
          boxShadow: '2px 6px 15px rgba(255, 72, 112, 0.35)',
          color: 'black',
        }}
      />
    </div>
  );
};

export default RequestSection;
