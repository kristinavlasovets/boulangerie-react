import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {useNavigate, useParams} from 'react-router-dom';

export const FullBread: React.FC = () => {
  const [bread, setBread] = useState<{
    imageUrl: string;
    title: string;
    price: number;
  }>();
  const {id} = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchBread() {
      try {
        const {data} = await axios.get(
          'https://62a72131bedc4ca6d7c2c681.mockapi.io/items/' + id
        );
        setBread(data);
      } catch (error) {
        alert('Error: loading error.');
        navigate('/');
      }
    }

    fetchBread();
  }, []);

  if (!bread) {
    return 'Loading...';
  }

  return (
    <div className="container">
      <img src={bread.imageUrl} alt="bread" />
      <h2>{bread.title}</h2>
      <h4>{bread.price} €</h4>
    </div>
  );
};
