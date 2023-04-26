import React from 'react'
import Header from './Components/Header'
import Hero from './Components/Hero'
import Footer from './Components/Footer'
import Games from './Components/Games/Games'
import { useState } from 'react'

const App = () => {

  const [games, setGames] = useState([
    {
      id: 1,
      title: 'Pokémon HeartGold',
      body: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa sequi libero veritatis eligendi non, doloremque corporis quasi quis minus ex voluptas ducimus et reprehenderit voluptatibus dignissimos velit facilis reiciendis distinctio.'
    },
    {
      id: 2,
      title: 'Pokémon Scarlet',
      body: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa sequi libero veritatis eligendi non, doloremque corporis quasi quis minus ex voluptas ducimus et reprehenderit voluptatibus dignissimos velit facilis reiciendis distinctio.'
    },
    {
      id: 3,
      title: 'Pokémon Platinum',
      body: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa sequi libero veritatis eligendi non, doloremque corporis quasi quis minus ex voluptas ducimus et reprehenderit voluptatibus dignissimos velit facilis reiciendis distinctio.'
    },

    ])

  return (
    <div className='container'>
      <Header />
      {
    games.map(games => (
      <Games games={games} key={games.id}/>
    ))
    }
      <Footer/>
    </div>
  )
}

export default App