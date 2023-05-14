import { FC } from 'react';
import './generalStyles.scss';
import TypeRef from './TypeRef';
import { v4 as uuidv4 } from 'uuid';
import styles from './InputFields.module.scss';
import { InputField } from './docs.interface';
interface InputFieldsProps {
  inputFields: InputField[];
}
const InputFields: FC<InputFieldsProps> = ({ inputFields }) => {
  return (
    <div>
      <h3 className="sub-title">Fields</h3>
      {inputFields.map((field: InputField) => (
        <div className={styles.field_container} key={uuidv4()}>
          <span className="name">{field.name}:&nbsp;</span>
          <TypeRef typeRef={field.type} />
        </div>
      ))}
    </div>
  );
};

export default InputFields;
