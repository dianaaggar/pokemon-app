import React from 'react'

// import pokemon from '../models/pokemon';

const myStyle = {
    color: '#ffffff',
    backgroundColor: 'red',
    textAlign: 'center',
    fontSize: '20px',
    fontWeight: 'bold'
    };

function Index({pokemon}) {

return (
    <div style={myStyle}>
        <h1> See all the pokemons </h1>
        <ul>
        {pokemon.map((p,i) => {
            return( 
                <li key={i}>
                    <a href={`/pokemon/${p.id}`}>
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