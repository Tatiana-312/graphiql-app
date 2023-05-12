import { FC } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './generalStyles.scss';

const Field: FC<any> = ({ field }) => {
  console.log('field', field);

  return (
    <div>
      <h3>Type</h3>
      <p className="description">{field.description}</p>
      <p className="name">{field.type.name}</p>
      <h3>Arguments</h3>
      <p>{field.args[0].name}</p>
    </div>
  );
};

export default Field;
