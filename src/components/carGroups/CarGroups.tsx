"use client";
import CarCard from "../carCards/CarCards";
import "./CarGroups.css";
const CarGroups: React.FC = () => {
  return (
    <div className="group-cards">
      <CarCard />
      <CarCard />
      <CarCard />
      <CarCard />
      <CarCard />
      <CarCard />
      <CarCard />
      <CarCard />
    </div>
  );
};

export default CarGroups;
