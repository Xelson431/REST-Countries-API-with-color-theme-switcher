import React, { useState, useEffect } from 'react';
// import { useQuery } from 'react-query';

import Country from './Country'

function Countrylist(){

    const [data, setData] = useState([]);
    const [search, setSearch] = useState("");
    const [searchError, setSearchError] = useState("");

    const handleSearchChange = (e) => {
        setSearch(e.target.value);
      };
    
      
        const [selectedOption, setSelectedOption] = useState(''); // State to track the selected option
      
        const handleSelectChange = (e) => {
          setSelectedOption(e.target.value); // Update the selected option in state
        };
      

      useEffect(() => {
        setSearchError("")
        // Inside the useEffect function, make the HTTP request using fetch
        fetch(`https://restcountries.com/v3.1${search ? '/name/' + search : selectedOption? '/region/'+ selectedOption : '/all/'}`)
          .then((response) => {
            console.log(response);
            if (!response.ok) {
                setSearchError("No Countries found")
                return 
            }
            return response.json();
          })
          .then((data) => {
            console.log(data);
            setData(data); // Update the state with the fetched data
          });
         
      }, [search,selectedOption]);
      
      
    return(
        <>
            <div className="flex flex-row justify-between">
            
            <input className='mx-28 mt-10 rounded-lg bg-white border-2 center self-start  p-5' name="search" placeholder='Search for a Country' onChange={handleSearchChange} value={search? search : ''} / >
            <select placeholder='Filter by Region' className='mx-28 mt-10 rounded-lg bg-white border-2 center self-start  p-5' value={selectedOption} onChange={handleSelectChange}>
            <option>
                    Filter By Region
                </option>
                <option value='Africa'>
                    Africa
                </option>
               
                <option value='America'>
                    America
                </option>

                <option value='Asia'>
                    Asia
                </option>

                <option value='Europe'>
                    Europe
                </option>

                <option value='Oceania'>
                    Oceania
                </option>
            </select>

            </div>
            
            <div className="flex flex-row flex-wrap justify-center gap-4  m-20">
            
            {  searchError }
            { data?.map((country, index) => (
            <Country key={index} name={country} />
          ))}

            
               
            </div>
        </>
    );
}


export default Countrylist;