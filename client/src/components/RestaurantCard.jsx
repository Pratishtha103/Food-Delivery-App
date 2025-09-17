import { Link } from 'react-router-dom';

function RestaurantCard({ restaurant }) {
  return (
    <div className="card m-2" style={{ width: '18rem' }}>
      <div className="card-body">
        <h5 className="card-title">{restaurant.name}</h5>
        <p>{restaurant.cuisine.join(', ')}</p>
        <Link to={`/restaurant/${restaurant._id}`} className="btn btn-primary">View</Link>
      </div>
    </div>
  );
}
export default RestaurantCard;