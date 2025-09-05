import React from "react";
import { Link } from "react-router-dom";
import toyotaImg from "./assets/toyota-rav4.png";
import mercedesImg from "./assets/mercedes-c-class.png";
import bmwImg from "./assets/bmw-z4.png";
import fordImg from "./assets/ford-f150.png";
import heroImg from "./assets/hero2.jpg";


const cars = [
  { id: 1, name: "Mercedes-Benz C-Class", price: "$85/day", img: mercedesImg },
  { id: 2, name: "Toyota RAV4", price: "$70/day", img: toyotaImg },
  { id: 3, name: "BMW Z4 Roadster", price: "$120/day", img: bmwImg },
  { id: 4, name: "Ford F-150", price: "$95/day", img: fordImg },
];

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section
  className="relative w-full h-[70vh] flex items-center justify-center text-center text-white bg-cover bg-center"
  style={{ backgroundImage: `url(${heroImg})` }}
>
  <div className="px-4 sm:px-8">
    <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold drop-shadow-lg">
      Find Your Perfect Ride
    </h1>
    <p className="mt-4 text-base sm:text-lg md:text-xl max-w-2xl mx-auto drop-shadow-md">
      Explore cars for every trip — easy booking, best prices.
    </p>
  </div>
</section>



      {/* Featured Cars */}
      <section className="max-w-7xl mx-auto px-4 py-12 sm:py-16">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center mb-8">
          Our Featured Cars
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {cars.map((car) => (
            <Link to={`/car-details/${car.id}`} key={car.id}>
              <div className="rounded-2xl overflow-hidden shadow hover:shadow-md transition">
                <img
                  src={car.img}
                  alt={car.name}
                  className="w-full h-40 sm:h-48 md:h-56 object-cover"
                />
                <div className="p-4">
                  <p className="font-semibold text-sm sm:text-base">{car.price}</p>
                  <h3 className="font-bold text-lg sm:text-xl">{car.name}</h3>
                  <button className="mt-4 w-full bg-blue-600 text-white rounded-lg py-2 text-sm font-semibold hover:bg-blue-700">
                    Book via WhatsApp
                  </button>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
