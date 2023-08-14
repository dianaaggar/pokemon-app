import React from 'react'

import pokemon from '../models/pokemon';
const myStyle = {
    color: '#ffffff',
    backgroundColor: '#000000',
    };

function Show({index}) {
  return (
    <div>
        <a href='../'>got back </a>
        <h1> gotta catch'em all </h1>
        <h2>{pokemon[index].name}</h2>
        <img src={pokemon[index].img + '.jpg'} alt="" />
    </div>
  )
}

export default Show
