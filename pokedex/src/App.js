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

const CaughtPokemon = () => {
  const date = new Date().toLocaleDateString();
  return (
    <p>Caught 0 Pokémon on {date}</p>
  )
}

const BestProkemon =  ()=> {
  const abilities = ['Anticipacion' , 'Adaptability' , 'Run-Away']
  //const MyfavoritePokemon = ['Pikachu', 'Snorlax', 'Blastoise' ]
  //return  <div> {MyfavoritePokemon.map((pokemon) => {
   return (
   <div>
     <p> My favorite pokemon is Squirtle</p>
    <ul>
      {abilities.map((ability , i) => 
        <li key={i} > {ability}</li>
      )}
    </ul>
    </div>
  );   
};
  
  //<h2> My favorite Pokémon is {MyfavoritePokemon.join(', ')} </h2>



const App = () => {
  return (
    <div className >
      <Logo/>
      <BestProkemon/> 
      <CaughtPokemon/>
    </div>
  )
}

export default App

 