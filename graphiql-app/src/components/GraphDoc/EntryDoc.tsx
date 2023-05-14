import { FC } from 'react';
import './generalStyles.scss';
import { useAppDispatch } from '../../hooks/redux-hooks';
import { addHistoryData } from '../../redux/store/docSlice';

const EntryDoc: FC<any> = ({ type }) => {
  const dispatch = useAppDispatch();
  const addData = (data: object) => dispatch(addHistoryData(data));

  return (
    <div>
      <p className='sub-title'>Root Type</p>
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
