import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Body from "./components/Body";
import Browse from "./components/Browse";
import Layout from "./components/Layout";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Body />,
      },
      {
        path: "browse",
        element: <Browse />,
      },
    ],
  },
]);
function App() {
  return (
    <Provider store={appStore}>
      <RouterProvider router={appRouter} fallbackElement={<p>Loading...</p>} />
    </Provider>
  );
}

export default App;
