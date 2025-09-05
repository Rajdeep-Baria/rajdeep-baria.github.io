import React from "react";
import { useParams } from "react-router-dom";
import toyotaImg from "./assets/toyota-rav4.png";
import mercedesImg from "./assets/mercedes-c-class.png";
import bmwImg from "./assets/bmw-z4.png";
import fordImg from "./assets/ford-f150.png";

const cars = [
  { id: 1, name: "Mercedes-Benz C-Class", price: "$85/day", img: mercedesImg, engine: "2.0L Turbo", seats: 5 },
  { id: 2, name: "Toyota RAV4", price: "$70/day", img: toyotaImg, engine: "2.5L Hybrid", seats: 5 },
  { id: 3, name: "BMW Z4 Roadster", price: "$120/day", img: bmwImg, engine: "3.0L TwinPower Turbo", seats: 2 },
  { id: 4, name: "Ford F-150", price: "$95/day", img: fordImg, engine: "3.3L V6", seats: 5 },
];

export default function CarDetails() {
  const { id } = useParams();
  const car = cars.find((c) => c.id === parseInt(id));

  if (!car) return <h2 className="text-center text-red-600 mt-10">Car not found!</h2>;

  return (
    <main className="max-w-7xl mx-auto px-4 py-12">
      <div className="grid md:grid-cols-3 gap-8">
        {/* Car Image */}
        <div className="md:col-span-2">
          <img src={car.img} alt={car.name} className="w-full h-80 object-cover rounded-xl" />
        </div>

        {/* Car Details */}
        <div>
          <h2 className="text-2xl font-bold mb-4">{car.name}</h2>
          <p className="text-gray-600 mb-6">
            Enjoy driving the {car.name}, equipped with {car.engine}, spacious seating for {car.seats}, and modern features.
          </p>

          <div className="grid grid-cols-2 gap-4 text-sm mb-6">
            <p><strong>Engine:</strong> {car.engine}</p>
            <p><strong>Seats:</strong> {car.seats} Passengers</p>
            <p><strong>Transmission:</strong> Automatic</p>
            <p><strong>Fuel:</strong> Petrol</p>
          </div>

          <div className="text-center">
            <p className="text-3xl font-bold text-blue-600 mb-2">{car.price}</p>
            <button className="bg-green-500 text-white px-4 py-2 rounded-lg font-semibold hover:bg-green-600">
              Book via WhatsApp
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
