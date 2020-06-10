import React from "react"
import "../styles/App.css"

import DarkMode from "../components/DarkMode"

import "../data/human_names.json"

function App() {
  return (
    <div className="App">
      <div className="content">
        <h1 className="heading heavy primary">D&D Name Generator</h1>
        <p className="normal secondary">
          This website is created for the purpose of being a template for any
          new react projects that I create. It will come with the font weights,
          sizes, and colors, along with npm packages and folder organization
          that I already use for most of my projects.
        </p>

        <DarkMode />
      </div>
    </div>
  )
}

export default App
