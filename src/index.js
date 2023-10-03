import React from "react";
import ReactDOM from "react-dom/client";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import "./index.scss";
import SignIn from "./Components/SignIn/SignIn";
import SignUp from "./Components/SignUp/SignUp";
import HomeLayout from "./Layouts/HomeLayout";
import Main from "./Components/Main/Main";

const route = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="" element={<HomeLayout />}>
        <Route path="" element={<Main />} />
      </Route>
      <Route path="/signIn" element={<SignIn />} />
      <Route path="/signUp" element={<SignUp />} />
    </Route>
  )
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={route} />
  </React.StrictMode>
);
