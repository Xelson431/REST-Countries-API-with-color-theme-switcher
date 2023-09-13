import React, { useContext,useState,createContext } from "react";



function Country(name){

    const CountryName = name.name.name.common
    const CountryFlag = name.name.flags.png
    return(
        
        <div
  className="max-w-xs w-auto block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-teal-400">
  <a href="#!">
  <img
    className="rounded-t-lg "
    src={CountryFlag}
    alt="" />
  </a>
  <div className="p-6">
    <h5
      className="mb-2 text-xl  text-center font-medium leading-tight text-neutral-800 dark:text-neutral-50">
      {CountryName}
    </h5>
    <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
      
    </p>
    
  </div>
</div>

        
    );
}
export default Country;