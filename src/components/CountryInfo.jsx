import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
function CountryInfo() {
  const { CountryName } = useParams();
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/name/${CountryName}`)
      .then((response) => {
        if (!response.ok) {
          return;
        }
        return response.json();
      })
      .then((data) => {
        setData(data);
      });
  }, [CountryName]);

  function handleBorderClick(border) {
    fetch(`https://restcountries.com/v3.1/alpha/${border}`)
      .then((response) => {
        // console.log(response);
        if (!response.ok) {
          return;
        }
        return response.json();
      })
      .then((data) => {
        setData(data);
      });
  }

  return (
    <div className=" p-32    rounded-lg  ">
      <Link to={`/`} className="btn mb-14">
        Back to Homepage
      </Link>
      {data?.map((country, index) => (
        <div className="flex  auto-cols-max " key={index}>
          <div></div>
          <img
            className="rounded-t-sm col-span-1 w-auto h-auto scale-100 "
            src={country.flags.png}
          />

          <div className=" p-6">
            <h1 className="font-semibold mb-3 text-xl flex   leading-tight ">
              {country.name.common}
              {console.log(country.population)}
            </h1>

            <div className="flex flex-row gap-28">
              <div className="">
                <h6 className="font-semibold mb-2 text-xs flex   leading-tight  ">
                  Native Name :{" "}
                  <p className="font-light"> &nbsp;{country.name.official}</p>
                </h6>
                <h6 className="font-semibold mb-2 text-xs flex   leading-tight  ">
                  Population :
                  <p className="font-light"> &nbsp;{country.population}</p>
                </h6>
                <h6 className="font-semibold mb-2 text-xs flex   leading-tight  ">
                  Region : <p className="font-light">&nbsp;{country.region}</p>
                </h6>
                <h6 className="font-semibold mb-2 text-xs flex  leading-tight  ">
                  Sub Region :{" "}
                  <p className="font-light">&nbsp;{country.subregion}</p>
                </h6>
                <h6 className="font-semibold mb-2 text-xs flex  leading-tight  ">
                  Capital :{" "}
                  <p className="font-light">&nbsp;{country.capital}</p>
                </h6>
              </div>

              <div className="">
                <h6 className="font-semibold mb-2 text-xs flex   leading-tight  ">
                  Top Level Domain :{" "}
                  <p className="font-light"> &nbsp;{country.tld[0]}</p>
                </h6>
                <h6 className="font-semibold mb-2 text-xs flex   leading-tight  ">
                  Currencies :{" "}
                  <p className="font-light">
                    &nbsp;{Object.values(country.currencies)[0].name}
                    &nbsp;({Object.values(country.currencies)[0].symbol})
                  </p>
                </h6>

                <h6 className="font-semibold mb-2 text-xs flex   leading-tight  ">
                  Languages :{" "}
                  <p className="font-light">
                    &nbsp;
                    {Object.values(country.languages).map(
                      (language) => language + ", \n"
                    )}
                  </p>
                </h6>
              </div>
            </div>
            <div className="flex flex-row justify-between items-center">
              <h5>Border Countries :</h5>
              <p>
                {country.borders.map((border) => (
                  <>
                    <button
                      onClick={() => handleBorderClick(border)}
                      className="btn"
                    >
                      {border}{" "}
                    </button>{" "}
                  </>
                ))}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
export default CountryInfo;
