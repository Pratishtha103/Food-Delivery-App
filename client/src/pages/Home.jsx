import { useEffect, useState } from 'react';
import api from '../services/Api';
import RestaurantCard from '../components/RestaurantCard';

function Home() {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    api.get('/restaurants').then(res => setRestaurants(res.data));
  }, []);

  return (
    <div className="container mt-4">
      <h2>Restaurants</h2>
      <div className="d-flex flex-wrap">
        {restaurants.map(r => <RestaurantCard key={r._id} restaurant={r} />)}
      </div>
    </div>
  );
}
export default Home;
