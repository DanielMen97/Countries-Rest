import Countries from "./components/Countries/Countries";
import styles from "./App.module.scss";
import './index.css';
import CountryPage from "./components/CountryPage/CountryPage";

const App = () => {
  return (
    <>
      <header className={`${styles.header} center-between`}>
        <h2 className={styles.header__title}>Where in the World?</h2>
        <div className={styles.header__darkmode}>
          <i className={`${styles.darkmode__icon} fa-solid fa-moon`} />
          <span className={styles.darkmode__span}>Dark Mode</span>
        </div>
      </header>
      {/* <Countries /> */}
      <CountryPage />
    </>
  );
};

export default App;
