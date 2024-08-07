// import '../App.js';
import React, { useEffect, useState } from "react";
import Newsitem from "./Newsitem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  const capitalizeLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const updateNews = async () => {
    props.setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
    setLoading(true);
    let data = await fetch(url);
    props.setProgress(30);
    let parsedData = await data.json();
    props.setProgress(70);
    console.log(parsedData);
    setArticles(parsedData.articles);
    setTotalResults(parsedData.totalResults);
    setLoading(false);

    props.setProgress(100);
  };
  useEffect(() => {
    document.title = `${capitalizeLetter(props.category)} - DailyDose`;
    updateNews();
    // eslint-disable-next-line
  }, []);

  const previous = async () => {
    setPage(page - 1);
    updateNews();
  };
  const next = async () => {
    setPage(page + 1);
    updateNews();
  };
  const fetchMoreData = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=${
      props.country
    }&category=${props.category}&apiKey=${props.apiKey}&page=${
      page + 1
    }&pageSize=${props.pageSize}`;
    setPage(page + 1);
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    setArticles(articles.concat(parsedData.articles));
    setTotalResults(parsedData.totalResults);
  };

  return (
    <>
      <h1
        style={{
          color: "red",
          textAlign: "center",
          margin: "40px 0px",
          marginTop: "90px",
          fontFamily: '"Times New Roman", Times, serif',
        }}
      >
        Top {capitalizeLetter(props.category)} Headlines
      </h1>
      <p
        style={{
          borderBottom: "4px solid red",
          width: "25%",
          margin: "auto",
          borderRadius: "10px",
          marginTop: "-22px",
        }}
      ></p>
      {loading && <Spinner />}

      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length !== totalResults}
        loader={<Spinner />}
      >
        <div className="container" style={{ marginBottom: "100px" }}>
          <div className="row">
            {!loading &&
              articles.map((element) => {
                return (
                  <div
                    className="col-md-4"
                    key={element.url}
                    style={{
                      color: props.mode === "dark" ? "white" : "#042743",
                      backgroundColor:
                        props.mode === "dark" ? "rgb(33 37 41 / 66%)" : "white",
                    }}
                  >
                    <Newsitem
                      title={element.title ? element.title : ""}
                      description={
                        element.description ? element.description : " "
                      }
                      imageUrl={element.urlToImage}
                      newsUrl={element.url}
                      author={element.author}
                      date={element.publishedAt}
                      sources={element.source.name}
                      mode={props.mode}
                    />
                  </div>
                );
              })}
          </div>
        </div>
      </InfiniteScroll>
    </>
  );
};
News.defaultProps = {
  country: "in",
  pageSize: 8,
  category: "general",
};
News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
};
export default News;
