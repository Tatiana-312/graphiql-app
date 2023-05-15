import { FC } from 'react';
import Description from './Description';
import './generalStyles.scss';
import { v4 as uuidv4 } from 'uuid';
import { EnumValueType } from './docs.interface';

interface EnumValuesProps {
  enumValues: EnumValueType[];
}

const EnumValues: FC<EnumValuesProps> = ({ enumValues }) => {
  return (
    <div>
      <h3 className="sub-title">Values</h3>
      {enumValues.map((value: EnumValueType) => (
        <div key={uuidv4()}>
          <span className="name">{value.name}:&nbsp;</span>
          <Description description={value.description} />
        </div>
      ))}
    </div>
  );
};

export default EnumValues;
