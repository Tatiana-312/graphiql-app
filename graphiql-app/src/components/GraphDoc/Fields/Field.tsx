import { FC } from 'react';
import '../generalStyles.scss';
import Description from '../Description';
import TypeRef from '../TypeRef';
import Args from './Args';
import { FieldType } from '../docs.interface';

interface FieldProps {
  field: FieldType;
}

const Field: FC<FieldProps> = ({ field }) => {
  return (
    <div className="field-wrapper">
      <div className="cont">
        <span className="name">{field.name}</span>
        <Args args={field.args} />
        <TypeRef typeRef={field.type} />
      </div>
      <Description description={field.description} />
    </div>
  );
};

export default Field;
