import React, { Suspense } from 'react';
import GraphRequestEditors from '../../components/GraphRequestEditors/GraphRequestEditors';
import GraphResponse from '../../components/GraphResponse/GraphResponse';
import styles from './MainPage.module.scss';

const GraphDoc = React.lazy(() => import('../../components/GraphDoc/GraphDoc'));

const MainPage = () => {
  return (
    <div className={styles.mainPage}>
      <div className={styles.container}>
        <GraphRequestEditors />
        <GraphResponse />
        <Suspense fallback={<div>Documentation is Loading...</div>}>
          <GraphDoc />
        </Suspense>
      </div>
    </div>
  );
};

export default MainPage;
