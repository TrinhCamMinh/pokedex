import React from 'react';
import Type from './Type';

export default function Pokedex({value, index, onClick}) {
  return (
    <div className="poke-btn" key={index} onClick={onClick}>
        <div className="poke-img">
            <img src={`https://img.pokemondb.net/sprites/home/normal/${value.name}.png`} alt='001'></img>
            <p>Greeting my master</p>
        </div>
        <div className="poke-info">
            <div className='poke-info-id'>
                <p children={`#00${index+1}`}/>
                <Type url = {value.url} />
            </div>
            <div className='poke-info-name'>
                <h5>{value.name}</h5>
            </div>
        </div>
    </div>
  )
}
