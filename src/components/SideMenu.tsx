import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Menu, Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import { FormattedMessage } from "react-intl";

import { useAppDispatch, useAppSelector } from "../app/hooks";
import {
  selectCurrency,
  selectLoading,
} from "../containers/currencyList/currencyListSlice";
import { fetchCurrency } from "../containers/currencyList/fetchCurrency";

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

  const LoadingIndicator: React.FC = () => (
    <Menu.Item key="loading" icon={<Spin indicator={<LoadingOutlined />} />}>
      <FormattedMessage id="spiner.loading" />
    </Menu.Item>
  );

  return (
    <div className="left-content">
      <Menu mode="inline">
        {loading ? (
          <LoadingIndicator />
        ) : (
          (currency?.[0]?.rates || [])
            .slice(0, visibleItems)
            .map(({ currency, rate }) => (
              <Menu.Item key={currency}>
                <Link
                  to={`/currency/${currency.toLowerCase()}`}
                >{`Currency: ${currency} Rate: ${rate}`}</Link>
              </Menu.Item>
            ))
        )}
        <button className="button-load-more" onClick={loadMore}>
          <div className="dot dot-1"></div>
          <div className="dot dot-2"></div>
          <div className="dot dot-3"></div>
        </button>
      </Menu>
    </div>
  );
};

export default SideMenu;
