import React from 'react'

const HomeScreen = () => {
  return (
    <header className="masthead">
      <div className="container px-4 px-lg-5 d-flex h-100 align-items-center justify-content-center">
        <div className="d-flex justify-content-center">
          <div className="text-center">
            <img src="./hero.svg" width="150" height="150" class="d-inline-block align-top" alt=""></img>
            <h2 className="mx-auto mt-2 mb-5">A superhero catalog created with React.js by <a href="">Gabriel Carvajal</a></h2>
            <a className="btn btn-primary" href="#about">Github code!</a>
          </div>
        </div>
      </div>
    </header>
  )
}

export default HomeScreen
