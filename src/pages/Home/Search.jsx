import { useForm } from "react-hook-form";
import axios from "axios";
import { useState } from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import PopularCollegeCard from "../../components/Card/PopularCollegeCard";
const Search = () => {
  const { register, handleSubmit, reset } = useForm();
  const [searchData, setSearchData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [hideSearchData, setHideSearchData] = useState(false);
  //get search data
  const onSubmit = (data) => {
    setHideSearchData(true);
    setLoading(true);
    axios
      .get(
        `https://college-nest-server.vercel.app/colleges/search?collegeName=${data.search}`
      )
      .then((res) => {
        setSearchData(res?.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div className="bg-[#002147] relative z-20 p-3 md:p-0">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="md:w-1/2  mx-auto py-3"
        >
          <label
            htmlFor="default-search"
            className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
          >
            Search
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center w-full justify-between pl-3 pointer-events-none ">
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400 "
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <AiFillCloseCircle
              onClick={() => {
                setHideSearchData(false), reset();
              }}
              className=" text-gray-400 dark:text-gray-00 top-3 cursor-pointer z-10 hover:text-gray-500 absolute  right-0  mr-36 duration-300"
              size={24}
            />
            <input
              {...register("search")}
              type="search"
              id="default-search"
              className="block w-full p-3 pl-10 text-sm text-gray-700 border border-gray-300 rounded bg-gray-50   dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-orange-500 focus:outline-none"
              placeholder="Search Universities..."
              required
            />

            <button
              type="submit"
              className="text-white h-full px-10 absolute right-0 bottom-0 bg-orange-400 hover:bg-orange-500  focus:outline-none focus:ring-orange-300 font-medium rounded   py-2 dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800 uppercase text-md duration-300"
            >
              Search
            </button>
          </div>
        </form>
      </div>
      {hideSearchData && (
        <div className=" bg-orange-100 py-10 absolute z-10 w-full left-0 right-0 max-h-[500px] overflow-y-scroll lg:max-w-4xl mx-auto px-3 rounded-b-lg shadow-2xl duration-500">
          {loading && (
            <div className="text-center">
              <span className="loading loading-spinner loading-lg"></span>
            </div>
          )}
          {searchData.length == 0 && (
            <div className="text-center my-3">
              <h3 className="text-gray-600 text-xl font-medium">
                No data found
              </h3>
              <p className="text-gray-500 font-sm">
                Spell college name properly
              </p>
            </div>
          )}
          {searchData.length > 0 && (
            <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 ">
              {searchData.length > 0 &&
                searchData.map((college) => (
                  <PopularCollegeCard key={college._ida} college={college} />
                ))}
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default Search;
