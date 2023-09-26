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

    const [visibleItems, setVisibleItems] = useState(10); 
    const increment = 10; 

    const loadMore = () => {
        setVisibleItems(prevVisibleItems => prevVisibleItems + increment);
    };

    const LoadingIndicator: React.FC = () => (
        <Menu.Item key="loading" icon={<Spin indicator={<LoadingOutlined />} />}>
            <FormattedMessage id="spiner.loading" />
        </Menu.Item>
    );

    return (
        <div>
            <Menu mode="inline">
                {loading ? (
                       <LoadingIndicator />
                ) : (
                    (currency?.[0]?.rates || []).slice(0, visibleItems).map(({ currency, rate }) => (
                        <Menu.Item key={currency}>
                            <Link to={`/currency/${currency.toLowerCase()}`}>{`Currency: ${currency} Rate: ${rate}`}</Link>
                        </Menu.Item>
                    ))
                )}
            </Menu>
            <button onClick={loadMore}>Load More</button>
        </div>
    );
};

export default SideMenu;
