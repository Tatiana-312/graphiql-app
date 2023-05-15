import { FC } from 'react';
import Description from '../Description';
import PossibleTypes from './PossibleTypes';
import { UnionType } from '../docs.interface';

interface UnionProps {
  type: UnionType;
}

const Union: FC<UnionProps> = ({ type }) => {
  return (
    <div>
      <Description description={type.description} />
      <PossibleTypes possibleTypes={type.possibleTypes} />
    </div>
  );
};

export default Union;
