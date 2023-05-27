import { FC, Fragment } from 'react';
import { ArgType } from '../docs.interface';
import TypeRef from '../TypeRef';
import styles from './Args.module.scss';

interface ArgProps {
  arg: ArgType;
  isLast: boolean;
}

const Arg: FC<ArgProps> = ({ arg, isLast }) => {
  return (
    <div className={styles.arg + ' ' + styles.symbols}>
      <span className="name">{arg.name}</span>:&nbsp;
      {isLast ? (
        <Fragment>
          <TypeRef typeRef={arg.type} />
          <span>,</span>
        </Fragment>
      ) : (
        <TypeRef typeRef={arg.type} />
      )}
    </div>
  );
};

export default Arg;
