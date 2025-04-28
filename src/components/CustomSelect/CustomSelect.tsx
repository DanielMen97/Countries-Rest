import { ChangeEvent } from "react";
import styles from "./styles.module.scss";

const CustomSelect = ({handleSelectChange}:{handleSelectChange:(event:ChangeEvent<HTMLSelectElement>) => void}) => {
  return (
    <div className={styles.navbar__selectGroup}>
      <select className={styles.selectGroup__select} onChange={handleSelectChange}>
        <option className={styles.select__option} selected hidden>
          Filter by Region
        </option>
        <option className={styles.select__option} value="Africa">
          <span className={styles.option__span}>Africa</span>
        </option>
        <option className={styles.select__option} value="Americas">
          <span className={styles.option__span}>Americas</span>
        </option>
        <option className={styles.select__option} value="Asia">
          <span className={styles.option__span}>Asia</span>
        </option>
        <option className={styles.select__option} value="Europe">
          <span className={styles.option__span}>Europe</span>
        </option>
        <option className={styles.select__option} value="Oceania">
          <span className={styles.option__span}>Oceania</span>
        </option>
      </select>
      <i className={`${styles.selectGroup__icon} fa-solid fa-chevron-down`} />
    </div>
  );
};

export default CustomSelect;
