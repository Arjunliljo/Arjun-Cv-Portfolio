import { render } from "preact";
import * as React from "react";
import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import store from "./App/store.js";
import { SectionProvider } from "./Context/SectionContext.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
]);

render(
  <Provider store={store}>
    <SectionProvider>
      <RouterProvider router={router} />
    </SectionProvider>
  </Provider>,
  document.getElementById("app")
);
