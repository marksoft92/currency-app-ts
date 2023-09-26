import React from 'react';
import { connect, useDispatch } from 'react-redux';
import { fetchNews, selectArticles, selectLoading } from './newsSlice';
import { useCustomNavigate } from '../../utils/helpers';
import NewsList from './news';
import { useEffect } from 'react';
import { useParams } from 'react-router';
import { AppDispatch, RootState } from '../../app/store';

const mapStateToProps = (state: RootState) => {
    console.log(state)
    return {
        rates: selectArticles(state),
        loading: selectLoading(state),
    };
};

const mapDispatchToProps = (dispatch: AppDispatch) => {
    return {
        fetchNews: (currencyCode: string | undefined) => dispatch(fetchNews(currencyCode)),
    };
};

const ConnectedNewsList = connect(mapStateToProps, mapDispatchToProps)(NewsList);
console.log(ConnectedNewsList)
const ListNews: React.FC = () => {
    const { currencyCode } = useParams();
    const dispatch: AppDispatch = useDispatch();
    const onPush = useCustomNavigate();

    useEffect(() => {
        dispatch(fetchNews(currencyCode || undefined));
    }, [dispatch, currencyCode]);

    return (
        <>
            <ConnectedNewsList onPush={onPush} />
        </>
    );
};

export default ListNews;
