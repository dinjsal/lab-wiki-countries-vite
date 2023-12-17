import React from 'react'
import { Link } from 'react-router-dom'


function HomePage({countryList}) {
    // console.log(countryList[0]._id)
    // console.log(countryList[0].alpha2Code)
    // console.log(countryList[0].alpha3Code)
    // console.log(countryList[0].name.common)
   
    const loadingGif = 'https://gifdb.com/images/high/buffering-animated-text-icon-loading-u1h739who8u5mtw3.gif'
    
    if (!countryList) {
        return <img src={loadingGif} alt="home gif" className="loading" />
    }

    return (
    <div className='align-self-center'>
        <br />
        <h2>WikiCountries: Your Guide to the World</h2>
        <br />
        {countryList.map((oneCountry) => {
            return (
                <div key={oneCountry._id} className="country-card">
                  <Link to={`/countries/${oneCountry.alpha3Code}`}>
                    <img 
                    src={`https://flagpedia.net/data/flags/icon/72x54/${oneCountry.alpha2Code.toLowerCase()}.png`} 
                    alt={oneCountry.name.common} 
                    style={{height: "50px"}} 
                    className="flag"
                />
                    </Link>
                <p>{oneCountry.name.common}</p>
                </div>
            )
        })}
    </div>
  )
}

export default HomePage