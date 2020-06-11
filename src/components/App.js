import React, { useState } from "react"
import "../styles/App.css"

import DarkMode from "../components/DarkMode"

import human_data from "../data/human_names.json"

function App() {
  const [names, setNames] = useState()

  const getNames = (data, amount) => {
    let nameList = []

    for (let i = 0; i < amount; i++) {
      let rand = Math.floor(Math.random() * data.length)
      nameList.push(data[rand])
    }

    setNames(nameList)
  }

  return (
    <div className="App">
      <div className="content">
        <h1 className="heading heavy primary">D&D Name Generator</h1>
        <div className="names">
          <button onClick={() => getNames(human_data.human.male, 5)}>
            Male Names
          </button>
          <button onClick={() => getNames(human_data.human.female, 5)}>
            Female Names
          </button>

          <ul>
            {names &&
              names.map((name, i) => {
                return (
                  <li className="secondary normal" key={i}>
                    {name}
                  </li>
                )
              })}
          </ul>
        </div>
        <DarkMode />
      </div>
    </div>
  )
}

export default App
