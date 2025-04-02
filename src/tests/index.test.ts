import { getPaginationParameters } from "../utils";

describe("should test getPaginationParameters", () => {
  it("test getPaginationParameters", () => {
    const req: any = {
      query: {
        page: 1,
        perPage: 5,
      },
    };
    const expectedResult = getPaginationParameters(req);
    expect(expectedResult).toStrictEqual({
      limit: 5,
      offset: 0,
      page: 1,
      perPage: 5,
    });
  });
});
