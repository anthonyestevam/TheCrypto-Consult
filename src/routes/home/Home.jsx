import React, { useEffect, useState } from 'react'
import axios from 'axios';


import "./Home.css"

const Home = () => {
  const [search,setSearch] = useState("")

 const [coins,setCoins] = useState([])

 
 
 const getCoins = async () => {
  try {
    const response = await axios.get("https://www.worldcoinindex.com/apiservice/json?key=rUJUMluojtIKq0UxL2Jjzm2sTnvEPLjlR4u")
    const data = response.data
    const market = data.Markets
    setCoins(market)
  } catch (error) {
    console.log(error)
  }
 }

 useEffect(() => {
  getCoins()
 }, [])

  console.log(search)

  const filtercoins = coins.filter((coin) => coin.Name.startsWith(search))

  return (
    <div>
      <input className="search" placeholder="Search the coin name" 
      type='search' value={search}onChange={(e) => setSearch(e.target.value)} />
      <h1>Coins</h1>
      {coins.length === 0 ? <p>Loading...</p> : (
        filtercoins.map((coin) => (
          <div className="coin" key={coin.Volume_24h}>
          <h2>{coin.Label}</h2>
          <h4>{coin.Name}</h4>
          <p>USD: {coin.Price_usd}</p>          
          </div>
        ))
      )}
    </div>
  )
}

export default Home