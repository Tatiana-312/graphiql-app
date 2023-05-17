import { FC } from 'react';
import styles from './Description.module.scss';
interface DescriptionProps {
  description: string;
}

const Description: FC<DescriptionProps> = ({ description }) => {
  if (!description) return null;

  return (
    <div>
      <p className={styles.description}>{description}</p>
    </div>
  );
};

export default Description;
