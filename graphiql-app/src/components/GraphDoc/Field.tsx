import { FC } from 'react';
import './generalStyles.scss';
import Description from './Description';
import TypeRef from './TypeRef';
import Args from './Args';

const Field: FC<any> = ({ field }) => {
  return (
    <div className='field-wrapper'>
      <div className='cont'>
      <span className="name">{field.name}</span>
      <Args args={field.args} />
      <TypeRef typeRef={field.type} />
      </div>
      <Description description={field.description} />
    </div>
  );
};

export default Field;
