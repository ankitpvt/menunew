import React from 'react'
import { Link } from 'react-router-dom'
// import "./MenuCard.css";
import "./HomePage.css";

const HomePage = () => {
  return (
    <div>
<Link to="/menucard">Ankit Rajput Family Resortant Erandol</Link>
<Link to="/jidu">Jid Patil Family Resortant Dhule</Link>
<Link to="/vishal">Vishal Sonar Family Resortant Varati</Link>
<Link to="/yash">Yash Mali Family Resortant Varangaon</Link>

    </div>
  )
}

export default HomePage
