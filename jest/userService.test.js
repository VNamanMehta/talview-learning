import { jest, test, expect } from "@jest/globals";

const mockFetch = jest.fn();
jest.unstable_mockModule("node-fetch", () => ({
  __esModule: true,
  default: mockFetch
}));


const { getUser } = await import("./userService.js");

test("getUser returns mocked data", async () => {
  mockFetch.mockResolvedValue({
    json: () => Promise.resolve({ id: 1, name: "Mocked User" })
  });

  const user = await getUser(1);
  expect(user).toEqual({ id: 1, name: "Mocked User" });
  expect(mockFetch).toHaveBeenCalledTimes(1);
});
