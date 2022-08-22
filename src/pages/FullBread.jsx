import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export const FullBread = () => {
  const [bread, setBread] = useState();
  const { id } = useParams();

  useEffect(() => {
    async function fetchBread() {
      try {
        const { data } = await axios.get(
          "https://62a72131bedc4ca6d7c2c681.mockapi.io/items/" + id
        );
        setBread(data);
      } catch (error) {
        alert("Error: loading error.");
      }
    }

    fetchBread();
  }, []);


  if (!bread) {
    return 'Loading...'
  }
  return (
    <div className="container">
      <h2>{bread.title}</h2>
      <h4>{bread.price} €</h4>
      <img src={bread.imageUrl} alt="bread" />
      
    </div>
  );
};
