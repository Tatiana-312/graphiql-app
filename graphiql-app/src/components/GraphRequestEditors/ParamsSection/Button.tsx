import { FC } from 'react';
import styles from './Button.module.scss';

interface Props {
  name: string;
}

const Button: FC<Props> = ({ name }) => {
  return (
    <button type="button" className={styles.params_button}>
      {name}
    </button>
  );
};

export default Button;
