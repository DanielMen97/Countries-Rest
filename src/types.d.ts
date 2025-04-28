interface flagsI {
  png: string; // URL to the PNG image of the flag
  svg: string; // URL to the SVG image of the flag
}

interface nameI {
  common: string; // Common name of the country
  official: string; // Official name of the country
}

export interface countryI {
  flags: string; // Object of URLs to the flag image
  name: string; // Object of Names of the country
  population: number; // Population of the country
  region: string; // Region of the country
  capital: string | undefined; // Capital city of the country
}
