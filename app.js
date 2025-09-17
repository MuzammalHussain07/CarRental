function App() {
  const cars = [
    { id: 1, name: 'Toyota Corolla', price: '$40/day', img: 'https://via.placeholder.com/300x200?text=Toyota+Corolla' },
    { id: 2, name: 'Honda Civic', price: '$45/day', img: 'https://via.placeholder.com/300x200?text=Honda+Civic' },
    { id: 3, name: 'Tesla Model 3', price: '$100/day', img: 'https://via.placeholder.com/300x200?text=Tesla+Model+3' }
  ];

  return (
    <div className="app">
      <h1>No-code Car Sharing MVP</h1>
      <p>Browse and book cars instantly.</p>
      <div className="car-list">
        {cars.map(car => (
          <div key={car.id} className="car-card">
            <img src={car.img} alt={car.name} />
            <h2>{car.name}</h2>
            <p>{car.price}</p>
            <button>Book Now</button>
          </div>
        ))}
      </div>
    </div>
  );
}

// Mount React App
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
