import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../redux/hook';
import { addRequestSchema } from '../../redux/store/requestSchemaSlice';
import styles from './GraphRequestEditor.module.scss';

const GraphRequestEditor = () => {
  const dispatch = useAppDispatch();
  const addSchema = (query: string) => dispatch(addRequestSchema(query));
  const querySchema = useAppSelector((state) => state.requestSchema);

  const [state, setState] = useState('');

  const url = 'https://rickandmortyapi.com/graphql';

  const makeRequest = async (query: string) => {
    const res = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({ query }),
    });

    const data = await res.json();
    return data;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setState(JSON.stringify(await makeRequest(querySchema), null, 4));
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit}>
        <textarea
          className={styles.editor}
          value={querySchema}
          onChange={(e) => addSchema(e.target.value)}
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
