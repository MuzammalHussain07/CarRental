function App() {
  const cars = [
    { id: 1, name: 'Tesla Model 3', price: '$99/day', img: 'https://tesla-cdn.thron.com/delivery/public/image/tesla/1c78593a-8a73-4d39-b544-78a8fdf75f06/bvlatuR/std/1200x628/lhd-model-3-social' },
    { id: 2, name: 'Honda Civic', price: '$49/day', img: 'https://di-uploads-pod17.dealerinspire.com/hondaoakland/uploads/2021/04/2022-Honda-Civic-Sedan-1.jpg' },
    { id: 3, name: 'Toyota Corolla', price: '$39/day', img: 'https://www.toyota.com/imgix/responsive/images/gallery/photos-videos/2022/corolla/22-corolla-gallery-001-full_tcm314-712542.jpg' }
  ];

  return (
    <div>
      <header>🚗 Happy Car Booking</header>

      <div className="app">
        <h2>Available Cars</h2>
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

        <section>
          <h2>How the Process Works</h2>
          <p>
            Booking a car with us is simple:
          </p>
          <ol style={{ textAlign: "left", maxWidth: "600px", margin: "1rem auto" }}>
            <li>Browse our wide range of available cars.</li>
            <li>Select the car that best fits your trip.</li>
            <li>Click <b>Book Now</b> and confirm your reservation.</li>
            <li>Pick up your car at the scheduled time and location.</li>
            <li>Enjoy your ride with full insurance and 24/7 support.</li>
          </ol>
          <p>
            Our goal is to make car sharing as easy as booking a hotel room — 
            safe, reliable, and fast.
          </p>
        </section>

        <div className="contact-buttons">
          <button onClick={() => window.location.href = 'tel:+18001234567'}>📞 Call Us</button>
          <button onClick={() => window.location.href = 'mailto:support@happycarbooking.com'}>✉️ Contact Us</button>
        </div>
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
