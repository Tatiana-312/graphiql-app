import { FC } from 'react';
import styles from './Fields.module.scss';
import './generalStyles.scss';
import TypeRef from './TypeRef';
import { v4 as uuidv4 } from 'uuid';

const InputFields: FC<any> = ({ inputFields }) => {
  return (
    <div>
      <h3 className={styles.sub_title}>Fields</h3>
      {inputFields.map((field: any) => (
        <div key={uuidv4()}>
          <span>{field.name}:&nbsp;</span>
          <TypeRef typeRef={field.type} />
        </div>
      ))}
    </div>
  );
};

export default InputFields;
