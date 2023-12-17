import React from 'react'
import { Link } from 'react-router-dom'

const errorImg = 'https://media.giphy.com/media/xTiN0L7EW5trfOvEk0/giphy.gif'

const homeButton = 'http://www.newdesignfile.com/postpic/2015/11/house-icon-home-button_14081.png'
    

function ErrorPage() {
  return (
    <div>
       <img 
       style={{height: "15%", marginTop: "50px", marginBottom: "50px"}}
       src={errorImg} 
       alt="404-error" />
       <Link to='/'>
        <br />
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

export default ErrorPage

