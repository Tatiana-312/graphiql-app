import { FC } from 'react';
import '../generalStyles.scss';
import TypeRef from '../TypeRef';
import { OfType } from '../docs.interface';

interface PossibleTypesProps {
  possibleTypes: OfType[];
}

const PossibleTypes: FC<PossibleTypesProps> = ({ possibleTypes }) => {
  return (
    <div>
      <h3 className="sub-title">Possible Types</h3>
      {possibleTypes.map((type: OfType) => (
        <div key={type.name}>
          <TypeRef typeRef={type} />
        </div>
      ))}
    </div>
  );
};

export default PossibleTypes;
