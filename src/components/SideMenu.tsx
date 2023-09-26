import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import { FormattedMessage } from 'react-intl';

import { useAppDispatch, useAppSelector } from '../app/hooks';
import { selectCurrency, selectLoading } from '../features/currencyList/currencyListSlice';
import { fetchCurrency } from '../features/currencyList/fetchCurrency';

const SideMenu: React.FC = () => {
    const { currency, loading } = useAppSelector((state) => ({
        currency: selectCurrency(state),
        loading: selectLoading(state)
    }));
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchCurrency());
    }, [dispatch]);

    const [visibleItems, setVisibleItems] = useState(10); // Liczba widocznych pozycji początkowo
    const increment = 10; // Liczba pozycji do wczytania za każdym razem

    const loadMore = () => {
        // Zwiększ liczbę widocznych pozycji o wartość "increment"
        setVisibleItems(prevVisibleItems => prevVisibleItems + increment);
    };

    return (
        <div>
            <Menu mode="inline">
                {loading ? (
                    <Menu.Item key="loading" icon={<Spin indicator={<LoadingOutlined />} />}>
                        <FormattedMessage id="spiner.loading" />
                    </Menu.Item>
                ) : (
                    (currency?.[0]?.rates || []).slice(0, visibleItems).map((country) => (
                        <Menu.Item key={country.currency} >
                            <Link to={`/currency/${country.currency.toLowerCase()}`}>{`Currency: ${country.currency} Rate: ${country.rate}`}</Link>
                        </Menu.Item>
                    ))
                )}
            </Menu>
            <button onClick={loadMore}>Load More</button>
        </div>
    );
};

export default SideMenu;
