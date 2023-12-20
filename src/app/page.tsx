import { Hero } from "@/components";
import Image from "next/image";
import "./page.css";
import SearchBar from "@/components/searchBar/SearchBar";
export default function Home() {
  return (
    <main className="overflow-hidden">
      <Hero />
      <div className="discover">
        <div className="dicover-head">
          <h1 className="head-title ">Car Catalogue</h1>
          <p style={{ marginBottom: "20px" }}>
            Explore out cars you might like
          </p>
        </div>
        <div className="home__filters">
          <SearchBar />
          <div className="home__filter-container">
            
          </div>
        </div>
      </div>
    </main>
  );
}
