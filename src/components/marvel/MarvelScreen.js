import React from 'react'
import HeroList from '../heroes/HeroList'

const MarvelScreen = () => {
  return (
    <div className="animate__animated animate__fadeIn">
      <h1>Marvel </h1>
      <hr />
      <HeroList publisher="Marvel Comics" />
    </div>
  )
}

export default MarvelScreen
