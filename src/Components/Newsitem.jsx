


const Newsitem = ({ title, description, src, url }) => {
    return (
      <div className="max-w-sm mx-auto bg-gray-400 shadow-lg rounded-lg overflow-hidden">
        <img
          className="w-full h-48 object-cover p-2 rounded-t-2xl" 
          src={src} 
          alt="Card Image"
        />
        <div className="p-4">
          <h2 className="text-lg font-semibold text-gray-800">{title}</h2>
          <p className="text-gray-600 mt-2">{description}</p>
          {url && (
            <a
              href={url}
              className="text-blue-500 mt-4 block hover:underline"
            >
              Read More
            </a>
          )}
        </div>
      </div>
    );
};

export default Newsitem;