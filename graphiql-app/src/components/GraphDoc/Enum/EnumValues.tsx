import { FC } from 'react';
import Description from '../Description';
import '../generalStyles.scss';
import { EnumValueType } from '../docs.interface';

interface EnumValuesProps {
  enumValues: EnumValueType[];
}

const EnumValues: FC<EnumValuesProps> = ({ enumValues }) => {
  return (
    <div>
      <h3 className="sub-title">Values</h3>
      {enumValues.map((value: EnumValueType) => (
        <div key={value.name}>
          <span className="name">{value.name}:&nbsp;</span>
          <Description description={value.description} />
        </div>
      ))}
    </div>
  );
};

export default EnumValues;
