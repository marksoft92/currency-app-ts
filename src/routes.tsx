import { RouteProps } from 'react-router-dom';
import Layout from './components/Layout';
import NewsList from './features/news/';
import InfoPage from './components/info';
import Article from './features/news/article';
const routes: RouteProps[] = [
    {
        path: '/',
        element: <Layout><InfoPage /></Layout>,
    },
    {
        path: '/country',
        element: <Layout><InfoPage /></Layout>,
    },
    {
        path: '/country/:countryCode',
        element: <Layout><NewsList /></Layout>,
    },
    {
        path: '/country/:countryCode/:title',
        element: <Layout><Article  /></Layout>,
    },
];

export default routes;