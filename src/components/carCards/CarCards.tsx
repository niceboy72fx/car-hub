"use client";
import "./CarCards.css";
import car from "../../assets/car.png";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { setToast } from "@/redux/setToastWindows";
const CarCard: React.FC = () => {
  const dispatch = useDispatch();
  const showButton = () => {
    dispatch(setToast({ value: [], open: true }));

  };

  return (
    <div className="card">
      <h2 className="card-header">Toyota</h2>
      <div className="card-group">
        <h2 className="group-price">$35</h2>
        <h2 className="group-content">/ day</h2>
      </div>
      <Image className="card-img" src={car} alt="car" />
      <button className="card-button" onClick={showButton}>
        <p>View more</p>
      </button>
    </div>
  );
};

export default CarCard;
