"use client"
import Table from "@/components/Table";
import { useState, useEffect } from "react";

const Favourites = () => {
  const [favourites, setFavourites] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/cities")
      .then(res => res.json())
      .then(data => setFavourites(data))
    console.log(favourites);
  }, []);


  // const getFavouritesCities = async () => {
  //   const url = `http://localhost:3000/api/cities`;
  //   try {
  //     const response = await fetch(url);
  //     if (!response.ok) {
  //       throw new Error(`Error: ${response.status} ${response.statusText}`);
  //     }
  //     const data = await response.json();
  //     console.log(Array.isArray(data));
  //     return data;
  //   } catch (error) {
  //     throw new Error('Request failed:', error);
  //   }
  // };

  // const data = await getFavouritesCities();

  return (
    <Table data={favourites} />
  )
}

export default Favourites;