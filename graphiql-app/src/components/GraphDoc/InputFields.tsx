import { FC } from 'react';
import styles from './Fields.module.scss';
import './generalStyles.scss';
import TypeRef from './TypeRef';

const InputFields: FC<any> = ({ inputFields }) => {
  return (
    <div>
      <h3 className={styles.sub_title}>Fields</h3>
      {inputFields.map((field: any) => (
        <div>
          <span>{field.name}:&nbsp;</span>
          <TypeRef typeRef={field.type} />
        </div>
      ))}
    </div>
  );
};

export default InputFields;
