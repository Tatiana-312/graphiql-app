import { FC } from 'react';
import '../generalStyles.scss';
import Description from '../Description';
import TypeRef from '../TypeRef';
import Args from './Args';
import { FieldType } from '../docs.interface';
import styles from './Field.module.scss';

interface FieldProps {
  field: FieldType;
}

const Field: FC<FieldProps> = ({ field }) => {
  return (
    <div className={styles.field}>
      <div className={styles.container}>
        <span className="name">{field.name}</span>
        <Args args={field.args} />
        <TypeRef typeRef={field.type} />
      </div>
      <Description description={field.description} />
    </div>
  );
};

export default Field;
