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

  return (
    <div>
      <h3 className={styles.sub_title}>Fields</h3>
      {fields.map((field: any) => (
        <Field key={field.name} field={field} />
      ))}
    </div>
  );
};

export default Fields;
