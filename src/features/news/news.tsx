import React from 'react';
import { Table } from 'antd';
import { useParams } from 'react-router';
import { useDispatch } from 'react-redux';

import columns from './columns';
import Breadcrumbs from '../../components/Breadcrumbs';
import { convertToHyphenCase } from '../../utils/helpers';
import { selectArticle } from './newsSlice';

interface NewsProps {
  articles: any[];
  onPush: (path: string) => void;
}

const News: React.FC<NewsProps> = ({ articles, onPush }) => {
  const { countryCode } = useParams<{ countryCode: string }>();
  const dispatch = useDispatch();

  const handleRowClick = (record: any) => {
    const { title } = record;
    const hyphenatedTitle = convertToHyphenCase(title);
    const articlePath = `/country/${countryCode}/${hyphenatedTitle}`;
    onPush(articlePath);
    dispatch(selectArticle(record)); 
  };

  return (
    <>
      <Breadcrumbs />
      <Table
        dataSource={articles}
        columns={columns}
        onRow={(record) => ({
          onClick: () => handleRowClick(record),
        })}
      />
    </>
  );
};

export default News;
