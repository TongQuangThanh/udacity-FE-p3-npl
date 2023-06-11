import { checkForName } from "../src/client/js/checkForName"
describe("Testing the checkForName functionality", () => {
  test("Testing the checkForName() function", () => {
    expect(checkForName).toBeDefined();
  })
  
  test("Kirk is a captain", () => {
    expect(checkForName("Kirk")).toEqual(true);
  })

  test("Anna is not a captain", () => {
    expect(checkForName("Anna")).toBeDefined(false);
  })
});
