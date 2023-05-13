import { FC, useEffect } from 'react';
import styles from './GraphDoc.module.scss';
import { useGetGraphqlSchemaMutation } from '../../redux/graphqlApi';
import { GraphQLSchema, buildClientSchema, printSchema } from 'graphql';
import './generalStyles.scss';
import EntryDoc from './EntryDoc';
import { useAppSelector } from '../../hooks/redux-hooks';
import Field from './Field';
import ObjectDocType from './DocTypes/ObjectDocType';

const GraphDoc: FC = () => {
  const [getGraphQlSchema, { data }] = useGetGraphqlSchemaMutation({ fixedCacheKey: 'schemaKey' });
  const currentName = useAppSelector((state) => state.doc.currentName);
  // const currentType = useAppSelector((state) => state.doc.currentType);

  useEffect(() => {
    if (data) {
      console.log((data.data.__schema));
    }
  }, [data, getGraphQlSchema]);

  const renderContent = (schemaType: any, currentName: string) => {
    switch (currentName) {
      case 'fields':
        return <ObjectDocType type={schemaType} />;
      case '/':
        return <EntryDoc type={schemaType} />;
      default:
        return <Field field={schemaType.getFields()[currentName]} />;
    }
  };

  return (
    <div className={styles.container}>
      <h2>Docs</h2>
      {data && renderContent(buildClientSchema(data.data).getQueryType(), currentName)}
    </div>
  );
};

export default GraphDoc;
