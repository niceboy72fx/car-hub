import { Hero } from "@/components";
import Image from "next/image";
import "./page.css";
import SearchBar from "@/components/searchBar/SearchBar";
import CustomFilter from "@/components/customFilter/CustomFilter";
import { fuels, yearsOfProduction } from "@/constant";
import CarCard from "@/components/carCards/CarCards";
import CarGroups from "@/components/carGroups/CarGroups";
import ShowMore from "@/components/showMore/ShowMore";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { ShowToast } from "@/components/showMore/ShowToast";
export default function Home() {
  // const allCars = await fetchCars({
  //   manufacturer: searchParams.manufacturer || "",
  //   year: searchParams.year || 2022,
  //   fuel: searchParams.fuel || "",
  //   limit: searchParams.limit || 10,
  //   model: searchParams.model || "",
  // });

  const isDataEmpty: Array<String> = ["smsm"];

  return (
    <main className="overflow-hidden">
      <ShowToast>
        <ShowMore />
      </ShowToast>
      <Hero />
      <div className="discover">
        <div className="dicover-head">
          <h1 className="head-title ">Car Catalogue</h1>
          <p style={{ marginBottom: "20px" }}>
            Explore out cars you might like
          </p>
        </div>
        <div className="flex flex-col       xs:flex-col">
          <div className="flex flex-row w-full py-5 items-center">
            <SearchBar />
            <div className="flex flex-row gap-14">
              <CustomFilter title="fuel" options={fuels} />
              <CustomFilter title="year" options={yearsOfProduction} />
            </div>
          </div>
          {isDataEmpty !== [] ? (
            <section className="w-full my-5">
              <CarGroups />
            </section>
          ) : (
            <div className="home__error-container">
              <h2 className="text-black text-xl font-bold">Oops, no results</h2>
              <p></p>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
