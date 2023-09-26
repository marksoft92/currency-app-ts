import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import { FormattedMessage } from 'react-intl';

import { useAppDispatch, useAppSelector } from '../app/hooks';
import { fetchCountries, selectCountries, selectLoading } from '../features/countries/countriesSLice';
import { selectLanguage } from '../features/languages/languagesSlice';

const SideMenu: React.FC = () => {
    const { countries, loading } = useAppSelector((state) => ({
        countries: selectCountries(state),
        loading: selectLoading(state)
      }));
      console.log('xxxx',countries)
    const dispatch = useAppDispatch();
    const locale: string = useAppSelector(selectLanguage);
    const localeShort = locale === 'en' ? 'bre' : locale === "pl" ? 'pol' : "bre"


    useEffect(() => {
        dispatch(fetchCountries());
    }, [dispatch]);

    return (
        <Menu mode="inline">

            {loading ? (
                <Menu.Item key="loading" icon={<Spin indicator={<LoadingOutlined />} />}>
                    <FormattedMessage id="spiner.loading" />
                </Menu.Item>
            ) : (
                (countries?.[0]?.rates || []).map((country) => (

                    <Menu.Item key={country.currency} >
                        <Link to={`/country/${country.currency.toLowerCase()}`}>{`Currency: ${country.currency} Rate: ${country.rate}`}</Link>
                    </Menu.Item>
                ))
            )}

        </Menu>
    );
};

export default SideMenu;


