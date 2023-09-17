import { useState, useEffect } from "react";
// import { useQuery } from "react-query";
import ReactPaginate from "react-paginate";
import Country from "./Country";
// import axios from "axios";

function Countrylist() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [searchError, setSearchError] = useState("");

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  const [selectedOption, setSelectedOption] = useState("");

  const handleSelectChange = (e) => {
    setSelectedOption(e.target.value);
  };

  useEffect(() => {
    setSearchError("");

    fetch(
      `https://restcountries.com/v3.1${
        search
          ? "/name/" + search
          : selectedOption
          ? "/region/" + selectedOption
          : "/all/"
      }`
    )
      .then((response) => {
        if (!response.ok) {
          setSearchError("No Countries found");
          return;
        }
        return response.json();
      })
      .then((data) => {
        setData(data);
      });
  }, [search, selectedOption]);

  const [currentPage, setCurrentPage] = useState(0);

  const [selectedCountryCountPerPage, setSelectedCountryCountPerPage] =
    useState("10");

  const handleSelectCountryCountPerPage = (e) => {
    setSelectedCountryCountPerPage(e.target.value);
  };
  const pageCount = Math.ceil(data?.length / selectedCountryCountPerPage);
  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
  };

  // Calculate the range of countries to display
  const startIndex = currentPage * selectedCountryCountPerPage;
  const endIndex = startIndex + selectedCountryCountPerPage;
  const displayedCountries = data?.slice(startIndex, endIndex);

  return (
    <>
      <div className="flex flex-row flex-wrap justify-center items-start align-middle lg:justify-between  bg-transparent">
        <div className=" mx-28 mt-10 ">
          <div className="input-group">
            <input
              type="text"
              name="search"
              placeholder="Search for a Country"
              onChange={handleSearchChange}
              value={search ? search : ""}
              className=" input rounded-lg input-bordered"
            />
            <button className="btn btn-square disabled" disabled>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
          </div>
        </div>

        <div className="flex flex-col justify-center align-middle items-center lg:items-end  lg:justify-start">
          <select
            className="select  select-bordered  max-w-xs  mx-28 mt-10 rounded-lg"
            value={selectedOption}
            onChange={handleSelectChange}
          >
            <option>Filter By Region</option>
            <option value="Africa">Africa</option>

            <option value="America">America</option>

            <option value="Asia">Asia</option>

            <option value="Europe">Europe</option>

            <option value="Oceania">Oceania</option>
          </select>
          <div className="flex justify-end">
            <select
              className="select  select-bordered  mx-28 mt-10 -mb-16 rounded-lg"
              value={selectedCountryCountPerPage}
              onChange={handleSelectCountryCountPerPage}
            >
              <option value={10}>10</option>
              <option value={50}>50</option>
              <option value={100}>100</option>
            </select>
          </div>
        </div>
      </div>

      <div className="flex flex-row flex-wrap justify-center gap-4  mt-20">
        {searchError}
        {displayedCountries?.map((country, index) => (
          <Country key={index} name={country} />
        ))}
      </div>
      <div className="flex justify-center justify-items-center items-center align-middle flex-row mt-5 mb-10 ">
        <ReactPaginate
          pageLinkClassName="join-item btn "
          pageCount={pageCount}
          onPageChange={handlePageChange}
          containerClassName="join center self-center "
          activeLinkClassName="active join-item btn-active"
          nextLinkClassName="join-item btn"
          previousLinkClassName="join-item btn"
          breakLinkClassName="join-item btn"
        />
      </div>
    </>
  );
}

export default Countrylist;
