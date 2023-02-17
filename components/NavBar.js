import React from 'react'
import Link from 'next/link'

const NavBar = () => {
  return (
    <div className='navbar1'>
        <Link legacyBehavior href={"/"}><a className="home-link"><h1>Weather <span>Now</span></h1></a></Link>
    </div>
  )
}

export default NavBar