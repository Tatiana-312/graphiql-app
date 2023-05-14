import { FC } from 'react';
import './generalStyles.scss';
import { useAppDispatch } from '../../hooks/redux-hooks';
import { addHistoryData } from '../../redux/store/docSlice';
import { useGetGraphqlSchemaMutation } from '../../redux/graphqlApi';

const TypeRef: FC<any> = ({ typeRef }) => {
  const dispatch = useAppDispatch();
  const addDataToHistory = (data: object) => dispatch(addHistoryData(data));
  const [_getGraphQlSchema, { data }] = useGetGraphqlSchemaMutation({
    fixedCacheKey: 'schemaKey',
  });

  const currentData = data.data.__schema.types.filter((obj: any) => obj.name == typeRef.name);

  if (typeRef.kind === 'OBJECT' || typeRef.kind === 'SCALAR') {
    return (
      <span
        className="name"
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
      <span>
        <TypeRef typeRef={typeRef.ofType} />!
      </span>
    );
  } else if (typeRef.kind === 'LIST') {
    return (
      <span>
        [
        <TypeRef typeRef={typeRef.ofType} />]
      </span>
    );
  }

  throw new Error(`Unknown type ref: ${typeRef.toString()}`);
};

export default TypeRef;
