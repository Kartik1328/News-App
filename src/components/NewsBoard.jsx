import { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import axios from "axios";

const NewsBoard = ({ category }) => {
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(1);
  const pageSize = 30; // Set your desired number of articles per page

  useEffect(() => {
    const fetchData = async () => {
      https://newsapi.org/v2/top-headlines?country=in&category=${category}&pageSize=${pageSize}&page=${page}&apiKey=3da844a0e8eb40b4a0efd8d698b7f5da


      try {
        const response = await axios.get(`https://newsapi.org/v2/top-headlines?country=in&category=${category}&pageSize=${pageSize}&page=${page}&apiKey=3da844a0e8eb40b4a0efd8d698b7f5da`);
        
        if (page === 1) {
          setArticles(response.data.articles);
        } else {
          setArticles((prevArticles) => [...prevArticles, ...response.data.articles]);
        }
      } catch (error) {
        console.log("Error fetching news:", error);
      }
    };

    fetchData();
  }, [category, page]);

  const loadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  // Reset the page when the category changes
  useEffect(() => {
    setPage(1);
  }, [category]);

  return (
    <div className="news-board-container bg-gray">
      <h2 className="text-center mt-3">
        <span className="fs-3">Latest </span>
        <span className="badge bg-danger fs-5"> News </span>
      </h2>

      <div className="news-container">
        {articles.map((article, index) => (
          <NewsItem
            key={index}
            title={article.title}
            description={article.description}
            src={article.urlToImage}
            url={article.url}
          />
        ))}
      </div>

      <button className="btn btn-warning fs-8 fw-bold rounded p-2 mb-4 mt-4" onClick={loadMore}>
        Load More...
      </button>

      <style jsx>{`
        .news-board-container {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .news-container {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
        }

        .news-item {
          margin-bottom: 10px;
        }
      `}</style>
    </div>
  );
};

export default NewsBoard;