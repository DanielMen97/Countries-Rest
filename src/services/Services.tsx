import { countryI, flagsI, nameI } from "../types";

interface CountryOriginI extends Omit<countryI, 'flags' | 'name'> { 
  flags: flagsI; 
  name: nameI;
} 

export const getAllCountries = () => {
  return fetch("https://restcountries.com/v3.1/all")
    .then((response) => response.json())
    .then((data) => {
      return data.map((country: CountryOriginI) => {
        return {
          name: country.name.common,
          flags: country.flags.png,
          population: country.population,
          region: country.region,
          capital: country.capital ? country.capital[0] : "N/A",
        };
      });
    });
};
