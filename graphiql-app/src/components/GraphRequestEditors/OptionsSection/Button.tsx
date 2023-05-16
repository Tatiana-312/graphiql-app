import { FC } from 'react';
import styles from './Button.module.scss';

interface ButtonProps {
  name: string;
  onClick: () => void;
  isActive: boolean;
}

const Button: FC<ButtonProps> = ({ name, onClick, isActive }) => {
  const classes = styles.params_button + ' ' + styles.active;
  return (
    <button type="button" className={isActive ? classes : styles.params_button} onClick={onClick}>
      {name}
    </button>
  );
};

export default Button;
