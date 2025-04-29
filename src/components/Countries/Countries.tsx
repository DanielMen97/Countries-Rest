import styles from "./styles.module.scss";
import "../../index.css";
import CustomSelect from "../CustomSelect/CustomSelect";
import Country from "../CountryCard/Country";
import { useCustomContext } from "../../context/useContext";
import { CustomInput } from "../CustomInput/CustomInput";

const Countries = () => {

  const { filterCountries } = useCustomContext()
  
  return (
    <main className={styles.countries}>
      <nav className={`${styles.countries__navbar} center-between`}>
        <CustomInput />
        <CustomSelect />
      </nav>
      <section className={styles.countries__list}>
        {filterCountries.map((country) => {
          const { name, flags, population, region, capital, cioc } = country;
          const hasCapital = capital ? capital[0] : "N/A"
          return (
            <Country
              key={cioc}
              code={cioc}
              flags={flags.png}
              name={name.common}
              population={population}
              region={region}
              capital={hasCapital}
            />
          );
        })}
      </section>
    </main>
  );
};
export default Countries;
