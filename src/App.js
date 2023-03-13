import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import Footer from "./components/Footer/Footer";
import NavBarInshorts from "./components/NavBarInshorts";
import NewsContent from "./components/NewsContent/NewsContent";
import { newsDB } from "./components/data/newsDB";

function App() {
  const [news, setNews] = useState([]);
  const [totalNews, setTotalNews] = useState();
  const [loadmore, setLoadmore] = useState(20);
  const [category, setCategory] = useState("general");

  const getNews = async () => {
    try {
      //const proxyUrl = "https://cors-anywhere.herokuapp.com/";
      const news = await axios.get(
        `https://newsapi.org/v2/top-headlines?country=in&apiKey=${process.env.REACT_APP_API_KEY}&pageSize=${loadmore}&category=${category}`
      );
      setNews(news.data.articles);
      setTotalNews(news.data.totalResults);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getNews();
    // eslint-disable-next-line
  }, [totalNews, loadmore, category]);

  console.log(news);

  return (
    <div>
      <NavBarInshorts setCategory={setCategory} />

      <NewsContent
        news={news.length !== 0 ? news : newsDB.articles}
        totalNews={totalNews}
        loadmore={loadmore}
        setLoadmore={setLoadmore}
      />
      <Footer />
    </div>
  );
}

export default App;
