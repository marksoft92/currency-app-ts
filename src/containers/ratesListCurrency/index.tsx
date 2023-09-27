import React from "react";
import { connect, useDispatch } from "react-redux";
import { selectRates, selectLoading } from "./timeSeriesSlice";
import { fetchTimeseriesCurrency } from "./fetchTimeseriesCurrency";
import NewsList from "./timeSeries";
import { useEffect } from "react";
import { useParams } from "react-router";
import { AppDispatch, RootState } from "../../app/store";

const mapStateToProps = (state: RootState) => {
  return {
    rates: selectRates(state),
    loading: selectLoading(state),
  };
};

const mapDispatchToProps = (dispatch: AppDispatch) => {
  return {
    fetchTimeseriesCurrency: (currencyCode: string | undefined) =>
      dispatch(fetchTimeseriesCurrency(currencyCode)),
  };
};

const ConnectedNewsList = connect(
  mapStateToProps,
  mapDispatchToProps
)(NewsList);
const ListNews: React.FC = () => {
  const { currencyCode } = useParams();
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTimeseriesCurrency(currencyCode || undefined));
  }, [dispatch, currencyCode]);

  return (
    <>
      <ConnectedNewsList />
    </>
  );
};

export default ListNews;
