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
      {/* <div className="row no-gutters">
        <div className="col-md-5">
          <img
            src={`./assets/heroes/${id}.jpg`}
            alt={superhero}
            className="card-img" />

        </div>
        <div className="col-md-7">
          <div className="card-body">
            <h5 className="card-title">{superhero}</h5>
            <p className="card-text">{alter_ego}</p>
            <p className="card-text">
              <small className="text-muted">{first_appearance}</small>
            </p>
            <Link to={`./hero/${id}`} className="btn btn-outline-primary">
              Más...
            </Link>

          </div>
        </div>
      </div> */}


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
