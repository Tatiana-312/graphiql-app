import { FC, useEffect } from 'react';
import styles from './GraphDoc.module.scss';
import { useGetGraphqlSchemaMutation } from '../../redux/graphqlApi';
import './generalStyles.scss';
import EntryDoc from './EntryDoc';
import { useAppDispatch, useAppSelector } from '../../hooks/redux-hooks';
import Fields from './Fields/Fields';
import Scalar from './Scalar';
import { disableButton, enableButton, removeHistoryData } from '../../redux/store/docSlice';
import InputObject from './InputObject/InputObject';
import { EnumType, InputObjectType, ObjectType, ScalarType, UnionType } from './docs.interface';
import Enum from './Enum/Enum';
import Union from './Union/Union';
import { toast } from 'react-toastify';

const GraphDoc: FC = () => {
  const [getGraphQlSchema, { data, isLoading, isError }] = useGetGraphqlSchemaMutation({
    fixedCacheKey: 'schemaKey',
  });

  const dispatch = useAppDispatch();
  const removeLastDataFromHistory = () => dispatch(removeHistoryData());
  const history = useAppSelector((state) => state.doc.history);
  const isActive = useAppSelector((state) => state.doc.active);
  const disableDocButton = () => dispatch(disableButton());
  const enableDocButton = () => dispatch(enableButton());

  useEffect(() => {
    if (data) {
      enableDocButton();
    }
  }, [data, getGraphQlSchema]);

  useEffect(() => {
    if (isLoading || isError) {
      disableDocButton();
    }
  }, [isLoading, isError]);

  let currentData = history.at(-1)?.currentData;
  const currentName = history.at(-1)?.name;
  const previousState = history.at(-2);

  let component;

  try {
    if (data && history.length === 1) {
      component = <EntryDoc schema={data.data.__schema} />;
    } else if ((currentData as ObjectType).kind === 'SCALAR') {
      component = <Scalar type={currentData as ScalarType} />;
    } else if ((currentData as ObjectType).kind === 'INPUT_OBJECT') {
      component = <InputObject type={currentData as InputObjectType} />;
    } else if ((currentData as ObjectType).kind === 'UNION') {
      component = <Union type={currentData as UnionType} />;
    } else if ((currentData as ObjectType).kind === 'ENUM') {
      component = <Enum type={currentData as EnumType} />;
    } else if (currentData && Object.keys(currentData).length !== 0) {
      component = <Fields fields={(currentData as ObjectType).fields} />;
    }
  } catch (err) {
    toast.error((err as Error).message);
  }

  const styleClasses = isActive ? styles.container + ' ' + styles.active : styles.container;

  return (
    <div className={styleClasses}>
      {history.length !== 1 && (
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
      {component}
    </div>
  );
};

export default GraphDoc;
