"use client";
import Table from "@/components/Table";
import { useState } from "react";

export default function Search() {
  const [cityName, setCityName] = useState('');
  const [cityData, setCityData] = useState([]);
  
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(cityName);
    if (!cityName) {
      alert("Please insert a city name");
      return;
    }

    try {
      const data = await getCityData(cityName);
      setCityData(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }


  const getCityData = async (city) => {    
    const url = `https://api.api-ninjas.com/v1/city?name=${city}`;
    const urlGeo = `https://api.api-ninjas.com/v1/geocoding?city=${city}`;
    const headers = {
      'X-Api-Key': process.env.NEXT_PUBLIC_API_NINJAS_KEY,
    };
  
    try {
      const response = await fetch(urlGeo, { headers });
      if (!response.ok) {
        throw new Error(`Error: ${response.status} ${response.statusText}`);
      }
      const data = await response.json();
      return data;
    } catch (error) {
      throw new Error('Request failed:', error);
    }
  };



  return (
    <>
      <form onSubmit={handleSubmit} >
        <div>
          <label htmlFor="city">New City</label>
          <input
            value={cityName}
            onChange={(e) => setCityName(e.target.value)}
            type="text"
            id="city"
            placeholder="Enter a city name"
          />
        </div>
        <button type="submit">Search</button>
      </form>
      <Table data={cityData} />

    </>
  )
}
