import { FC } from 'react';
import Description from './Description';
import InputFields from './InputFields';

const InputObject: FC<any> = ({ type }) => {
  return (
    <div>
      <Description description={type.description} />
      <InputFields inputFields={type.inputFields} />
    </div>
  );
};

export default InputObject;
