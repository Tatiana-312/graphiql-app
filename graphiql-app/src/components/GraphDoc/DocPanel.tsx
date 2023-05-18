import { useAppDispatch, useAppSelector } from '../../hooks/redux-hooks';
import { changeVisibility } from '../../redux/store/docSlice';
import styles from './DocPanel.module.scss';

const DocPanel = () => {
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
        Doc
      </button>
    </div>
  );
};

export default DocPanel;
