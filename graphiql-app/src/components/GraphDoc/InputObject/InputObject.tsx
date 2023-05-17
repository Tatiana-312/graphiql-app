import { FC } from 'react';
import Description from '../Description';
import InputFields from './InputFields';
import { InputObjectType } from '../docs.interface';

interface InputObjectProps {
  type: InputObjectType;
}

const InputObject: FC<InputObjectProps> = ({ type }) => {
  return (
    <div>
      <Description description={type.description} />
      <InputFields inputFields={type.inputFields} />
    </div>
  );
};

export default InputObject;
