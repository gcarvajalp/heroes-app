import React, { useContext, useEffect } from 'react'
import { NavContext } from '../../reducers/NavContext';
import { types } from '../../types/types';
import HeroList from '../heroes/HeroList';



const DcScreen = () => {

  const { dispatch } = useContext(NavContext);

  useEffect(() => {
    dispatch({
      type: types.close
    })
  }, [dispatch]);

  return (
    <div className="animate__animated animate__fadeIn">
      <h1>DC</h1>
      <hr />
      <HeroList publisher="DC Comics" />
    </div>
  )
}

export default DcScreen
