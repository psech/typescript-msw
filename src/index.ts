import { server } from "./mocks/node";

server.listen();

async function app() {
  const response = await fetch("https://example.com/pokemon");
  const pokemon = await response.json();

  console.log(pokemon);
}

app();
