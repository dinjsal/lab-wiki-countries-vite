import "./App.css";
import { Route, Routes } from 'react-router-dom'
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import CountryDetailsPage from "./pages/CountryDetailsPage";
import ErrorPage from "./pages/ErrorPage";
import axios from "axios";
import { useState, useEffect } from "react";

function App() {
  const [countryList, setCountryList] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const {data} = await axios.get(
        'https://ih-countries-api.herokuapp.com/countries'
      );
      setCountryList(data)
      console.log(data)
    }
    fetchData();
  }, [])
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={ <HomePage countryList={countryList} setCountryList={setCountryList}/>}/>
        <Route path='/countries/:countryId' element={ <CountryDetailsPage />}/>
        <Route path='*' element={ <ErrorPage />}/>
      </Routes>
    </div>
  );
}

export default App;
