"use client";
import Image from "next/image";
import "./ShowMore.css";
import car from "../../assets/car.png";
import close from "../../assets/close.svg";
import { useDispatch } from "react-redux";
import { setToast } from "@/redux/setToastWindows";

const ShowMore: React.FC = () => {
  const dispatch = useDispatch();

  const closeButton = () => {
    dispatch(setToast({ value: [], open: false }));
  };

  return (
    <div className="show">
      <div className="show-win">
        <button type="button" className="close" onClick={closeButton}>
          <Image
            src={close}
            alt="close"
            width={20}
            height={20}
            className="object-contain"
          />
        </button>
        <Image className="win-image" src={car} alt="car" />
        <div className="win-content">
          <h1 className="content-header">Toyota </h1>
        </div>
      </div>
    </div>
  );
};

export default ShowMore;
