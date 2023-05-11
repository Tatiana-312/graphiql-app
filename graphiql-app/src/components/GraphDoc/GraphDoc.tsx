import { FC, useEffect } from 'react';
import styles from './GraphDoc.module.scss';
import { useGetGraphqlSchemaMutation } from '../../redux/graphqlApi';
import { buildClientSchema, printSchema } from 'graphql';

const GraphDoc: FC = () => {
  const [getGraphQlSchema, { data }] = useGetGraphqlSchemaMutation({ fixedCacheKey: 'schemaKey' });

  useEffect(() => {
    if (data) {
      console.log(buildClientSchema(data.data));
    }
  }, [data, getGraphQlSchema]);

  return (
    <div className={styles.container}>
      <h2>Docs</h2>
      {data && <p>{buildClientSchema(data.data).getQueryType()?.name}</p>}
    </div>
  );
};

export default GraphDoc;
