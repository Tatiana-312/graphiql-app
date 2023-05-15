import { FC } from 'react';
import styles from './Args.module.scss';
import TypeRef from '../TypeRef';
import { v4 as uuidv4 } from 'uuid';
import '../generalStyles.scss';
import { ArgType } from '../docs.interface';

interface ArgsProps {
  args: ArgType[];
}

const Args: FC<ArgsProps> = ({ args }) => {
  return (
    <div className={styles.args_wrapper}>
      {args.length ? (
        <div className={styles.args}>
          <span className={styles.bracket_left + ' ' + styles.symbols}>(</span>
          {args.map((arg: ArgType, index: number) => {
            if (index !== args.length - 1) {
              return (
                <div key={uuidv4()} className={styles.arg + ' ' + styles.symbols}>
                  <span className="name">{arg.name}</span>:&nbsp;
                  <TypeRef typeRef={arg.type} />,
                </div>
              );
            }
            return (
              <div key={uuidv4()} className={styles.arg + ' ' + styles.symbols}>
                <span className="name">{arg.name}</span>:&nbsp;
                <TypeRef typeRef={arg.type} />
              </div>
            );
          })}
          <span className={styles.symbols}>):&nbsp;</span>
        </div>
      ) : (
        <span className={styles.symbols}>:&nbsp;</span>
      )}
    </div>
  );
};

export default Args;
