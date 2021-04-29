import './App.css';
import NavBar from "./Components/NavBar";
import Filters from "./Components/Filters";
import Table from "./Components/Table";
import { useState } from 'react';
import AirPortData from "./Data/airports.json";


function App() {

  const headings = ['Name', 'ICAO', 'IATA', 'Elev.', 'Lat.', 'Long.', 'Country']
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (val) => {
    setSearchTerm(val);
  }

  const newSearchList = AirPortData.filter((data) => {
      return (
        data.icao.toString().toLowerCase().indexOf(searchTerm) > -1 || 
        data.name.toString().toLowerCase().indexOf(searchTerm) > -1 ||
        data.country.toString().toLowerCase().indexOf(searchTerm) > -1 ||
        data.elevation.toString().toLowerCase().indexOf(searchTerm) > -1 ||
        data.longitude.toString().toLowerCase().indexOf(searchTerm) > -1 ||
        data.latitude.toString().toLowerCase().indexOf(searchTerm) > -1
      )
  })

  return (
    <div className="App">
        <div className="app-components">
          <NavBar/>
          <Filters handleSearch={handleSearch}/>
          < Table AirPortData={newSearchList} headings={headings}/>
        </div>
    </div>
  );
}

export default App;
