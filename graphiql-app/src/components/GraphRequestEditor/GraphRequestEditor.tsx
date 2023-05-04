import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../redux/hook';
import { addRequestSchema } from '../../redux/store/requestSchemaSlice';
import styles from './GraphRequestEditor.module.scss';
import { addRequestVariables } from '../../redux/store/requestVariablesSlice';

const GraphRequestEditor = () => {
  const dispatch = useAppDispatch();
  const addSchema = (query: string) => dispatch(addRequestSchema(query));
  const addVariables = (variables: string) => dispatch(addRequestVariables(variables));
  const querySchema = useAppSelector((state) => state.requestSchema);
  const queryVariables = useAppSelector((state) => state.requestVariables);

  const [state, setState] = useState('');

  const url = 'https://rickandmortyapi.com/graphql';

  const makeRequest = async (query: string, variables: string) => {
    console.log('QUERY', query)
    console.log('VARIABLES', variables)
    const res = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({ 
        query: query,
        variables: JSON.parse(variables),
     }),
    });

    const data = await res.json();
    return data;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setState(JSON.stringify(await makeRequest(querySchema, queryVariables), null, 4));
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit}>
        <textarea
          className={styles.editor}
          value={querySchema}
          onChange={(e) => addSchema(e.target.value)}
        />
            <textarea
          value={queryVariables}
          onChange={(e) => addVariables(e.target.value)}
        />
        <button type="submit">Get</button>
      </form>
      <pre>
        <code>{state}</code>
      </pre>
    </div>
  );
};

export default GraphRequestEditor;
