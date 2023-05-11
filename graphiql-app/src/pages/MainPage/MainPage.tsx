import GraphDoc from '../../components/GraphDoc/GraphDoc';
import GraphRequestEditors from '../../components/GraphRequestEditors/GraphRequestEditors';
import GraphResponse from '../../components/GraphResponse/GraphResponse';
import styles from './MainPage.module.scss';

const MainPage = () => {
  return (
    <div className={styles.mainPage}>
      <div className={styles.container}>
        <GraphRequestEditors />
        <GraphResponse />
        <GraphDoc />
      </div>
    </div>
  );
};

export default MainPage;
