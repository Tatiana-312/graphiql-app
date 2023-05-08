import { useAppDispatch, useAppSelector } from '../../../hooks/redux-hooks';
import Button from './Button';
import styles from './ParamsSection.module.scss';
import { changeDisplayVariablesSection } from '../../../redux/store/displayVariablesSectionSlice';
import VariablesSection from './VariablesSection';
import HeadersSection from './HeadersSection';
import {
  openHeadersSection,
  openVariablesSection,
} from '../../../redux/store/paramsSectionTypeSlice';
import { FC } from 'react';

const ParamsSection: FC = () => {
  const dispatch = useAppDispatch();
  const changeDisplay = () => dispatch(changeDisplayVariablesSection());
  const openVariables = () => dispatch(openVariablesSection());
  const openHeaders = () => dispatch(openHeadersSection());
  const sectionType = useAppSelector((state) => state.paramsSectionType);
  const isShown = useAppSelector((state) => state.displayVariablesSection.active);

  const [isVariablesActive, isHeadersActive] =
    sectionType === 'variables' ? [true, false] : [false, true];

  return (
    <div className={styles.container}>
      <div className={styles.params_buttons}>
        <Button name={'Variables'} onClick={() => openVariables()} isActive={isVariablesActive} />
        <button className={styles.show_button} onClick={() => changeDisplay()} type="button">
          {isShown ? '▼' : '▲'}
        </button>
        <Button name={'Headers'} onClick={() => openHeaders()} isActive={isHeadersActive} />
      </div>
      {sectionType === 'variables' ? <VariablesSection /> : <HeadersSection />}
    </div>
  );
};

export default ParamsSection;
