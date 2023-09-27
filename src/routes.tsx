import React from "react";
import { RouteProps } from "react-router-dom";
import Layout from "./components/Layout";
import TimeSeriesCurrency from "./containers/ratesListCurrency";
import InfoPage from "./components/info";

const routes: RouteProps[] = [
  {
    path: "/",
    element: (
      <Layout>
        <InfoPage />
      </Layout>
    ),
  },
  {
    path: "/currency",
    element: (
      <Layout>
        <InfoPage />
      </Layout>
    ),
  },
  {
    path: "/currency/:currencyCode",
    element: (
      <Layout>
        <TimeSeriesCurrency />
      </Layout>
    ),
  },
];

export default routes;
