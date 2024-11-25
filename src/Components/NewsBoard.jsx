import { useState, useEffect } from 'react';

const NewsBoard = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const url = `https://newsapi.org/v2/everything?q=tesla&from=2024-11-24&sortBy=publishedAt&apiKey=${import.meta.env.VITE_API_KEY}`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => setArticles(data.articles))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="container mx-auto p-4 bg-gray-600">
      <h2 className="text-3xl text-center font-bold mb-6 p-4 text-white">
        Triggered <span className="text-red-500">News</span>
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {articles.length > 0 ? (
          articles.map((news, index) => (
            <div key={index} className="max-w-sm mx-auto bg-gray-400 shadow-lg rounded-lg overflow-hidden">
              <img
                className="w-full h-48 object-cover p-2 rounded-t-2xl"
                src={news.urlToImage}
                alt="Card Image"
              />
              <div className="p-4">
                <h2 className="text-lg font-semibold text-gray-800">{news.title}</h2>
                <p className="text-gray-600 mt-2">{news.description}</p>
                {news.url && (
                  <a href={news.url} className="text-blue-500 mt-4 block hover:underline">
                    Read More
                  </a>
                )}
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-600">Loading news...</p>
        )}
      </div>
    </div>
  );
};

export default NewsBoard;
