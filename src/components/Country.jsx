function Country(name) {
  const Name = name.name.name.common;
  const Flag = name.name.flags.png;
  const Population = name.name.population;
  const Region = name.name.region;
  const Capital = name.name.capital;

  return (
    <div className=" shadow-2xl max-w-xs w-auto block rounded-lg  ">
      <a onClick={() => console.log(Name)}>
        <img className="rounded-t-sm h-52 w-96   " src={Flag} alt="" />

        <div className="p-6">
          <h5 className="font-semibold mb-3 text-xl flex  font-medium leading-tight ">
            {Name}
          </h5>
          <h6 className="font-semibold mb-2 text-xs flex  font-medium leading-tight  ">
            Population : <p className="font-light"> &nbsp;{Population}</p>
          </h6>
          <h6 className="font-semibold mb-2 text-xs flex  font-medium leading-tight  ">
            Region : <p className="font-light">&nbsp;{Region}</p>
          </h6>

          <h6 className="font-semibold mb-2 text-xs flex  font-medium leading-tight  ">
            Capital : <p className="font-light">&nbsp;{Capital}</p>
          </h6>
          <p className="mb-4 text-base "></p>
        </div>
      </a>
    </div>
  );
}
export default Country;
