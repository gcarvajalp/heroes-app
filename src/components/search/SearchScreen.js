import React from 'react';
import { useParams } from 'react-router-dom';
import { heroes } from '../../data/heroes';
import { useForm } from '../../hooks/useForm';
import HeroCard from '../heroes/HeroCard';


const SearchScreen = () => {

  const heroesFiltered = heroes;

  const [formValues, handleInputChange] = useForm({
    search: ''
  });

  const { search } = formValues;

  const handleSearch = (e) => {
    e.preventDefault();
  }

  return (
    <div>
      <h1>Search</h1>
      <hr />
      {/* <div className="row">
        <div className="col-12">
          <form onSubmit={handleSearch}>
            <div className="">

            <input
              type="text"
              placeholder="Find your hero"
              className="form-control"
              name="search"
              autoComplete="off"
              value={search}
              onChange={handleInputChange}
            />
            <button
              type="submit"
              className="btn btn-outline-primary">
              Seach...
            </button>
            </div>
          </form>
        </div>
      </div> */}
      <div className="card-columns animate__animated animate__fadeIn">
          
          {
            heroesFiltered.map(hero => (
              <HeroCard
                key={hero.id}
                {...hero}
              />
            ))
          }

      </div>
    </div>
  )
}

export default SearchScreen
