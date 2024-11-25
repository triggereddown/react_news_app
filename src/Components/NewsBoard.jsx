import { useState, useEffect } from 'react';
import Newsitem from './Newsitem'; 

const NewsBoard = ({category}) => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    let url = `https://newsapi.org/v2/everything?q=tesla&from=2024-11-24&sortBy=publishedAt&apiKey=${import.meta.env.VITE_API_KEY}`;
    fetch(url)
      .then(response => response.json())
      .then(data => setArticles(data.articles))
      .catch(error => console.error("Error fetching data:", error));
  }, [category]);

  return (
    <div className="container mx-auto p-4 bg-gray-600">
      <h2 className="text-3xl text-center font-bold mb-6 p-4 text-white">
        Triggered <span className="text-red-500">News</span>
      </h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {articles.length > 0 ? (
          articles.map((news, index) => (
            <Newsitem
              key={index}
              title={news.title}
              description={news.description}
              src={news.urlToImage}
              url={news.url}
            />
          ))
        ) : (
          <p className="text-center text-gray-600">Loading news...</p>
        )}
      </div>
    </div>
  );
};

export default NewsBoard;
