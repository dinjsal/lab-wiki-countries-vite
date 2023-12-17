import React from 'react'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'

function CountryDetailsPage({countryList}) {
  
  const loadingGif = 'https://gifdb.com/images/high/buffering-animated-text-icon-loading-u1h739who8u5mtw3.gif'

  const homeButton = 'http://www.newdesignfile.com/postpic/2015/11/house-icon-home-button_14081.png'
    
    if (!countryList) {
        return <img 
        src={loadingGif} 
        alt="home-gif" 
        style={{height: "15%"}} />
    }
  
  const [foundCountry, setFoundCountry] = useState(null);
  const { alpha3Code } = useParams();
  console.log('alpha3Code', alpha3Code);

  useEffect(() => {
    try {
      const fetchData = async() => {
        const { data } = await axios.get(
          'https://ih-countries-api.herokuapp.com/countries/' +  alpha3Code
        );
        setFoundCountry(data);
        console.log(data)
      }
      fetchData();
    } catch (err) {
      console.log('Error: ', err)
    }
  }, [alpha3Code])

  return (
    <div>
        <br />
        <h1>Country Details</h1>
       {foundCountry && (
        <>
        <img 
          src={`https://flagpedia.net/data/flags/icon/72x54/${foundCountry.alpha2Code.toLowerCase()}.png`} 
          alt={foundCountry.name.common} 
          style={{height: "50px", marginTop: "30px", marginBottom: "30px"}} 
          className="flag"
        />
        <h4>{foundCountry.name.common.toUpperCase()}</h4>
        <br />
        <br />
        <table class="table table-bordered table-striped text-center">
          <tbody>
            <tr>
              <th scope="row">Capital</th>
              <td>{foundCountry.capital}</td>
            </tr>
            <tr>
              <th scope="row">Area</th>
              <td>{foundCountry.area} km<sup>2</sup></td>
            </tr>
            <tr>
              <th scope="row">Borders</th>
              <td>
                <Link>
                {foundCountry.borders.map((border) => {
                  return (
                    <div key={border._id}> 
                      {border.borders}
                    </div>
                  )
                })}
                {/* {foundCountry.borders != [] ? {} : foundCountry.borders} */}
                  {/* {foundCountry.borders.map((border) => {
                    console.log(border)
                    return (
                      <div key={border._id}> 
                        <ul>
                          <li>
                            {border.borders == [] ? "none" : border.alpha3Code }
                          </li>
                        </ul>
                      </div>
                    )
                  })} */}
              </Link>
              </td>
            </tr>
          </tbody>
        </table>
        </>
       )}
        <br />
        <br />
        <Link to='/'>
        <img 
        className="home-button"
        src={homeButton} 
        alt="home-button"
        style={{height: "35px", marginRight: "5px"}}
        />
        </Link>
        <span style={{fontSize: "10px", textDecoration: "underline"}}>Back to Home Page</span>
        <br />
        <br />
    </div>
  )
}

export default CountryDetailsPage