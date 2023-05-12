import { FC, useEffect } from 'react';
import styles from './GraphDoc.module.scss';
import { useGetGraphqlSchemaMutation } from '../../redux/graphqlApi';
import { GraphQLSchema, buildClientSchema, printSchema } from 'graphql';
import ObjectDoc from './DocTypes/ObjectDoc';
import './generalStyles.scss';
import EntryDoc from './EntryDoc';
import { useAppSelector } from '../../hooks/redux-hooks';
import Field from './Field';

const GraphDoc: FC = () => {
  const [getGraphQlSchema, { data }] = useGetGraphqlSchemaMutation({ fixedCacheKey: 'schemaKey' });
  const currentName = useAppSelector((state) => state.doc.currentName);

  useEffect(() => {
    if (data) {
      console.log(buildClientSchema(data.data).getQueryType());
    }
  }, [data, getGraphQlSchema]);

  const renderContent = (schemaType: any, currentPlace: string) => {
    switch (currentPlace) {
      case 'fields':
        return <ObjectDoc type={schemaType} />;
      case '/':
        return <EntryDoc type={schemaType} />;
      default:
        return <Field field={schemaType.getFields()[currentPlace]} />;
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
