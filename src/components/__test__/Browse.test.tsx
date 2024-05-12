import { render } from "@testing-library/react";
import Browse from "../Browse";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import MOCK_DATA from "./../__mocks__/nowPlayingMoviesMock.json";
import { act } from "react";
import appStore from "../../utils/appStore";
const mockFetch = jest.fn();
global.fetch = mockFetch;
mockFetch.mockResolvedValue({
  json: () => Promise.resolve(MOCK_DATA),
});
describe("Browse component", () => {
  it("should be render Browse component", async () => {
    await act(
      async () =>
        await render(
          <Provider store={appStore}>
            <BrowserRouter>
              <Browse />
            </BrowserRouter>
          </Provider>
        )
    );
  });
});
