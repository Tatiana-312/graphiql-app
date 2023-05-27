import { FC } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux-hooks';
import { changeVisibility } from '../../redux/store/docSlice';
import styles from './DocPanel.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook } from '@fortawesome/free-solid-svg-icons';

const DocPanel: FC = () => {
  const dispatch = useAppDispatch();
  const updateVisibilityState = () => dispatch(changeVisibility());
  const isActiveDoc = useAppSelector((state) => state.doc.active);
  const isDisableButton = useAppSelector((state) => state.doc.disable);

  const classes = isActiveDoc ? styles.button + ' ' + styles.active : styles.button;
  const classesWithDisable = isDisableButton ? classes + ' ' + styles.disable : classes;

  return (
    <div className={styles.panel}>
      <button
        className={'btn ' + classesWithDisable}
        onClick={() => updateVisibilityState()}
        disabled={isDisableButton}
      >
        <FontAwesomeIcon icon={faBook} />
      </button>
    </div>
  );
};

export default DocPanel;
