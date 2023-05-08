import { useAppDispatch, useAppSelector } from '../../hooks/redux-hooks';
import styles from './GraphRequestEditor.module.scss';
import RequestSection from './RequestSection/RequestSection';
import { useGetGraphqlMutation } from '../../redux/graphqlApi';
import { addApiData } from '../../redux/store/apiDataSlice';
import { useEffect } from 'react';
import ParamsSection from './ParamsSection/ParamsSection';
import { API_URL } from '../../utils/constants';

const GraphRequestEditors = () => {
  const dispatch = useAppDispatch();
  const addData = (data: string) => dispatch(addApiData(data));
  const querySchema = useAppSelector((state) => state.requestSchema);
  const queryVariables = useAppSelector((state) => state.requestVariables);
  const queryHeaders = useAppSelector((state) => state.requestHeaders);

  const [trigger, { data, isError, error }] = useGetGraphqlMutation();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const myHeaders = new Headers();
    myHeaders.append('Content-type', 'application/json');

    try {
      try {
        queryVariables && JSON.parse(queryVariables);
      } catch {
        throw new Error('Variables are invalid JSON');
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
        throw new Error('Headers are invalid JSON');
      }
    } catch (err: Error | any) {
      addData(err.message);
    }
  };

  useEffect(() => {
    if (!data) return;

    addData(data);
  }, [data]);

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.editors}>
          <RequestSection />
          <ParamsSection />
        </div>
        <button className={styles.get_button} type="submit">
          ►
        </button>
      </form>
    </div>
  );
};

export default GraphRequestEditors;
