import React from 'react';
import NavBar from './NavBar';
import GifListContainer from './GifListContainer';

function App() {
  return (
    <div>
      <NavBar color="black" title="Giphy Search" />
      <GifListContainer apiKey="9jCecxCmydS2hBe11ZM4wpubQCpKA8S2" />
    </div>
  );
}

export default App;
