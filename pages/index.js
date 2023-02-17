import Head from 'next/head'
import SearchBox from '@/components/SearchBox'
import { Inter } from '@next/font/google'
import FamousPlaces from '@/components/FamousPlaces'
import NavBar from '@/components/NavBar'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <Head>
        <title>Weather App - TM</title>
      </Head>

      <div className="home">
        <div className="container">
          <NavBar/>
          <SearchBox placeholder="Search for a city.."/>
          <FamousPlaces/>
        </div>
      </div>
    </div>
  )
}
