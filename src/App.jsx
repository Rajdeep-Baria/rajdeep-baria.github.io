import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import CarDetails from "./CarDetails";

function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex h-16 items-center justify-between">
        {/* Brand */}
        <Link to="/" className="font-bold text-xl text-blue-600">
          CarBooking
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-6 text-gray-600 text-sm">
          <Link to="/" className="hover:text-black">Home</Link>
          <Link to="/car-details/1" className="hover:text-black">Search</Link>
          <a href="#" className="hover:text-black">My Bookings</a>
        </nav>

        {/* Search (hidden on small screens) */}
        <input
          type="text"
          placeholder="Search cars..."
          className="hidden md:block border rounded-lg px-3 py-1 text-sm w-40 lg:w-64"
        />

        {/* User avatar */}
        <button className="h-8 w-8 rounded-full bg-gray-200"></button>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="border-t py-8 mt-16">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4 text-center">
        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()} CarBooking. All rights reserved.
        </p>
        <div className="flex gap-6 text-sm text-gray-500">
          <a href="#" className="hover:text-black">Company</a>
          <a href="#" className="hover:text-black">Support</a>
          <a href="#" className="hover:text-black">Legal</a>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/car-details/:id" element={<CarDetails />} />
      </Routes>
      <Footer />
    </>
  );
}
