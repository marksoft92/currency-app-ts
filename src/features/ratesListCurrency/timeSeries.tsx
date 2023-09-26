import React from 'react';
import { Table } from 'antd';
import { RateInfo } from "./timeSeriesSlice"
import columns from './columns';
import Breadcrumbs from '../../components/Breadcrumbs';
interface NewsProps {
  rates: { [date: string]: RateInfo };
  onPush: (path: string) => void;
  loading: boolean;
}

const News: React.FC<NewsProps> = ({ rates, onPush, loading }) => {


  function obiektDoTablicy(obiekt: any) {
    const tablicaWynikowa = [];

    // Iterujemy przez klucze w obiekcie wejściowym
    for (const data in obiekt) {
      if (obiekt.hasOwnProperty(data)) {
        const element = {
          data: data,
          allCurrency: obiekt[data]
        };
        tablicaWynikowa.push(element);
      }
    }

    return tablicaWynikowa;
  }

  const tablicaWyjsciowa = obiektDoTablicy(rates);
  console.log(tablicaWyjsciowa);
  return (
    <>
      <Breadcrumbs />
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
