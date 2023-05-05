import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../redux/hook';
import styles from './GraphRequestEditor.module.scss';

import RequestSection from './RequestSection/RequestSection';
import VariablesSection from './ParamsSection/VariablesSection';

const GraphRequestEditor = () => {
  const querySchema = useAppSelector((state) => state.requestSchema);
  const queryVariables = useAppSelector((state) => state.requestVariables);

  const [responseData, setResponseData] = useState('');

  const url = 'https://rickandmortyapi.com/graphql';

  const makeRequest = async (query: string, variables: string) => {
    console.log('QUERY', query);
    console.log('VARIABLES', variables);
    const res = await fetch(url, {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify({
        query: query,
        variables: variables ? JSON.parse(variables) : {},
      }),
    });

    const data = await res.json();
    return data;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setResponseData(JSON.stringify(await makeRequest(querySchema, queryVariables), null, 4));
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit}>
        <RequestSection />
        <div className={styles.params_buttons}>
          <button type="button" className={styles.params_button}>
            Variables
          </button>
          <button type="button" className={styles.params_button} disabled={true}>
            Headers
          </button>
        </div>
        <VariablesSection />
        <button type="submit">Get</button>
      </form>
      <pre>
        <code>{responseData}</code>
      </pre>
    </div>
  );
};

export default GraphRequestEditor;
