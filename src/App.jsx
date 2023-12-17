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
    try {
      const fetchData = async () => {
        const {data} = await axios.get(
          'https://ih-countries-api.herokuapp.com/countries'
        );
        setCountryList(data)
        console.log(data)
      }
      fetchData();
    } catch (err) {
      console.log('Error:', err )
    }
  }, [])

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={ <HomePage countryList={countryList}/>}/>
        {/* :alpha3Code should also appear in const {alpha3Code} = useParams() */}
        <Route path='/countries/:alpha3Code' element={ <CountryDetailsPage countryList={countryList} />}/>
        <Route path='*' element={ <ErrorPage />}/>
      </Routes>
    </div>
  );
}

export default App;
