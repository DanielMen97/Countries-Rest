import data from "../../../data.json";

const CountryPage = () => {
  const {
    name,
    flag,
    population,
    nativeName,
    region,
    subregion,
    capital,
    topLevelDomain,
    currencies,
    languages,
    borders,
  } = data[0];

  const isCapital = capital ? capital : "N/A";

  const getBordersName = () => {
    if (borders === undefined) return ["N/A"];
    return borders.map((border) => {
      const country = data.filter((country) => country.alpha3Code === border);
      return country[0].name;
    });
  };

  const bordersName = getBordersName();

  return (
    <>
      <nav>
        <button>
          <i className="fa-solid fa-arrow-left-long" /> Back
        </button>
      </nav>
      <article>
        <img src={flag} alt={name} />
        <aside>
          <h1>{name}</h1>
          <section>
            <div>
              <p>
                <strong>Native Name: </strong>
                {nativeName}
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
                {isCapital}
              </p>
            </div>
            <div>
              <p>
                <strong>Top Level Domain: </strong>
                {topLevelDomain[0]}
              </p>
              <div>
                <strong>Currencies: </strong>
                {!currencies ? (
                  <p>N/A</p>
                ) : (
                  currencies.map((current) => (
                    <p key={current.code}>{current.name}</p>
                  ))
                )}
              </div>
              <div>
                <strong>Languages: </strong>
                {languages.map((language) => (
                  <p key={language.iso639_2}>{language.name}</p>
                ))}
              </div>
            </div>
          </section>
          <section>
            <p>
              <strong>Border Countries: </strong>
            </p>
            {bordersName.map((border) => (
              <span key={border}>{border}</span>
            ))}
          </section>
        </aside>
      </article>
    </>
  );
};

export default CountryPage;
