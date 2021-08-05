import React from 'react'

const HomeScreen = () => {
  return (
    <header className="masthead">
      <div className="d-flex h-100 align-items-center justify-content-center">
        <div className="d-flex justify-content-center">
          <div className="text-center animate__animated animate__fadeIn">
            <img src="./hero.svg" width="140" height="140" className="d-inline-block align-top" alt=""></img>
            <h2 className="mx-auto mt-2 mb-5">A superhero catalog created with React.js by <a href="https://twitter.com/gabo_carvajal" target="_blank" rel="noreferrer">Gabriel Carvajal</a></h2>
            <a className="btn btn-primary" href="https://github.com/gcarvajalp/herores-app" target="_blank" rel="noreferrer">Github code!</a>
          </div>
        </div>
      </div>
    </header>
  )
}

export default HomeScreen
