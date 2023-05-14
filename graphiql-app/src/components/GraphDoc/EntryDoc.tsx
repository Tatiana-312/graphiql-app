import { FC } from 'react';
import './generalStyles.scss';
import { useAppDispatch } from '../../hooks/redux-hooks';
import { addHistoryData } from '../../redux/store/docSlice';

const EntryDoc: FC<any> = ({ type }) => {
  const dispatch = useAppDispatch();
  const addData = (data: object) => dispatch(addHistoryData(data));

  return (
    <div>
      <p>Root Type</p>
      <span>query: </span>
      <span
        className="name"
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
