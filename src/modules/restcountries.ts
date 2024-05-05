type CountryData = {
  name: string;
  currency: string;
  capital: string;
  region: string;
  population: number;
  area: number;
};

export const getCountry = async (countryName: string): Promise<CountryData> => {
  const response = await fetch(
    `https://restcountries.com/v3.1/name/${countryName}`
  );

  if (!response.ok) {
    throw new Error(`Cannot retrieve data for country ${countryName}`);
  }

  const json = await response.json();
  const country = json[0];

  const returnValue: CountryData = {
    name: country.name.common,
    capital: country.capital,
    region: country.region,
    area: country.area,
    population: country.population,
    currency: Object.keys(country.currencies)[0] ?? 'unknown'
  };

  return returnValue;
};
