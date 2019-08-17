import React, {useState, useEffect} from 'react';
import Axios from 'axios';
import EpisodeCard from './EpisodeCard';

const EpisodeList = (props) => {
    // create state
    const [episodes, SetEpisodes] = useState([]);
    let locationCount = '1,2,3,4,5,6,7,8,9,10';

    // call location API
    useEffect(() => {
        Axios.get(`https://rickandmortyapi.com/api/episode/${locationCount}`)
            .then(res => {
                console.log('success:', res)
                SetEpisodes(res.data)
            })
            .catch(err => {
                console.log('error:', err)
            })
    }, []);

    return (
        <section className = "episode-list grid-view" > 
            {episodes.map(el => <EpisodeCard name={el.name} episode={el.episode} airDate={el.air_date} url={el.url}/>)}
        </section>
        )
}

export default EpisodeList;
