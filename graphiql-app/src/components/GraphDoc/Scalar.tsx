import { FC } from 'react';
import Description from './Description';
import { ScalarType } from './docs.interface';
interface ScalarTypeProps {
  type: ScalarType;
}

const Scalar: FC<ScalarTypeProps> = ({ type }) => {
  return (
    <div>
      <Description description={type.description} />
    </div>
  );
};

export default Scalar;
