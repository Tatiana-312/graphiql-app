import { FC } from 'react';
import Description from './Description';

const Scalar: FC<any> = ({ type }) => {
  return (
    <div>
      <Description description={type.description} />
    </div>
  );
};

export default Scalar;
