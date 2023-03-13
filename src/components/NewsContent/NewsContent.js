import React from "react";
import Container from "@mui/material/Container";
import "./NewsContent.css";
import NewsCard from "../NewsCard/NewsCard";
import Button from "@mui/material/Button";

const NewsContent = ({ news, totalNews, loadmore, setLoadmore }) => {
  return (
    <Container maxWidth="md">
      <div className="content">
        <div className="downloadBar">
          <span className="downloadText">
            For the best experience use ishorts app on your smartphone
          </span>
          <img
            src="https://assets.inshorts.com/website_assets/images/appstore.png"
            alt="app store"
            height="80%"
          />

          <img
            src="https://assets.inshorts.com/website_assets/images/playstore.png"
            alt="play store"
            height="80%"
          />
        </div>

        {news &&
          news.map((content) => {
            return <NewsCard key={content.title} news={content} />;
          })}

        {loadmore <= totalNews && (
          <Button
            variant="contained"
            onClick={() => setLoadmore(loadmore + 20)}
          >
            Load More
          </Button>
        )}
      </div>
    </Container>
  );
};

export default NewsContent;
