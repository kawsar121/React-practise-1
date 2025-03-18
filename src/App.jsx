import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Fci from './Fci'

function App() {
  const fCis = [
    {id : 1, name : 'Tasneem Hasan', roll: 683420},
    {id : 2, name : 'Salah uddin', roll: 683422},
    {id : 3, name : 'Farhan Khan', roll: 683424},
    {id :4, name : 'Arafat Hossian', roll: 683427},
    
  ]

  return (
    <>
      
      <h1>Vite + React</h1>

      // akahne fciStudent jeta disi oita holo Fci.jsx name je component nisilam tar parameter,,, ar fcian ta holo fCis[] arry ta ke map kore benge sure fcian niye ashlam jate loop kore akta akta show kore
      {
        fCis.map(fcian => <Fci fciStudent={fcian}></Fci>)
      }


      <Bman year="54" desig="poreman"></Bman>
    
    </>
  )
}
function Bman({year, desig}){
  console.log(year, desig)
  return(
    <>
      <h2>Buisness Man</h2>
      <p>Year:{year}</p>
      <p>designation: {desig}</p>
    </>
    
  )
}

export default App
