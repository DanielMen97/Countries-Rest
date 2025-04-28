import { getAllCountries } from "../../services/Services";
import { ChangeEvent, useEffect, useState } from "react";
import { countryI } from "../../types";

type CountriesType = countryI[];

const useCountries = () => {
  const [countries, setCountries] = useState<CountriesType>([]);
  const [filters, setFilters] = useState({
    region: "all",
    search: "",
  });

  useEffect(() => {
    getAllCountries()
      .then((data) => {
        setCountries(data);
      })
      .catch((error) => console.error(error));
  }, []);

  const filterCountries = countries.filter((country) => {
    const countryNameLower = country.name.toLowerCase()
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

  return {
    handleSelectChange,
    handleInputChange,
    filterCountries,
  };
};

export default useCountries;
