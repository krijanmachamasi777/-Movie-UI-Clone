import React, { useEffect, useRef, useState } from 'react';
import './TitleCards.css';
import { Link } from 'react-router-dom';

const TitleCards = ({ id, title = "Popular on Netflix", category = "now_playing" }) => {
  const [apiData, setApiData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const cardsRef = useRef();

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjN2U4NGU0YWVjMTY5NmYzZGE0MGUzNzMxMDJiZjExYyIsIm5iZiI6MTc0ODMzMjQ4Mi45NDcsInN1YiI6IjY4MzU2ZmMyYjg1MDBjOTA4NWViMzlhOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.msnJqZmhumd8IKsad6VMAQD8Eb2vq-whST6D8CdXPGg'
    }
  };

  const handleWheel = (event) => {
    event.preventDefault();
    if (cardsRef.current) {
      cardsRef.current.scrollLeft += event.deltaY;
    }
  };

  useEffect(() => {
    const fetchMovies = async () => {
      setLoading(true);
      setError(null);
      const url = `https://api.themoviedb.org/3/movie/${category}?language=en-US&page=1`;

      try {
        const res = await fetch(url, options);
        if (!res.ok) throw new Error(`API responded with status ${res.status}`);
        const data = await res.json();
        setApiData(data.results || []);
      } catch (err) {
        console.error('Failed to fetch movies:', err);
        setError('Failed to load movies. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();

    const refCurrent = cardsRef.current;
    if (refCurrent) {
      refCurrent.addEventListener('wheel', handleWheel);
    }

    return () => {
      if (refCurrent) {
        refCurrent.removeEventListener('wheel', handleWheel);
      }
    };
  }, [category]);

  return (
    <section id={id} className="title-cards-section">
      <div className="title-cards">
        <h2>{title}</h2>

        {loading && (
          <div className="loading-spinner">
            <div className="spinner"></div>
            <p>Loading...</p>
          </div>
        )}

        {error && <p className="error-msg">{error}</p>}

        {!loading && !error && apiData.length === 0 && (
          <p className="status-msg">No movies found.</p>
        )}

        <div className="card-list" ref={cardsRef}>
          {!loading && !error && apiData.map((card) => (
            <Link to={`/player/${card.id}`} className="card" key={card.id}>
              <img
                src={
                  card.backdrop_path
                    ? `https://image.tmdb.org/t/p/w500${card.backdrop_path}`
                    : '/fallback-image.jpg'
                }
                alt={card.original_title || 'Untitled'}
              />
              <p>{card.original_title || 'Untitled'}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TitleCards;
