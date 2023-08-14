import React from 'react'

import pokemon from '../models/pokemon';
const myStyle = {
    color: '#ffffff',
    backgroundColor: '#000000',
    };

function Index() {
  return (
    <div style={myStyle}>
        <h1> See all the pokemons </h1>
        <ul>
        {pokemon.map((p,i) => {
            return(
                <li key={i}>
                    <a href={`/pokemon/${i}`}>
                {p.name[0].toUpperCase() + p.name.slice(1)}
            </a>
                    </li>
            )
        })}
        </ul>


        </div>
)
}

export default Index