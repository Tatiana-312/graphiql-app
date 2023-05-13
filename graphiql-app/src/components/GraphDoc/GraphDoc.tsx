import { FC, useEffect } from 'react';
import styles from './GraphDoc.module.scss';
import { useGetGraphqlSchemaMutation } from '../../redux/graphqlApi';
import { GraphQLSchema, buildClientSchema, isType, printSchema } from 'graphql';
import './generalStyles.scss';
import EntryDoc from './EntryDoc';
import { useAppSelector } from '../../hooks/redux-hooks';
import Field from './Field';
import ObjectDocType from './DocTypes/ObjectDocType';
import Fields from './Fields';

const GraphDoc: FC = () => {
  const [getGraphQlSchema, { data, isLoading }] = useGetGraphqlSchemaMutation({
    fixedCacheKey: 'schemaKey',
  });
  const currentName = useAppSelector((state) => state.doc.currentName);
  const history = useAppSelector((state) => state.doc.history);

  useEffect(() => {
    if (data) {
      console.log('SCHEMA', data.data.__schema);
    }
  }, [data, getGraphQlSchema]);

  const currentData = history.at(-1);

  let content;

  if (isLoading) {
    content = <p>Loading...</p>;
  } else if (data && !history.length) {
    content = <EntryDoc type={data.data.__schema.types[0]} />;
  } else if (currentData && currentData.kind === 'SCALAR') {
    content = <p>SCALAR</p>;
  } else if (currentData) {
    content = <Fields fields={currentData.fields} />;
  }

  return (
    <div className={styles.container}>
      <h2>Docs</h2>
      {content}
    </div>
  );
};

export default GraphDoc;
