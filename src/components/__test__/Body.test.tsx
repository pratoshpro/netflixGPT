import { render } from "@testing-library/react";
import Body from "../Body";
import appStore from "@/utils/appStore";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { act } from "react";
describe("Body component", () => {
  it("should render Body component", async () => {
    await act(async () => {
      await render(
        <Provider store={appStore}>
          <BrowserRouter>
            <Body />
          </BrowserRouter>
        </Provider>
      );
    });
  });
});
