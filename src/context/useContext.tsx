import { ReactNode, createContext, useContext } from "react";
import { getAllCountries } from "../services/Services";
import { ChangeEvent, useEffect, useState } from "react";
import { formatCountryDetails } from "../functions/Functions";
import { ContextGlobalI, CountryDetailsI } from "../types";
import {ContextGlobalDefault} from '../const/const'

type CountriesType = CountryDetailsI[];

// Create a context with a default value
const context = createContext<ContextGlobalI>({} as ContextGlobalI);

// Custom hook to use the context
export const useCustomContext = () => useContext(context);

export const ContextProvider = ({ children }: { children: ReactNode[] }) => {
  const [countries, setCountries] = useState<CountriesType>([]);
  const [filters, setFilters] = useState({
    region: "all",
    search: "",
  });

  useEffect(() => {
    getAllCountries()
      .then((data) => {
        // const formatCountries = formatCountryDetails(data);
        setCountries(data);
        // setCountries(data)
      })
  }, []);

  const filterCountries = countries.filter((country) => {
    const countryNameLower = country.name.toLowerCase();
    return (
      countryNameLower.includes(filters.search.toLowerCase()) &&
      (filters.region === "all" || country.region === filters.region)
    );
  });

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFilters({ ...filters, search: event.target.value });
  };

  const handleSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setFilters({ ...filters, region: event.target.value });
  };

  const value = {
    handleSelectChange,
    handleInputChange,
    filterCountries,
  };
  return <context.Provider value={value}>{children}</context.Provider>;
};
