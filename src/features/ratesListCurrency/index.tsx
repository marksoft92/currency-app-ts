import React from 'react';
import { connect, useDispatch } from 'react-redux';
import { fetchTimeseriesCurrency, selectRates, selectLoading } from './newsSlice';
import { useCustomNavigate } from '../../utils/helpers';
import NewsList from './news';
import { useEffect } from 'react';
import { useParams } from 'react-router';
import { AppDispatch, RootState } from '../../app/store';

const mapStateToProps = (state: RootState) => {
    console.log(state)
    return {
        rates: selectRates(state),
        loading: selectLoading(state),
    };
};

const mapDispatchToProps = (dispatch: AppDispatch) => {
    return {
        fetchTimeseriesCurrency: (currencyCode: string | undefined) => dispatch(fetchTimeseriesCurrency(currencyCode)),
    };
};

const ConnectedNewsList = connect(mapStateToProps, mapDispatchToProps)(NewsList);
console.log(ConnectedNewsList)
const ListNews: React.FC = () => {
    const { currencyCode } = useParams();
    const dispatch: AppDispatch = useDispatch();
    const onPush = useCustomNavigate();

    useEffect(() => {
        dispatch(fetchTimeseriesCurrency(currencyCode || undefined));
    }, [dispatch, currencyCode]);

    return (
        <>
            <ConnectedNewsList onPush={onPush} />
        </>
    );
};

export default ListNews;
