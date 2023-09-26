import { connect, useDispatch } from 'react-redux';
import { fetchNews, selectArticles, selectLoading } from './newsSlice';
import { useCustomNavigate } from '../../utils/helpers';
import NewsList from './news';
import { useEffect } from 'react';
import { useParams } from 'react-router';
import { AppDispatch, RootState } from '../../app/store';

const mapStateToProps = (state: RootState) => {
    return {
        articles: selectArticles(state),
        loading: selectLoading(state),
    };
};

const mapDispatchToProps = (dispatch: AppDispatch) => {
    return {
        fetchNews: (countryCode: string | undefined) => dispatch(fetchNews(countryCode)),
    };
};

const ConnectedNewsList = connect(mapStateToProps, mapDispatchToProps)(NewsList);

const ListNews: React.FC = () => {
    const { countryCode } = useParams();
    const dispatch: AppDispatch = useDispatch();
    const onPush = useCustomNavigate();

    useEffect(() => {
        dispatch(fetchNews(countryCode || undefined));
    }, [dispatch, countryCode]);

    return (
        <>
            <ConnectedNewsList onPush={onPush} />
        </>
    );
};

export default ListNews;
