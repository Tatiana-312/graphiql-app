import { FC } from 'react';
import styles from './Fields.module.scss';
import Field from './Field';
import './generalStyles.scss';

const Fields: FC<any> = ({ fields }) => {
  return (
    <div>
      <h3 className='sub-title'>Fields</h3>
      {fields.map((field: any) => (
        <Field key={field.name} field={field} />
      ))}
    </div>
  );
};

export default Fields;
