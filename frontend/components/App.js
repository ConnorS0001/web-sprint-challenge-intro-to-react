import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Character from './Character'

const urlPlanets = 'http://localhost:9009/api/planets'
const urlPeople = 'http://localhost:9009/api/people'

function App() {
  // ❗ Create state to hold the data from the API
  
  // ❗ Create effects to fetch the data and put it in state
  
  ////////MY CODE////////////////

  const [people, setPeople] = useState()
  const [planets, setPlanets] = useState()

  function getPeople() {
    useEffect(() => {
      axios.get(urlPeople)
        .then(res => {
          //console.log(res.data)
          setPeople(res.data)
          //console.log(res.data[2])
        })
        .catch(err => {
          console.log(err)
        })
    }, [])
  }

  function getPlanets() {
    useEffect(() => {
      axios.get(urlPlanets)
        .then(res => {
          //console.log(res.data)
          setPlanets(res.data)
        })
        .catch(err => {
          console.log(err)
        })
    }, [])
  }

  getPeople()
  getPlanets()

  

  ////////MY CODE////////////////
  
  return (
    <div>
      <h2>Star Wars Characters</h2>
      <p>See the README of the project for instructions on completing this challenge</p>
      {/* ❗ Map over the data in state, rendering a Character at each iteration */

      ////////MY CODE////////////////



      ////////MY CODE////////////////  

      }
    </div>
  )
}

export default App

// ❗ DO NOT CHANGE THE CODE  BELOW
if (typeof module !== 'undefined' && module.exports) module.exports = App
