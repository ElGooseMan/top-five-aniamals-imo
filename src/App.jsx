import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Frog from '/Users/elgooseman/Desktop/PICTURES/dmtFrog.webp'
import Cat from '/Users/elgooseman/Desktop/PICTURES/carcal.jpeg'
import Penguin from '/Users/elgooseman/Desktop/PICTURES/penguin.avif'
import Panda from '/Users/elgooseman/Desktop/PICTURES/redPanda.jpeg'
import Fox from '/Users/elgooseman/Desktop/PICTURES/articFox.jpeg'

import styled from 'styled-components'



function Title() {
  return (
    <h1> Top 5 Animals, IMO (In my Opinion)</h1>

  );
}
function Animal(props) {
  return (
    <>
      <h2 >#{props.place} - {props.animal}</h2>
      {props.children}

    </>
  );
}

const MaxWidthImage = styled.img`
  //max-width: 1280px;
  width: 300px; 
  height: 337px; 
  object-fit: cover;

`;

export default function MyApp() {
  return (
  <div>
    <Title />    
    <Animal place={5} animal="Frog">
      <MaxWidthImage src={Frog}   alt = "colorado river frog"/>
    </Animal>
    <Animal place={4} animal="Carcal cat"> 
     <MaxWidthImage src={Cat}   alt = "baby carcal cat"/>
    </Animal>
    <Animal place={3} animal="Emperor Penguin"> 
     <MaxWidthImage src={Penguin}    alt = "emporer penguin chicks"/>
    </Animal>
    <Animal place={2} animal="Artic Fox"> 
     <MaxWidthImage src={Fox}    alt = "emporer penguin chicks"/>
    </Animal>
    <Animal place={1} animal="Red Panda"> 
     <MaxWidthImage src={Panda}    alt = "emporer penguin chicks"/>
    </Animal>
    
  </div>
  
  );
}
