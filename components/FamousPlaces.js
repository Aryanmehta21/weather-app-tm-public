import React from 'react'
import Image from 'next/legacy/image'
import Link from 'next/link'


import DelhiImage from '../public/images/delhi.jpg'
import MumbaiImage from '../public/images/mumbai.jpg'
import BangaloreImage from '../public/images/bangalore.jpg'
import KolkataImage from '../public/images/kolkata.jpg'


const places = [
    {
    name: "Delhi",
    image: DelhiImage,
    url: "/location/delhi-1273294",
    },
    {
    name: "Mumbai",
    image: MumbaiImage,
    url: "/location/mumbai-1275339",
    },
    {
    name: "Bengaluru",
    image: BangaloreImage,
    url: "/location/bengaluru-1277333",
    },
    {
    name: "Kolkata",
    image: KolkataImage,
    url: "/location/kolkata-1275004",
    },

]
const FamousPlaces = () => {
  return (
    <div className="places">
        <div className="places__row">
            {places.length>0&&
                places.map((place,index)=>(
                    <div className="places__box" key={index}>
                       <Link legacyBehavior href={place.url}>
                       <a>
                        <div className="places__image-wrapper">
                            <Image 
                            src ={place.image} alt={`${place.name} Image`} layout ="fill" objectFit="cover"/>
                        </div>

                        <span>{place.name}</span>

                       </a>

                       </Link> 
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default FamousPlaces