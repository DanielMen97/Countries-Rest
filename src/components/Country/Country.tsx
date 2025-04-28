import styles from "./styles.module.scss";
import '../../index.css'
import { countryI } from "../../types";

const Country: React.FC<countryI> = ({flags,name,population,region,capital}) => {
  return (
    <article className={styles.list__countryCard}>
      <img
        className={styles.countryCard__flat}
        src={flags}
        alt="Country Flag"
      />
      <div className={`${styles.countryCard__info} center-start`}>
        <h3 className={styles.info__name}>{name}</h3>
        <p className={styles.info__description}>
          <strong>Population:</strong> {population.toLocaleString()}
        </p>
        <p className={styles.info__description}>
          <strong>Region:</strong> {region}
        </p>
        <p className={styles.info__description}>
          <strong>Capital:</strong> {capital}
        </p>
      </div>
    </article>
  );
};

export default Country;
