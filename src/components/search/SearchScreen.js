import React, { useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import queryString from 'query-string';

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

  const heroesFiltered = useMemo(() => getHeroesByName(q), [q])

  const handleSearch = (e) => {
    e.preventDefault();
    history.push(`?q=${search}`)
  }

  return (
    <div className="animate__animated animate__fadeIn">
      <h1>Search</h1>

      <form className="p-2" onSubmit={handleSearch}>
        <div className="input-group">
          <input
            type="text"
            className="form-control"
            placeholder="Search heroes..."
            name="search"
            value={search}
            onChange={handleInputChange}
          ></input>
          <button
            type="submit"
            className="btn btn-primary">
            Search
          </button>
        </div>
      </form>

      <hr />

      {(q === '')
        && (
          <div className="alert alert-info" role="alert">
            you have not searched yet
          </div>
        )
      }

      {
        (q !== '' && heroesFiltered.length === 0)
        && (
          <div className="alert alert-danger" role="alert">
            Superheroes not found, please verify your search...
          </div>
        )
      }

      <div className="card-columns">

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
