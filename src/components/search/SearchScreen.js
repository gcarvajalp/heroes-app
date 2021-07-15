import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import queryString from 'query-string';

import { heroes } from '../../data/heroes';
import { useForm } from '../../hooks/useForm';
import HeroCard from '../heroes/HeroCard';
import { getHeroesByName } from '../../selectors/getHeroesByName';


const SearchScreen = ({ history }) => {

  const location = useLocation();
  const { q = '' } = queryString.parse(location.search);

  const [formValues, handleInputChange] = useForm({
    search: q
  });

  const { search } = formValues;

  const heroesFiltered = getHeroesByName(search);

  useEffect(() => {
    console.log('useEffect');
  }, [])

  const handleSearch = (e) => {
    e.preventDefault();
    history.push(`?q=${search}`)
  }

  return (
    <div>
      <h1>Search... {search}</h1>
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
