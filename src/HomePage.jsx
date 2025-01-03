import React from 'react'
import { Link } from 'react-router-dom'
// import "./MenuCard.css";
import "./HomePage.css";

const HomePage = () => {
  return (
    <div>
<Link to="/menucard">Ankit Rajput Family Resortant Erandol</Link>
<Link to="/yashmali">yash mali Family Resortant Varnagaon</Link>
<Link to="/vishal">vishal sonar Family Resortant Varati</Link>
{/* <Link to="/jidu">jid Family Resortant Dhule</Link> */}
    </div>
  )
}

export default HomePage
