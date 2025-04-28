import styles from "./App.module.scss";
import Countries from "./components/Countries/Countries";
import CountryPage from "./components/CountryPage/CountryPage";
import { ContextProvider } from "./context/useContext";
import "./index.css";

const App = () => {
  return (
    <ContextProvider>
      <header className={`${styles.header} center-between`}>
        <h2 className={styles.header__title}>Where in the World?</h2>
        <div className={styles.header__darkmode}>
          <i className={`${styles.darkmode__icon} fa-solid fa-moon`} />
          <span className={styles.darkmode__span}>Dark Mode</span>
        </div>
      </header>
      <Countries />
      {/* <CountryPage /> */}
    </ContextProvider>
  );
};

export default App;
