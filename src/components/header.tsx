import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Select } from 'antd';
import { setCurrentLanguage } from '../features/languages/languagesSlice';
import { FormattedMessage } from 'react-intl';

const Header: React.FC = () => {

    const dispatch = useDispatch();
    const handleLanguageChange = (coutryCode: string) => {
        dispatch(setCurrentLanguage(coutryCode));
    };
    return (
        <header>
            <Link to="/"><FormattedMessage id="title" /></Link>
            <div>  <Select
                defaultValue="en"
                style={{ width: 120 }}
                onChange={v => handleLanguageChange(v)}
                options={[
                    { value: 'pl', label: <FormattedMessage id="app.languagePl" /> },
                    { value: 'en', label: <FormattedMessage id="app.languageEn" /> },
                    { value: 'no', label: <FormattedMessage id="app.languageNo" /> },
                ]}
            />
            </div>
        </header>
    );
};

export default Header;