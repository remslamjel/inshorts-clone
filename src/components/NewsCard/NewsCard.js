import React from "react";
import "./NewsCard.css";

const NewsCard = ({ news }) => {
  return (
    <div className="news-card">
      <img
        src={
          news.urlToImage
            ? news.urlToImage
            : "https://storage.googleapis.com/proudcity/mebanenc/uploads/2021/03/placeholder-image.png"
        }
        alt={news.title}
        className="news-image"
      />
      <div className="news-content">
        <div>
          <span className="news-title">{news.title}</span>
          <br />
          <span className="news-author">
            <a
              href={news.url}
              target="_blank"
              rel="noreferrer"
              className="author-source"
            >
              <b>short</b>
            </a>{" "}
            <span className="muted">
              by {news.author ? news.author : "Unknown"}
            </span>
          </span>
        </div>

        <div className="description-container">
          <div className="description">{news.description}</div>
          <span className="read-more">
            read more at{" "}
            <a
              href={news.url}
              target="_blank"
              rel="noreferrer"
              className="news-source"
            >
              <b>{news.source.name}</b>
            </a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
