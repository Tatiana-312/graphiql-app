import { FC } from 'react';
import Description from './Description';
import EnumValues from './EnumValues';
import { EnumType } from './docs.interface';

interface EnumProps {
  type: EnumType;
}

const Enum: FC<EnumProps> = ({ type }) => {
  return (
    <div>
      <Description description={type.description} />
      <EnumValues enumValues={type.enumValues} />
    </div>
  );
};

export default Enum;
