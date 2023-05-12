import { FC } from 'react';
import { v4 as uuidv4 } from 'uuid';
import styles from './Fields.module.scss';

const Fields: FC<any> = ({ fields }) => {
  console.log('fields', fields);

  const arrOfFields: any = [];

  Object.entries(fields).forEach(([_key, value]) => {
    arrOfFields.push(value);
  });

  const FIELDS = arrOfFields.map((field: any) => {
    return (
      <div key={`${uuidv4()}`}>
        <a className={styles.name} key={`${uuidv4()}`} href="#">
          {field.name}
        </a>
        <p className={styles.description} key={`${uuidv4()}`}>
          {field.description}
        </p>
      </div>
    );
  });

//   console.log('arr', arrOfFields);

  return (
    <div>
      <h3>Fields</h3>
      {FIELDS}
    </div>
  );
};

export default Fields;
