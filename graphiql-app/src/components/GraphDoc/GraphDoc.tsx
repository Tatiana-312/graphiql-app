import { FC, useEffect } from 'react';
import styles from './GraphDoc.module.scss';
import { useGetGraphqlSchemaMutation } from '../../redux/graphqlApi';
import { buildClientSchema, printSchema } from 'graphql';
import ObjectDoc from './DocTypes/ObjectDoc';

const GraphDoc: FC = () => {
  const [getGraphQlSchema, { data }] = useGetGraphqlSchemaMutation({ fixedCacheKey: 'schemaKey' });

  useEffect(() => {
    if (data) {
      // console.log(buildClientSchema(data.data).getQueryType());
    }
  }, [data, getGraphQlSchema]);

  return (
    <div className={styles.container}>
      <h2>Docs</h2>
      {data && <ObjectDoc type={buildClientSchema(data.data).getQueryType()} />}
    </div>
  );
};

export default GraphDoc;
