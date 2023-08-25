import React, {useRef} from 'react'

// import pokemon from '../models/pokemon';
const myStyle = {
    color: '#ffffff',
    backgroundColor: '#000000',
    };

function Show({pokemon}) {

  const pokemonName = useRef("");
  const inputValue = useRef("");

  return (
    <div>
        <a href='../'>go back </a>
        <h1> gotta catch'em all </h1>
        <h2>{pokemon.name}</h2>

        <form action={`/replace/${pokemon.id}?_method=put`} method="post">
        <input
          type="text"
          name="name"
          id="name"
          ref={inputValue}
          defaultValue={pokemon.name[0].toUpperCase() + pokemon.name.slice(1)}
          required
        />
        <input type="submit" value="Edit pokemon" />
      </form>{" "}
      <br />
      <form
        action={`/delete/${pokemon.id}?_method=delete`}
        method="post"
      >
        <input type="submit" value="Delete Pokemon" />
      </form>
      <br />

        <img src={`${pokemon.img}.jpg`} alt="" />
    </div>
  )
}

export default Show
