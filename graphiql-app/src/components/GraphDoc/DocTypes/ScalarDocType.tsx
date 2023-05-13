import { GraphQLObjectType } from 'graphql';
import { FC } from 'react';
import Description from '../Description';
import styles from './typeStyles.module.scss';

const ScalarDocType: FC<any> = ({ type }) => {
  return (
    <div>
      <h2 className={styles.title}>{type.name}</h2>
      <Description description={type.description} />
    </div>
  );
};

export default ScalarDocType;
