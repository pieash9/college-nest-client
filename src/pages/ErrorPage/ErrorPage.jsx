import { Link } from "react-router-dom";
import image from "../../assets/error.jpg";
const ErrorPage = () => {
  return (
    <div
      className="h-[100vh] w-full flex items-center justify-center bg-cover bg-center bg-no-repeat"
    >
      <img className="h-screen w-screen" src={image} alt="" />
      <div className="p-6 bg-white shadow-2xl rounded-lg absolute">
        <h1 className="text-3xl font-semibold mb-4 text-gray-700">Page Not Found</h1>
        <p className="text-gray-600 mb-6">
          The page you are looking for does not exist.
        </p>
        <Link
          to="/"
          className="block text-center bg-orange-400 text-white py-3 px-6 rounded hover:bg-orange-500"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
