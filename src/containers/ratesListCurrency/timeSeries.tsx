import React from "react";
import { Table } from "antd";
import { RateInfo } from "./types";
import columns from "./columns";
import { FormattedMessage } from "react-intl";
import { OrderedListOutlined } from "@ant-design/icons";
interface NewsProps {
  rates: { [date: string]: RateInfo };
  loading: boolean;
}

const News: React.FC<NewsProps> = ({ rates, loading }) => {
  function obiektDoTablicy(obiekt: any) {
    const tablicaWynikowa = [];

    // Iterujemy przez klucze w obiekcie wejściowym
    for (const data in obiekt) {
      if (obiekt.hasOwnProperty(data)) {
        const element = {
          data: data,
          allCurrency: obiekt[data],
        };
        tablicaWynikowa.push(element);
      }
    }

    return tablicaWynikowa;
  }

  const tablicaWyjsciowa = obiektDoTablicy(rates);

  return (
    <>
      <span className="titleColumn "><FormattedMessage id="titleColumnHistoryCurrency" />&nbsp;<OrderedListOutlined /></span>
      <Table
        dataSource={tablicaWyjsciowa}
        columns={columns}
        pagination={false}
        key="data"
        loading={loading}
      />
    </>
  );
};

export default News;
