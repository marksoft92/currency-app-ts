import React from "react";
import { FormattedMessage } from "react-intl";
//import ReactJson from 'react-json-view';

interface CurrencyData {
  [key: string]: number;
}

interface MyData {
  data: string;
  allCurrency: CurrencyData;
}

const columns = [
  {
    title: <FormattedMessage id="popup.author" />,
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

const JsonTree: React.FC<{ data: any }> = ({ data }) => {
  return (
    <></>
    // <ReactJson
    //     src={data}

    //     name={null}
    //     iconStyle="square"
    //     displayDataTypes={false}
    //     collapsed={0}
    // />
  );
};

export default columns;
