import { useAppDispatch, useAppSelector } from '../../hooks/redux-hooks';
import styles from './GraphRequestEditor.module.scss';
import RequestSection from './RequestSection/RequestSection';
import { useGetGraphqlMutation } from '../../redux/graphqlApi';
import { FC } from 'react';
import OptionsSection from './OptionsSection/OptionsSection';
import { API_URL, ERROR_MESSAGE } from '../../utils/constants';
import { addParseError } from '../../redux/store/parseError';

const GraphRequestEditors: FC = () => {
  const dispatch = useAppDispatch();
  const addCustomError = (data: string) => dispatch(addParseError(data));
  const querySchema = useAppSelector((state) => state.requestSchema);
  const queryVariables = useAppSelector((state) => state.requestVariables);
  const queryHeaders = useAppSelector((state) => state.requestHeaders);

  const [trigger] = useGetGraphqlMutation({ fixedCacheKey: 'myCacheKey' });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const myHeaders = new Headers();
    myHeaders.append('Content-type', 'application/json');

    try {
      try {
        queryVariables && JSON.parse(queryVariables);
      } catch {
        throw new Error(ERROR_MESSAGE.VARIABLES);
      }

      try {
        if (queryHeaders) {
          for (const [name, value] of Object.entries(JSON.parse(queryHeaders))) {
            myHeaders.append(name, value as string);
          }
        }
        const options = {
          url: API_URL,
          method: 'POST',
          headers: myHeaders,
          body: JSON.stringify({
            query: querySchema,
            variables: queryVariables ? JSON.parse(queryVariables) : {},
          }),
        };
        await trigger(options);
      } catch {
        throw new Error(ERROR_MESSAGE.HEADERS);
      }
    } catch (err) {
      addCustomError(JSON.parse((err as Error).message));
    }
  };

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.editors}>
          <RequestSection />
          <OptionsSection />
        </div>
        <button className={styles.get_button} type="submit">
          ►
        </button>
      </form>
    </div>
  );
};

export default GraphRequestEditors;
