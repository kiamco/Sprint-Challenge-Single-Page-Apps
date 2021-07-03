import React, { useEffect, useState } from "react";
import Axios from 'axios'
import CharacterCard from './CharacterCard';
export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [characters, setCharacters] = useState([]);
  let characterCount = "1,2,3,4,5,6,7,8,9,10"

  useEffect(() => {
    // TODO: Add AJAX/API Request here - must run in `useEffect`
    Axios.get(`https://rickandmortyapi.com/api/character/${characterCount}`)
    .then(res=> {
      console.log('success:', res)
      setCharacters(res.data)
    })
    .catch(err => {
      console.log('error:', err)
    })
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
  }, []);

  console.log(characters)

  return (
    <section className="character-list grid-view">
      {characters.map(el => <CharacterCard name={el.name} avatar={el.image} species={el.species} location={el.location.name} origin={el.origin.name}/>)}
    </section>
  );
}
