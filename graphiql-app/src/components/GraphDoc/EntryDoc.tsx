import { FC } from 'react';
import './generalStyles.scss';
import { useAppDispatch } from '../../hooks/redux-hooks';
import { MyObjectType, addHistoryData } from '../../redux/store/docSlice';
import { ObjectType } from './docs.interface';

interface ObjectTypeProps {
  type: ObjectType;
}

const EntryDoc: FC<ObjectTypeProps> = ({ type }) => {
  const dispatch = useAppDispatch();
  const addData = (data: MyObjectType) => dispatch(addHistoryData(data));

  return (
    <div>
      <p className="sub-title">Root Type</p>
      <span className="name">query: </span>
      <span
        className="type"
        onClick={() =>
          addData({
            name: type.name,
            currentData: type,
          })
        }
      >
        {type.name}
      </span>
    </div>
  );
};

export default EntryDoc;
