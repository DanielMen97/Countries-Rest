import styles from "./App.module.scss";
import Countries from "./components/Countries/Countries";
import CountryPage from "./components/CountryPage/CountryPage";
import { useCustomContext } from "./hooks/useContext";
import "./index.css";

const App = () => {
  const { country } = useCustomContext();
  return (
    <>
      <header className={`${styles.header} center-between`}>
        <h2 className={styles.header__title}>Where in the World?</h2>
        <div className={styles.header__darkmode}>
          <i className={`${styles.darkmode__icon} fa-solid fa-moon`} />
          <span className={styles.darkmode__span}>Dark Mode</span>
        </div>
      </header>
      {!country.cioc && <Countries />}
      {country.cioc && <CountryPage />}
    </>
  );
};

export default App;
