import React, { useState, useEffect } from "react";

export default function App() {
  const sections = [
    "Home",
    "Cars",
    "Bikes",
    "Houses",
    "Services",
    "About",
    "Contact",
  ];

  const [active, setActive] = useState("Home");
  const [query, setQuery] = useState("");
  const [selectedItem, setSelectedItem] = useState(null);
  const [bookingOpen, setBookingOpen] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    document.title = `Renters — ${active}`;
  }, [active]);

  // Sample data
  const cars = [
    {
      id: "car-1",
      title: "Honda Lineup",
      price: 45,
      seats: 5,
      img: "/assets/carimages/honda1.webp",
      desc: "Hybrid powertrain: ~200 hp, 232 lb-ft torque. Gas versions continue but with changes.",
    },
    {
      id: "car-2",
      title: "Toyota Corolla",
      price: 45,
      seats: 5,
      img: "/assets/carimages/car2.jpg",
      desc: "Fuel-efficient, automatic, great for city and highway.",
    },
    {
      id: "car-3",
      title: "Steve Hopkins Honda",
      price: 45,
      seats: 5,
      img: "/assets/carimages/car3.avif",
      desc: "1.8L four-cylinder, AWD (All-Wheel Drive)",
    },
    {
      id: "car-4",
      title: "Fortuner",
      price: 45,
      seats: 5,
      img: "/assets/carimages/car4.png",
      desc: "Spacious SUV, perfect for family trips and off-road adventures.",
    },
    {
      id: "car-5",
      title: "Travelcon",
      price: 120,
      seats: 5,
      img: "/assets/carimages/car5.webp",
      desc: "Premium comfort and performance for special trips.",
    },
    {
      id: "car-6",
      title: "Toyota Land Cruiser",
      price: 80,
      seats: 3,
      img: "/assets/carimages/car6.jpg",
      desc: "Work-ready pickup with towing capacity.",
    },
  ];

  const bikes = [
    {
      id: "bike-1",
      title: "CB125",
      price: 25,
      img: "/assets/bikeimages/CB125.jpg",
      desc: "Balanced power and comfort for daily rides.",
    },
    {
      id: "bike-2",
      title: "CG150",
      price: 30,
      img: "/assets/bikeimages/CG150.jpg",
      desc: "Sporty, agile, and reliable — for enthusiasts.",
    },
    {
      id: "bike-3",
      title: "CB350RS",
      price: 35,
      img: "/assets/bikeimages/Honda CB350RS.jpg",
      desc: "Retro style with modern performance.",
    },
    {
      id: "bike-4",
      title: "HONDA AX-",
      price: 30,
      img: "/assets/bikeimages/HONDA_AX-.jpg",
      desc: "Efficient and easy to handle for urban commuting.",
    },
    {
      id: "bike-5",
      title: "CG 125",
      price: 20,
      img: "/assets/bikeimages/CG125.jpg",
      desc: "Sporty, agile, and reliable — for enthusiasts.",
    },
    {
      id: "bike-6",
      title: "Honda NX200",
      price: 36,
      img: "/assets/bikeimages/Honda NX200.avif",
      desc: "Versatile bike for city and light off-road.",
    },
  ];

  const houses = [
    {
      id: "house-1",
      title: "Cozy 2BR Apartment",
      price: 90,
      img: "/assets/houseimages/cozy 2br appartment.jpg",
      desc: "Central location, short-term friendly, high-speed Wi-Fi.",
    },
    {
      id: "house-2",
      title: "Luxury Villa",
      price: 320,
      img: "/assets/houseimages/luxury villa.jpg",
      desc: "Private pool, 4 bedrooms, ideal for family vacations.",
    },
    {
      id: "house-3",
      title: "Modern minimalist villa",
      price: 90,
      img: "/assets/houseimages/modern-2.jpg",
      desc: "Floor-to-ceiling glass walls, open-plan design, infinity pool overlooking the skyline, rooftop garden, and smart home automation.",
    },
    {
      id: "house-4",
      title: "Coastal contemporary",
      price: 320,
      img: "/assets/houseimages/costal range.jpeg",
      desc: "Built on a cliffside with panoramic sea views, large decks for sunsets, infinity pool, natural stone finishes, and indoor-outdoor living spaces.",
    },
    {
      id: "house-5",
      title: "Ultra-modern penthouse mansion",
      price: 350,
      img: "/assets/houseimages/ultra.jpg",
      desc: "360° cityscape views, rooftop pool, helipad, glass elevator, private cinema, and luxury spa.",
    },
    {
      id: "house-6",
      title: "Mountain cabin luxury",
      price: 220,
      img: "/assets/houseimages/mountain.jpeg",
      desc: "Timber and stone construction, heated floors, outdoor jacuzzi, floor-to-ceiling windows facing snowy peaks, and a private ski lift.",
    },
  ];

  const services = [
    { id: "s-1", title: "Airport Pickup", price: 30 },
    { id: "s-2", title: "Chauffeur Service", price: 18 },
    { id: "s-3", title: "Long-term Lease", price: 0 },
    { id: "s-4", title: "GPS Navigation", price: 5 },
    { id: "s-5", title: "Child Seat", price: 7 },
    { id: "s-6", title: "Wi-Fi Hotspot", price: 10 },
    { id: "s-7", title: "Extra Luggage", price: 12 },
    { id: "s-8", title: "Roadside Assistance", price: 15 },
    { id: "s-9", title: "Luxury Upgrade", price: 25 },
  ];

  const inventory = { Cars: cars, Bikes: bikes, Houses: houses };

  // ... rest of your code unchanged ...
}
