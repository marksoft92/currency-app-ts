import React from "react";
import { Table } from "antd";
import { RateInfo } from "./types";
import columns from "./columns";
import { FormattedMessage } from "react-intl";
import { OrderedListOutlined } from "@ant-design/icons";
import { objectCurrencyToArray } from "../../utils/helpers";
interface CurrencyRatesListProps {
  rates: { [date: string]: RateInfo };
  loading: boolean;
}

const CurrencyRatesList: React.FC<CurrencyRatesListProps> = ({
  rates,
  loading,
}) => {
  const outputArray = objectCurrencyToArray(rates);

  return (
    <>
      <span className="titleColumn ">
        <FormattedMessage id="titleColumnHistoryCurrency" />
        &nbsp;
        <OrderedListOutlined />
      </span>
      <Table
        dataSource={outputArray}
        columns={columns}
        pagination={false}
        rowKey="data"
        loading={loading}
      />
    </>
  );
};

export default CurrencyRatesList;
