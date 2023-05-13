import { FC } from 'react';
import styles from './Description.module.scss';

const Description: FC<any> = ({ description }) => {
  //   console.log('description', description);
  if (!description) return null;

  return (
    <div>
      <p className={styles.description}>{description}</p>
    </div>
  );
};

export default Description;
