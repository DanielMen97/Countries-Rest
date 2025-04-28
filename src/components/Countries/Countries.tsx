import styles from "./styles.module.scss";
import "../../index.css";
import CustomSelect from "../CustomSelect/CustomSelect";
import Country from "../Country/Country";
import { useCustomContext } from "../../context/useContext";

const Countries = () => {

  const { filterCountries, handleInputChange, handleSelectChange } = useCustomContext()

  console.log(filterCountries)
  
  return (
    <main className={styles.countries}>
      <nav className={`${styles.countries__navbar} center-between`}>
        <div className={`${styles.navbar__inputGroup} center`}>
          <i
            className={`${styles.inputGroup__icon} fa-solid fa-magnifying-glass`}
          />
          <input
            className={`${styles.inputGroup__input}`}
            type="text"
            placeholder="Search for a country..."
            onChange={handleInputChange}
          />
        </div>
        <CustomSelect handleSelectChange={handleSelectChange} />
      </nav>
      <section className={styles.countries__list}>
        {filterCountries.map((country, key) => {
          const { name, flags, population, region, capital } = country;
          return (
            <Country
              key={key}
              flags={flags.png}
              name={name}
              population={population}
              region={region}
              capital={capital}
            />
          );
        })}
      </section>
    </main>
  );
};
export default Countries;
