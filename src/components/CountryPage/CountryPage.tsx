import { useCustomContext } from "../../hooks/useContext";
import styles from "./styles.module.scss";
import '../../index.css'

const CountryPage = () => {
  const { country } = useCustomContext();

  const { name, flags, descriptions, hasBorders } = country;

  return (
    <>
      <nav className={styles.country__navbar}>
        <button className={`${styles.navbar__button}`}>
          <i className={`${styles.button__icon} fa-solid fa-arrow-left-long`} />{" "}
          Back
        </button>
      </nav>
      <article className={`${styles.country__article}`}>
        <img className={styles.article__flag} src={flags.svg} alt={flags.alt} />  
        <aside className={styles.article__info}>
          <h1 className={styles.info__name}>{name}</h1>
          <section className={styles.info__descriptions}>
            {descriptions.map((description) => (
              <p className={styles.descriptions__item} key={description[0]}>
                <strong>{description[0]}{": "}</strong>
                {description[1]}
              </p>
            ))}
          </section>
          <section className={styles.info__borders}>
            <p className={styles.borders__label}>
              <strong>Border Countries: </strong>
            </p>
            {hasBorders.map((border) => (
              <span className={styles.borders__item} key={border}>{border}</span>
            ))}
          </section>
        </aside>
      </article>
    </>
  );
};

export default CountryPage;
