const NotFoundPage = () => {
  return (
    <div className="h-screen flex justify-center items-center">
      <div>
        <h1 className="text-3xl font-medium">
          <span className="text-9xl">404</span> Page Not Found
        </h1>
        <p className="text-xl font-medium italic text-gray-500">
          The page you requested could not be found.
        </p>
      </div>
    </div>
  );
};

export default NotFoundPage;
