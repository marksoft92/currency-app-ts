import React from 'react';
import { RouteProps } from 'react-router-dom';
import Layout from './components/Layout';
import NewsList from './features/news/';
import InfoPage from './components/info';

const routes: RouteProps[] = [
    {
        path: '/',
        element: <Layout><InfoPage /></Layout>,
    },
    {
        path: '/currency',
        element: <Layout><InfoPage /></Layout>,
    },
    {
        path: '/currency/:currencyCode',
        element: <Layout><NewsList /></Layout>,
    },
];

export default routes;