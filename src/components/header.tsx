import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Select } from "antd";
import { setCurrentLanguage } from "../services/languages/languagesSlice";
import { FormattedMessage } from "react-intl";
import { DollarOutlined } from "@ant-design/icons";

const Header: React.FC = () => {
  const dispatch = useDispatch();

  const handleLanguageSelectionChange = (countryCode: string) => {
    dispatch(setCurrentLanguage(countryCode));
  };

  const selectStyle = { width: 120 };
  const languageOptions = [
    { value: "pl", label: <FormattedMessage id="app.languagePl" /> },
    { value: "en", label: <FormattedMessage id="app.languageEn" /> },
  ];

  return (
    <header>
      <Link to="/">
        <FormattedMessage id="title" />
        <DollarOutlined />
      </Link>
      <div>
        <Select
          defaultValue="en"
          style={selectStyle}
          onChange={(value) => handleLanguageSelectionChange(value)}
          options={languageOptions}
        />
      </div>
    </header>
  );
};

export default Header;
