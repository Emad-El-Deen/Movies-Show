import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './style.css';
import Slider from 'react-slick';
import '@fortawesome/fontawesome-free/css/all.min.css';
import ReactStars from 'react-rating-stars-component';

export default function TvShowsDetails() {
    let { id } = useParams(); 
    const [tvShowsDetails, setTvShowsDetails] = useState({});
    const [relatedTvShows, setRelatedTvShows] = useState([]); 
    const [seasons, setSeasons] = useState([]); 
    const [rating, setRating] = useState(0); // State for rating
  
    useEffect(() => {
        getTv(id);
    }, [id]);
  
    function getTv(id) {
        axios
            .get(`https://api.themoviedb.org/3/tv/${id}?api_key=c9fac173689f5f01ba1b0420f66d7093`)
            .then(({ data }) => {
                setTvShowsDetails(data);
                setSeasons(data.seasons); 
                if (data.genres && data.genres.length > 0) {
                    const genreId = data.genres[0].id; 
                    getRelatedTvShows(genreId); 
                }
            })
            .catch((err) => {
                console.log(err);
            });
    }

    function getRelatedTvShows(genreId) {
        axios
            .get(`https://api.themoviedb.org/3/discover/tv?api_key=c9fac173689f5f01ba1b0420f66d7093&with_genres=${genreId}`)
            .then(({ data }) => {
                setRelatedTvShows(data.results.slice(0, 10)); 
            })
            .catch((err) => {
                console.log(err);
            });
    }
  
    function getSeasonDetails(seasonNumber) {
        axios
            .get(`https://api.themoviedb.org/3/tv/${id}/season/${seasonNumber}?api_key=c9fac173689f5f01ba1b0420f66d7093`)
            .then(({ data }) => {
                console.log(data); 
            })
            .catch((err) => {
                console.log(err);
            });
    }

    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 5, 
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    const ratingConfig = {
        size: 20,
        count: 5,
        value: rating,
        color: "gray",
        activeColor: "yellow",
        onChange: (newRating) => {
            setRating(newRating);
        },
    };

    return (
        <>
            <div className="row mt-5">
                <div className="col-md-4">
                    <div className="image">
                        {tvShowsDetails.poster_path && (
                            <img
                                src={`https://image.tmdb.org/t/p/w500${tvShowsDetails.poster_path}`}
                                alt={tvShowsDetails.name}
                                className="w-100"
                            />
                        )}
                    </div>
                </div>
                <div className="col-md-7 offset-1 d-flex align-items-center">
                    <div>
                        <h2>{tvShowsDetails.name}</h2>

                        <h1 className='h6 mt-3'>
                            {tvShowsDetails.genres
                                ? tvShowsDetails.genres.map((genre) => (
                                    <span key={genre.id} className={`badge text-bg-${genre.name.toLowerCase()} me-3`}>
                                        {genre.name}
                                    </span>
                                ))
                                : ''}
                        </h1>

                        <p className="text-white mt-3">{tvShowsDetails.overview}</p>
  
                        <ul className="mt-5 p-0">
                            <div className="d-flex ">
                                <li className="mb-2 col-md-5">
                                    <i className="fas fa-star me-2"></i> {/* Vote Count Icon */}
                                    <span>Vote Count: </span> {tvShowsDetails.vote_count}
                                </li>
                                <li className="mb-2 col-md-7">
                                    <i className="fas  fa-star me-2"></i> {/* Vote Icon */}
                                    <span>Vote:</span> {Math.trunc(tvShowsDetails.vote_average)}
                                </li>
                            </div>
                            <div className="d-flex ">
                                <li className="mb-2 col-md-5">
                                    <i className="fas fa-users me-2"></i> {/* Popularity Icon */}
                                    <span>Popularity: </span> {Math.trunc(tvShowsDetails.popularity)}
                                </li>
                                <li className="mb-2 col-md-7">
                                    <i className="fas fa-film me-2"></i> {/* Number of Seasons Icon */}
                                    <span>Number Of Seasons: </span> {Math.trunc(tvShowsDetails.number_of_seasons)}
                                </li>
                            </div>
                            <div className="d-flex ">
                                <li className="mb-2 col-md-5">
                                    <i className="fas fa-film me-2"></i> {/* Episodes Icon */}
                                    <span>Episodes: </span> {tvShowsDetails.number_of_episodes}
                                </li>
                                <li className="mb-2 col-md-7">
                                    <i className="fas fa-flag me-2"></i> {/* Origin Country Icon */}
                                    <span>Origin Country:</span> {tvShowsDetails.origin_country
                                        ? tvShowsDetails.origin_country.join(', ')
                                        : 'Unknown'}
                                </li>
                            </div>
                            <div className="d-flex ">
                                <li className="mb-2 col-md-5">
                                    <i className="fas fa-calendar-alt me-2"></i> {/* Release Date Icon */}
                                    <span>Release Date: </span> {tvShowsDetails.first_air_date}
                                </li>
                                <li className="mb-2 col-md-7">
                                    <i className="fas fa-language me-2"></i> {/* Language Icon */}
                                    <span>Language:</span> {tvShowsDetails.original_language}
                                </li>
                            </div>
                        </ul>
                        <div className="rating mt-5">
                            <h1 className="text-white h5">Rate this movie:</h1>
                            <ReactStars {...ratingConfig} /> {/* Easier star rating system */}
                        </div>
                    </div>
                </div>
            </div>

            {seasons.length > 1 && ( 
                <div className="seasons mt-5">
                    <h3 className="text-white">Seasons</h3>
                    <Slider {...settings}>
                        {seasons.map((season) => (
                            <div key={season.id} className="season-item p-3">
                                <img
                                    src={`https://image.tmdb.org/t/p/w500${season.poster_path}`}
                                    alt={season.name}
                                    className="w-100"
                                    onClick={() => getSeasonDetails(season.season_number)}
                                />
                                <h1 className="text-center h5 mt-2">{season.name}</h1>
                            </div>
                        ))}
                    </Slider>
                </div>
            )}

            <div className="related-tv mt-5">
                <h3 className="text-white">Related TV Shows</h3>
                <Slider {...settings}>
                    {relatedTvShows.map((show) => (
                        <div key={show.id} className="related-tv-item p-3">
                            <img
                                src={`https://image.tmdb.org/t/p/w500${show.poster_path}`}
                                alt={show.name}
                                className="w-100"
                            />
                            <h1 className="text-center h5 mt-2">{show.name}</h1>
                        </div>
                    ))}
                </Slider>
            </div>
        </>
    );
}
