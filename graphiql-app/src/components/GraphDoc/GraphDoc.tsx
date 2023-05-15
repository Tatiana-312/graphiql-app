import { FC, useEffect } from 'react';
import styles from './GraphDoc.module.scss';
import { useGetGraphqlSchemaMutation } from '../../redux/graphqlApi';
import './generalStyles.scss';
import EntryDoc from './EntryDoc';
import { useAppDispatch, useAppSelector } from '../../hooks/redux-hooks';
import Fields from './Fields/Fields';
import Scalar from './Scalar';
import { removeHistoryData } from '../../redux/store/docSlice';
import InputObject from './InputObject/InputObject';
import { EnumType, InputObjectType, ObjectType, ScalarType, UnionType } from './docs.interface';
import Enum from './Enum/Enum';
import Union from './Union/Union';

const GraphDoc: FC = () => {
  const [getGraphQlSchema, { data, isLoading }] = useGetGraphqlSchemaMutation({
    fixedCacheKey: 'schemaKey',
  });

  const dispatch = useAppDispatch();
  const removeLastDataFromHistory = () => dispatch(removeHistoryData());
  const history = useAppSelector((state) => state.doc.history);

  // useEffect(() => {
  //   if (data) {
  //     console.log('SCHEMA', data.data.__schema);
  //   }
  // }, [data, getGraphQlSchema]);

  let currentData = history.at(-1)?.currentData;
  const currentName = history.at(-1)?.name;
  const previousState = history.at(-2);

  let content;

  if (isLoading) {
    content = <p>Loading...</p>;
  } else if (data && history.length === 1) {
    content = <EntryDoc schema={data.data.__schema} />;
  } else if ((currentData as ObjectType).kind === 'SCALAR') {
    content = <Scalar type={currentData as ScalarType} />;
  } else if ((currentData as ObjectType).kind === 'INPUT_OBJECT') {
    content = <InputObject type={currentData as InputObjectType} />;
  } else if ((currentData as ObjectType).kind === 'UNION') {
    content = <Union type={currentData as UnionType} />;
  } else if ((currentData as ObjectType).kind === 'ENUM') {
    content = <Enum type={currentData as EnumType} />;
  } else if (currentData && Object.keys(currentData).length !== 0) {
    content = <Fields fields={(currentData as ObjectType).fields} />;
  }

  return (
    <div className={styles.container}>
      {history.length != 1 && (
        <p
          className={styles.back}
          onClick={() => {
            currentData = previousState?.currentData;
            removeLastDataFromHistory();
          }}
        >
          &lt; {previousState?.name}
        </p>
      )}
      <h2 className="title">{currentName}</h2>
      {content}
    </div>
  );
};

export default GraphDoc;
