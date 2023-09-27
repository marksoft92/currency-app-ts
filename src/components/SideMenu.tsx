import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Menu } from "antd";
import { LineChartOutlined } from "@ant-design/icons";
import { FormattedMessage } from "react-intl";

import { useAppDispatch, useAppSelector } from "../app/hooks";
import {
  selectCurrency,
  selectLoading,
} from "../containers/currencyList/currencyListSlice";
import { fetchCurrency } from "../containers/currencyList/fetchCurrency";
import Loader from "./spiner";

const SideMenu: React.FC = () => {
  const { currency, loading } = useAppSelector((state) => ({
    currency: selectCurrency(state),
    loading: selectLoading(state),
  }));
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchCurrency());
  }, [dispatch]);

  const [visibleItems, setVisibleItems] = useState(10);
  const increment = 10;

  const loadMore = () => {
    setVisibleItems((prevVisibleItems) => prevVisibleItems + increment);
  };

  const currencyItems = (currency?.[0]?.rates || [])
    .slice(0, visibleItems)
    .map(({ currency, rate }) => ({
      label: (
        <Link to={`/currency/${currency.toLowerCase()}`}>
          <FormattedMessage id="currency" />
          &nbsp;
          <strong>{currency}</strong>
          &nbsp;
          <FormattedMessage id="titleColumnCurrency" />
          &nbsp;
          <strong>{rate}</strong>
        </Link>
      ),
      key: currency + rate,
    }));

  return (
    <div className="left-content">
      <span className="titleColumn ">
        <FormattedMessage id="titleColumnCurrency" />
        &nbsp;
        <LineChartOutlined />
      </span>

      {loading ? (
        <Loader />
      ) : (
        <>
          <Menu mode="inline" items={currencyItems}></Menu>
          <button className="button-load-more" onClick={loadMore}>
            <div className="dot dot-1"></div>
            <div className="dot dot-2"></div>
            <div className="dot dot-3"></div>
          </button>
        </>
      )}
    </div>
  );
};

export default SideMenu;
