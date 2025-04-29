import { CountryOriginI } from "../../types";
import styles from './styles.module.scss'

const CountryPage = ({country}:{country:CountryOriginI}) => {
  
const {flags, population, tld, name, region, subregion, capital, currencies, languages, borders } = country

console.log(country)

  return (
    <>
      <nav className={styles.country__navbar}>
        <button className={styles.navbar__button}>
          <i className={`${styles.button__icon} fa-solid fa-arrow-left-long`} /> Back
        </button>
      </nav>
      <article className={styles.country__article}>
        <img className={styles.article__flag} src={flags.svg} alt={flags.alt} />
        <aside className={styles.article__info}>
          <h1 className={styles.info__name}>{name.common}</h1>
          <section className={styles.info__descriptions}>
            <div>
              <p>
                <strong>Native Name: </strong>
                {/* {name.nativeName} */}
              </p>
              <p>
                <strong>Population: </strong>
                {population.toLocaleString()}
              </p>
              <p>
                <strong>Region: </strong>
                {region}
              </p>
              <p>
                <strong>Sub Region: </strong>
                {subregion}
              </p>
              <p>
                <strong>Capital: </strong>
                {capital ? capital[0] : "N/A"}
              </p>
            </div>
            <div>
              <p>
                <strong>Top Level Domain: </strong>
                {tld[0]}
              </p>
              {/* <div>
                <strong>Currencies: </strong>
                {!currencies ? (
                  <p>N/A</p>
                ) : (
                  currencies.map((current) => (
                    <p key={current.code}>{current.name}</p>
                  ))
                )}
              </div> */}
              <div>
                <strong>Languages: </strong>
                {/* {languages.map((language) => (
                  <p key={language.iso639_2}>{language.name}</p>
                ))} */}
              </div>
            </div>
          </section>
          <section>
            <p>
              <strong>Border Countries: </strong>
            </p>
            {/* {borders.map((border) => (
              <span key={border}>{border}</span>
            ))} */}
          </section>
        </aside>
      </article>
    </>
  );
};

export default CountryPage;
