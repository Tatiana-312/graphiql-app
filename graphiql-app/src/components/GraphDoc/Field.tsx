import { FC } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './generalStyles.scss';
import Description from './Description';

const Field: FC<any> = ({ field }) => {
  // console.log('field', field);

  return (
    <div>
      <span className="name">{field.name}</span>
      <span className="arg">
        ({field.args.map((arg: any) => arg.name)}
        ):
      </span>
      {/* TODO render arguments correctly */}
      <Description description={field.description} />
    </div>
  );
};

export default Field;
