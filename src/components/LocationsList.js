import React, { useEffect, useState } from "react";
import Axios from "axios";
import LocationCard from './LocationCard';

export default function LocationsList() {
    // create state
    const [locations, SetLocations] = useState([]);
    let locationCount = '1,2,3,4,5,6,7,8,9,10';

    // call location API
      useEffect(() => {
          Axios.get(`https://rickandmortyapi.com/api/location/${locationCount}`)
              .then(res => {
                  console.log('success:', res)
                  SetLocations(res.data)
              })
              .catch(err => {
                  console.log('error:', err)
              })
      }, []);

      console.log(locations)
    return(
        <section className="location-list grid-view">
            {
                locations.map(el => <LocationCard  
                name={el.name} 
                type={el.type} 
                dimension={el.dimension} 
                residents={el.residents} />)
            }
        </section>



    )
}
