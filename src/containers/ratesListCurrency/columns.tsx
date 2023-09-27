import React from "react";
import { FormattedMessage } from "react-intl";
import JsonView from "react18-json-view";

interface CurrencyData {
  [key: string]: number;
}

const JsonTree: React.FC<{ data: object }> = ({ data }) => {
  return <JsonView src={data} collapsed={0} theme="winter-is-coming" />;
};

const columns = [
  {
    title: <FormattedMessage id="date" />,
    dataIndex: "data",
    key: "data",
  },
  {
    title: <FormattedMessage id="titleColumn" />,
    dataIndex: "allCurrency",
    key: "allCurrency",
    render: (allCurrency: CurrencyData) => <JsonTree data={allCurrency} />,
  },
];

export default columns;
