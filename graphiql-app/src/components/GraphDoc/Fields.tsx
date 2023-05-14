import { FC, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import styles from './Fields.module.scss';
import Field from './Field';
import './generalStyles.scss';

const Fields: FC<any> = ({ fields }) => {
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
