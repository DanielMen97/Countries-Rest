import { ReactNode, createContext, useContext } from "react";
import { getAllCountries } from "../services/Services";
import { ChangeEvent, useEffect, useState } from "react";
import { ContextGlobalI, CountryOriginI } from "../types";

type CountriesType = CountryOriginI[];

// Create a context with a default value
const context = createContext<ContextGlobalI>({} as ContextGlobalI);

// Custom hook to use the context
export const useCustomContext = () => useContext(context);

export const ContextProvider = ({ children }: { children: ReactNode }) => {
  const [countries, setCountries] = useState<CountriesType>([]);
  const [country, setCountry] = useState<CountryOriginI | undefined> (undefined)
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
