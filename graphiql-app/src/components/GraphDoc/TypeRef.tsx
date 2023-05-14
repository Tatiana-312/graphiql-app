import { FC } from 'react';
import './generalStyles.scss';
import { useAppDispatch } from '../../hooks/redux-hooks';
import { MyObjectType, addHistoryData } from '../../redux/store/docSlice';
import { useGetGraphqlSchemaMutation } from '../../redux/graphqlApi';
import { FieldType, OfType, Type } from './docs.interface';
interface TypeRefProps {
  typeRef: Type | OfType;
}

const TypeRef: FC<TypeRefProps> = ({ typeRef }) => {
  const dispatch = useAppDispatch();
  const addDataToHistory = (data: MyObjectType) => dispatch(addHistoryData(data));
  const [_getGraphQlSchema, { data }] = useGetGraphqlSchemaMutation({
    fixedCacheKey: 'schemaKey',
  });

  const currentData = data.data.__schema.types.filter(
    (type: FieldType) => type.name == typeRef.name
  );

  if (typeRef.kind === 'OBJECT' || typeRef.kind === 'SCALAR' || typeRef.kind === 'INPUT_OBJECT') {
    return (
      <span
        className="type"
        onClick={() => {
          addDataToHistory({
            name: typeRef.name,
            currentData: currentData[0],
          });
        }}
      >
        {typeRef.name}
      </span>
    );
  } else if (typeRef.kind === 'NON_NULL') {
    return (
      <span className="span-flex span">
        <TypeRef typeRef={typeRef.ofType as OfType} />!
      </span>
    );
  } else if (typeRef.kind === 'LIST') {
    return (
      <span className="span-flex span">
        [
        <TypeRef typeRef={typeRef.ofType as OfType} />]
      </span>
    );
  }

  throw new Error(`Unknown type ref: ${typeRef.toString()}`);
};

export default TypeRef;
