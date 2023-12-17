import React from 'react'

function HomePage({countryList}) {
    console.log(countryList[0]._id)
    console.log(countryList[0].alpha2Code)
    console.log(countryList[0].alpha3Code)
    console.log(countryList[0].name.common)
   
    return (
    <div className='align-self-center'>
        <br />
        <h2>WikiCountries: Your Guide to the World</h2>
        <br />
        {countryList.map((oneCountry) => {
            return (
                <div key={oneCountry._id} className="country-card">
                <img src={`https://flagpedia.net/data/flags/icon/72x54/${oneCountry.alpha2Code.toLowerCase()}.png`} alt={oneCountry.name.common} />
                <p>{oneCountry.name.common}</p>
                </div>
            )
        })}
    </div>
  )
}

export default HomePage