import "@testing-library/jest-dom/extend-expect";
import { server } from "./mock/server";
import { enableFetchMocks } from "jest-fetch-mock";
enableFetchMocks();
window.alert = jest.fn();

// Establish API mocking before all tests.
beforeAll(() => server.listen());

// Reset any request handlers that we may add during the tests,
// so they don't affect other tests.
afterEach(() => {
  jest.clearAllMocks();
  server.resetHandlers();
});

// Clean up after the tests are finished.
afterAll(() => server.close());
