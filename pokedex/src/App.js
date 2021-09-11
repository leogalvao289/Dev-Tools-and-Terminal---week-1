import React from 'react'
import './App.css'

const  Logo = () => {
  const appName = 'Pokedex';
  //const welcomeMessage = "Welcome to the pokedex"
  return (
      <header>
        <h1>{appName}</h1>
        <img
          src='https://assets.pokemon.com/assets/cms2/img/pokedex/full/016.png'
          alt=''
        />
      </header>
  );
}

const BestProkemon =  ()=> {
  const MyfavoritePokemon = ['Pikachu', 'Snorlax', 'Blastoise' ]
  return  <div>{MyfavoritePokemon.map((pokemon) => {
    return (<h3> My favorite pokemon is {pokemon}</h3>)
  })}</div>;   
};
  
  //<h2> My favorite Pokémon is {MyfavoritePokemon.join(', ')} </h2>



const App = () => {
  return (
    <div className >
      <Logo/>
      <BestProkemon/> 
    </div>
  )
}

export default App

 