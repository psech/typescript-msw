import { sum } from "../src/modules/sum";

describe("Sum", () => {
  test("should add", () => {
    expect(sum(4, 5)).toBe(9);
  });
});
