import React from 'react';
import SearchContainer from './components/SearchContainer'
import SearchResults from './components/SearchResults'
import AddressMap from './components/Map'

function App() {
    return (
      <div className="App">
        <SearchContainer />
        <SearchResults />
        <AddressMap />
      </div>
    );
}

export default App;
