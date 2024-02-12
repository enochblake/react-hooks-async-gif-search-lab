import React, { useState, useEffect } from 'react';
import GifList from './GifList';
import GifSearch from './GifSearch';

const API_KEY = '9jCecxCmydS2hBe11ZM4wpubQCpKA8S2';
const API_URL = 'https://api.giphy.com/v1/gifs/search';

function GifListContainer({ apiKey }) {
  const [gifs, setGifs] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetchGifs();
  }, [searchTerm]);

  const fetchGifs = async () => {
    try {
      const response = await fetch(
        `${API_URL}?q=${searchTerm}&api_key=${apiKey}&rating=g`
      );
      const data = await response.json();
      setGifs(data.data.slice(0, 3)); 
    } catch (error) {
      console.error('Error fetching gifs:', error);
    }
  };

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  return (
    <div>
      <GifSearch onSearch={handleSearch} />
      <GifList gifs={gifs} />
    </div>
  );
}

export default GifListContainer;
