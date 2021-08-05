import React from 'react';
import {
  Link
} from "react-router-dom";

const HeroCard = ({
  id,
  superhero,
  publisher,
  alter_ego,
  first_appearance,
  characters }) => {

  return (
    <div className="card ms-3 bg-dark" style={{ maxWidth: 540 }}>
      
      <img src={`./assets/heroes/${id}.jpg`} className="card-img-top" alt={superhero}></img>
      <div className="card-body">
        <h4 className="card-title text-center">{superhero}</h4>
        <h6 className="card-title text-center">{alter_ego}</h6>
        <Link to={`./hero/${id}`} className="btn btn-primary btn-block">
          More info!
        </Link>

      </div>
    </div>

  )
}

export default HeroCard
