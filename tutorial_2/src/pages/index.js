import React from "react"
import {Link} from 'gatsby'
import NavBar from '../components/Navbar'

export default function Home() {
  return (
      <div>
      <NavBar />
      <h1>Hello People!</h1>
        <Link to="/blog/">Blog Page</Link>
      </div>
    
    )
}
