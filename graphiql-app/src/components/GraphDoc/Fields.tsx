import { FC, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import styles from './Fields.module.scss';
import { useAppDispatch, useAppSelector } from '../../hooks/redux-hooks';
import { updateCurrentName } from '../../redux/store/docSlice';
import Field from './Field';
import './generalStyles.scss';

const Fields: FC<any> = ({ fields }) => {
  const dispatch = useAppDispatch();
  const updateName = (currentPlace: string) => dispatch(updateCurrentName(currentPlace));
  const currentName = useAppSelector((state) => state.doc.currentName);

  console.log('fields', fields);

  const arrOfFields: any = [];

  Object.entries(fields).forEach(([_key, value]) => {
    arrOfFields.push(value);
  });

  const FIELDS = arrOfFields.map((field: any) => {
    return (
      <div key={`${uuidv4()}`}>
        <p className='name' key={styles.name} onClick={() => updateName(field.name)}>
          {field.name}
        </p>
        <p className='description' key={`${uuidv4()}`}>
          {field.description}
        </p>
      </div>
    );
  });

  return (
    <div>
      <h3>Fields</h3>
      {/* {currentPlace.length ? FIELDS : <Field field={fields[currentPlace]}/>} */}
      {FIELDS}
    </div>
  );
};

export default Fields;
