import React from 'react'
import HeroList from '../heroes/HeroList'

const DcScreen = () => {
  return (
    <div className="animate__animated animate__fadeIn">
      <h1>DC</h1>
      <hr />
      <HeroList publisher="DC Comics" />
    </div>
  )
}

export default DcScreen
