import React, { useEffect, useState } from "react";
import "./Home.module.css";
import axios from "axios";
import { Link } from "react-router-dom";
import { split } from "../../Helpers/Helpers";
export default function Home() {
  let [movies, setMovies] = useState([]);
  async function getProducts() {
    let x = await axios
      .get(
        `https://api.themoviedb.org/3/trending/all/day?api_key=c9fac173689f5f01ba1b0420f66d7093`
        // `https://api.themoviedb.org/3/discover/movie?api_key=c9fac173689f5f01ba1b0420f66d7093`
      )
      .then(({ data }) => {
        setMovies(data.results);
      })
      .catch((error) => {});
  }
  useEffect(() => {
    getProducts();
  }, []);
  let baseUrl = "https://image.tmdb.org/t/p/w500";

  return (
    <><div className="container">
      <div className="row g-3">
        {movies.map((product) => (
          <div className="col-md-3">
            <div className=" rounded">
              <div className="">
                <img
                  className="w-100 rounded"
                  src={baseUrl + product.poster_path}
                  alt=""
                />
              </div>
              <div className="">
                <h3 className="text-warning">{product.title||product.name} </h3>
                <h2 className="text-secondary">{product.media_type} </h2>
              </div>
            </div>
          </div>
        ))}
      </div>
      </div>
    </>
  );
}
