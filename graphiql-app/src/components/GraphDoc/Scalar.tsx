import { GraphQLObjectType } from 'graphql';
import { FC } from 'react';
import Description from './Description';
import styles from './DocTypes/typeStyles.module.scss';

const Scalar: FC<any> = ({ type }) => {
  return (
    <div>
      <h2 className={styles.title}>{type.name}</h2>
      <Description description={type.description} />
    </div>
  );
};

export default Scalar;
