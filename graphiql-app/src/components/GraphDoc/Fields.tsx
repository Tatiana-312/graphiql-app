import { FC, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import styles from './Fields.module.scss';
import { useAppDispatch, useAppSelector } from '../../hooks/redux-hooks';
import { updateCurrentName } from '../../redux/store/docSlice';
import Field from './Field';
import './generalStyles.scss';
import Description from './Description';

const Fields: FC<any> = ({ fields }) => {
  const dispatch = useAppDispatch();
  const updateName = (currentPlace: string) => dispatch(updateCurrentName(currentPlace));
  const currentName = useAppSelector((state) => state.doc.currentName);

  console.log('fields', fields);

  const arrOfFields: any = [];

  Object.entries(fields).forEach(([_key, value]) => {
    arrOfFields.push(value);
  });

  const renderFields = arrOfFields.map((field: any) => {
    return (
      <div key={`${uuidv4()}`}>
        <p className="name" key={styles.name} onClick={() => updateName(field.name)}>
          {field.name}
        </p>
        <Description description={field.description} />
      </div>
    );
  });

  return (
    <div>
      <h3>Fields</h3>
      {renderFields}
    </div>
  );
};

export default Fields;
