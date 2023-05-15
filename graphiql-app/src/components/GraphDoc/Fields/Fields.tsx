import { FC } from 'react';
import styles from './Fields.module.scss';
import Field from './Field';
import '../generalStyles.scss';
import { FieldType } from '../docs.interface';

interface FieldsProps {
  fields: FieldType[];
}

const Fields: FC<FieldsProps> = ({ fields }) => {
  return (
    <div>
      <h3 className="sub-title">Fields</h3>
      {fields.map((field: FieldType) => (
        <Field key={field.name} field={field} />
      ))}
    </div>
  );
};

export default Fields;
