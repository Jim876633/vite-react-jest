import "@testing-library/jest-dom/extend-expect";
import { enableFetchMocks } from "jest-fetch-mock";
enableFetchMocks();
window.alert = jest.fn();

afterEach(() => {
  jest.clearAllMocks();
});
