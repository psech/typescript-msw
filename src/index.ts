import { server } from "./mocks/node";
import { getCountry } from "./modules/restcountries";

server.listen();

const countryDetails = await getCountry("poland");
console.log(countryDetails);
