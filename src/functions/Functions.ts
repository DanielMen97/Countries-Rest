import { CountryOriginI } from "../types";

export function formatCountryDetails(countries: CountryOriginI[]) {
  return countries.map((country) => {
    const {
      name,
      flags,
      population,
      region,
      subregion,
      capital,
      tld,
      currencies = [],
      languages = [],
      borders,
      cioc
    } = country;
    const hasCapital = capital ? capital[0] : "N/A";
    const formatCurrencies = Object.values(currencies).map(
      (currency) => currency.name
    );
    const formatNativeName = Object.values(name.nativeName).map(
      (name) => name.common
    );
    const nativeName = formatNativeName[0];
    const formatLanguages = Object.values(languages);
    const hasBorders = borders ? borders : []
    return {
      name: name.common,
      flags,
      population,
      nativeName,
      region,
      subregion,
      capital: hasCapital,
      tld,
      currencies: formatCurrencies,
      languages: formatLanguages,
      borders: hasBorders,
      cioc
    };
  });
}
