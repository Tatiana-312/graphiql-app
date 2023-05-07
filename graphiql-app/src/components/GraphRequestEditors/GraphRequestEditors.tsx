import { useAppDispatch, useAppSelector } from '../../hooks/redux-hooks';
import styles from './GraphRequestEditor.module.scss';
import RequestSection from './RequestSection/RequestSection';
import VariablesSection from './ParamsSection/VariablesSection';
import { useGetGraphqlMutation } from '../../redux/graphqlApi';
import { addApiData } from '../../redux/store/apiDataSlice';
import { useEffect } from 'react';

const GraphRequestEditors = () => {
  const dispatch = useAppDispatch();
  const addData = (data: string) => dispatch(addApiData(data));
  const querySchema = useAppSelector((state) => state.requestSchema);
  const queryVariables = useAppSelector((state) => state.requestVariables);

  const [trigger, { data }] = useGetGraphqlMutation();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const body = JSON.stringify({
      query: querySchema,
      variables: queryVariables ? JSON.parse(queryVariables) : {},
    });
    await trigger(body);
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
          <VariablesSection />
        </div>
        <button className={styles.get_button} type="submit">►</button>
      </form>
    </div>
  );
};

export default GraphRequestEditors;
