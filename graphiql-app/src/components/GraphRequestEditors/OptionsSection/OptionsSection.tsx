import { useAppDispatch, useAppSelector } from '../../../hooks/redux-hooks';
import Button from './Button';
import styles from './OptionsSection.module.scss';
import { changeDisplayVariablesSection } from '../../../redux/store/displayVariablesSectionSlice';
import {
  openHeadersSection,
  openVariablesSection,
} from '../../../redux/store/optionsSectionTypeSlice';
import { FC, useRef } from 'react';
import OptionsEditor from './OptionsEditor';
import { addRequestVariables } from '../../../redux/store/requestVariablesSlice';
import { addRequestHeaders } from '../../../redux/store/requestHeadersSlice';

const OptionsSection: FC = () => {
  const variablesEditorParent = useRef(null);
  const headersEditorParent = useRef(null);

  const dispatch = useAppDispatch();
  const changeDisplay = () => dispatch(changeDisplayVariablesSection());
  const openVariables = () => dispatch(openVariablesSection());
  const openHeaders = () => dispatch(openHeadersSection());
  const sectionType = useAppSelector((state) => state.optionsSectionType);
  const isShown = useAppSelector((state) => state.displayVariablesSection.active);

  const changeVariables = (variables: string) => dispatch(addRequestVariables(variables));
  const queryVariables = useAppSelector((state) => state.requestVariables);
  const changeHeaders = (headers: string) => dispatch(addRequestHeaders(headers));
  const queryHeaders = useAppSelector((state) => state.requestHeaders);

  const [isVariablesActive, isHeadersActive] =
    sectionType === 'variables' ? [true, false] : [false, true];

  return (
    <div className={styles.container}>
      <div className={styles.params_buttons}>
        <Button name={'Variables'} onClick={() => openVariables()} isActive={isVariablesActive} />
        <button
          className={'btn ' + styles.show_button}
          onClick={() => changeDisplay()}
          type="button"
        >
          {isShown ? '▼' : '▲'}
        </button>
        <Button name={'Headers'} onClick={() => openHeaders()} isActive={isHeadersActive} />
      </div>
      {sectionType === 'variables' ? (
        <OptionsEditor
          name="variables"
          value={queryVariables}
          parent={variablesEditorParent}
          changeValue={changeVariables}
        />
      ) : (
        <OptionsEditor
          name="headers"
          value={queryHeaders}
          parent={headersEditorParent}
          changeValue={changeHeaders}
        />
      )}
    </div>
  );
};

export default OptionsSection;
