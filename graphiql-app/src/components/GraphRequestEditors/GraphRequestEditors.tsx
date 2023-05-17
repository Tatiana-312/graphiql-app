import { useAppSelector } from '../../hooks/redux-hooks';
import styles from './GraphRequestEditor.module.scss';
import RequestSection from './RequestSection/RequestSection';
import { useGetGraphqlMutation } from '../../redux/graphqlApi';
import { FC } from 'react';
import OptionsSection from './OptionsSection/OptionsSection';
import { API_URL } from '../../utils/constants';
import { checkIsValidHeaders, checkIsValidVariables } from '../../utils/checkIsValidJson';
import { toast } from 'react-toastify';

const GraphRequestEditors: FC = () => {
  const querySchema = useAppSelector((state) => state.requestSchema);
  const queryVariables = useAppSelector((state) => state.requestVariables);
  const queryHeaders = useAppSelector((state) => state.requestHeaders);

  const [trigger] = useGetGraphqlMutation({ fixedCacheKey: 'myCacheKey' });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const myHeaders = new Headers();
    myHeaders.append('Content-type', 'application/json');

    try {
      checkIsValidVariables(queryVariables);
      checkIsValidHeaders(queryHeaders);

      if (queryHeaders) {
        for (const [name, value] of Object.entries(JSON.parse(queryHeaders))) {
          if (name.toLowerCase() !== 'content-type') {
            myHeaders.append(name, value as string);
          }
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
    } catch (err) {
      toast.error((err as Error).message, {
        theme: 'dark',
        autoClose: 3000,
        style: { background: '#3d3d3d' },
      });
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
