import { ReactNode, createContext, useContext } from "react";
import { getAllCountries } from "../services/Services";
import { ChangeEvent, useEffect, useState } from "react";
import { ContextGlobalI, CountryOriginI } from "../types";
import { countryDefault } from "../const/const";

type CountriesType = CountryOriginI[];

// Create a context with a default value
export const context = createContext<ContextGlobalI>({} as ContextGlobalI);

export const ContextProvider = ({ children }: { children: ReactNode }) => {
  const [countries, setCountries] = useState<CountriesType>([]);
  const [country, setCountry] = useState<CountryOriginI> ({...countryDefault})
  const [filters, setFilters] = useState({
    region: "all",
    search: "",
  });

  useEffect(() => {
    getAllCountries().then((data) => {
      setCountries(data);
    });
  }, []);

  const filterCountries = countries.filter((country) => {
    const countryNameLower = country.name.common.toLowerCase();
    return (
      countryNameLower.includes(filters.search.toLowerCase()) &&
      (filters.region === "all" || country.region === filters.region)
    );
  });

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) =>
    setFilters({ ...filters, search: event.target.value });

  const handleSelectChange = (event: ChangeEvent<HTMLSelectElement>) =>
    setFilters({ ...filters, region: event.target.value });

  const handleClick = (codeCountry: string) => 
    setCountry(filterCountries.filter(country => country.cioc === codeCountry)[0])

  const value = {
    handleSelectChange,
    handleInputChange,
    filterCountries,
    handleClick,
    country
  };
  return <context.Provider value={value}>{children}</context.Provider>;
};
