import { FC } from 'react';
import './generalStyles.scss';
import { useAppDispatch } from '../../hooks/redux-hooks';
import { MyObjectType, addHistoryData } from '../../redux/store/docSlice';
import { ObjectType, SchemaType } from './docs.interface';

interface EntryDocProps {
  schema: SchemaType;
}

const EntryDoc: FC<EntryDocProps> = ({ schema }) => {
  const dispatch = useAppDispatch();
  const addData = (data: MyObjectType) => dispatch(addHistoryData(data));

  const rootTypes = schema.types.filter(
    (type: ObjectType) =>
      type.name === 'Query' || type.name === 'Mutation' || type.name === 'Subscription'
  );

  return (
    <div>
      <p className="sub-title">Root Types</p>
      {rootTypes.map((rootType: ObjectType) => (
        <div key={rootType.name} className="root-type">
          <span className="name">{rootType.name.toLowerCase()}: </span>
          <span
            className="type"
            onClick={() =>
              addData({
                name: rootType.name,
                currentData: rootType,
              })
            }
          >
            {rootType.name}
          </span>
        </div>
      ))}
    </div>
  );
};

export default EntryDoc;
