import { FC } from 'react';
import styles from './Args.module.scss';
import '../generalStyles.scss';
import { ArgType } from '../docs.interface';
import Arg from './Arg';

interface ArgsProps {
  args: ArgType[];
}

const Args: FC<ArgsProps> = ({ args }) => {
  return (
    <div className={styles.args_wrapper}>
      {args.length ? (
        <div className={styles.args}>
          <span className={styles.bracket_left + ' ' + styles.symbols}>(</span>
          {args.map((arg: ArgType, index: number) =>
            index !== args.length - 1 ? (
              <Arg key={arg.name} arg={arg} isLast={true} />
            ) : (
              <Arg key={arg.name} arg={arg} isLast={false} />
            )
          )}
          <span className={styles.symbols}>):&nbsp;</span>
        </div>
      ) : (
        <span className={styles.symbols}>:&nbsp;</span>
      )}
    </div>
  );
};

export default Args;
