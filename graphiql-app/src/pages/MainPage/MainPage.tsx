import React, { Suspense } from 'react';
import GraphRequestEditors from '../../components/GraphRequestEditors/GraphRequestEditors';
import GraphResponse from '../../components/GraphResponse/GraphResponse';
import styles from './MainPage.module.scss';
import DocPanel from '../../components/GraphDoc/DocPanel';

const GraphDoc = React.lazy(() => import('../../components/GraphDoc/GraphDoc'));

const MainPage = () => {
  return (
    <div className={styles.mainPage}>
      <div className={styles.container}>
        <GraphRequestEditors />
        <GraphResponse />
        <Suspense fallback={null}>
          <GraphDoc />
        </Suspense>
        <DocPanel />
      </div>
    </div>
  );
};

export default MainPage;
