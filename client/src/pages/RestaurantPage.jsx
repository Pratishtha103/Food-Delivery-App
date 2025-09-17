import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import api from '../services/Api';

function RestaurantPage() {
  const { id } = useParams();
  const [restaurant, setRestaurant] = useState(null);

  useEffect(() => {
    api.get(`/restaurants/${id}`).then(res => setRestaurant(res.data));
  }, [id]);

  if (!restaurant) return <h1>Loading...</h1>;

  return (
    <div className="container mt-4">
      <h2>{restaurant.name}</h2>
      <p>{restaurant.cuisine.join(', ')}</p>
    </div>
  );
}
export default RestaurantPage;
