import { HttpResponse, http } from "msw";

export const handlers = [
  http.get("https://example.com/pokemon", () => {
    return HttpResponse.json({
      name: "Pikachu",
      type: "Electric",
    });
  }),
];
