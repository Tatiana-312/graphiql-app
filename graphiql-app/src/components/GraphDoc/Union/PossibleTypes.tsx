import { FC } from 'react';
import '../generalStyles.scss';
import TypeRef from '../TypeRef';
import { v4 as uuidv4 } from 'uuid';
import { OfType } from '../docs.interface';

interface PossibleTypesProps {
  possibleTypes: OfType[];
}

const PossibleTypes: FC<PossibleTypesProps> = ({ possibleTypes }) => {
  return (
    <div>
      <h3 className="sub-title">Possible Types</h3>
      {possibleTypes.map((type: OfType) => (
        <div key={uuidv4()}>
          <TypeRef typeRef={type} />
        </div>
      ))}
    </div>
  );
};

export default PossibleTypes;
