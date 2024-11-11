import React from 'react';
import Gallery from './components/Gallery';

function App() {
  return (
    <div className="min-h-screen bg-pinkish ">
        <div className="h-40 grid place-items-center">
            <img className="h-40 content-center" src="/mean_gURLs_logo.png" alt="Mean Gurls Gallery" />
        </div>

      <Gallery />
    </div>
  );
}

export default App;
