import { FC } from 'react';
import './generalStyles.scss';
import { useAppDispatch } from '../../hooks/redux-hooks';
import { updateCurrentName } from '../../redux/store/docSlice';

const EntryDoc: FC<any> = ({ type }) => {
  const dispatch = useAppDispatch();
  const updatePlace = (currentPlace: string) => dispatch(updateCurrentName(currentPlace));

  return (
    <div>
      <p>Root Type</p>
      <p className="name" onClick={() => updatePlace('fields')}>
        {type.name}
      </p>
    </div>
  );
};

export default EntryDoc;
