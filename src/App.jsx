import { useState } from 'react'
import './App.css'
import Button from './components/Button'
import Quote from './components/Quote'
import quotes from './quotes.json'

function App() {
  const randomIndex = Math.floor(Math.random() * quotes.length)

  const [index, setIndex] = useState(randomIndex)
  const changeUser = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length)
    setIndex(randomIndex)
  }
  const colors = ['#B8E255', '#62CA73', '#00AC88', '#008B8C', '#08687A', '#2F4858']
  const randomColor = Math.floor(Math.random() * colors.length)
  document.body.style = `background: ${colors[randomColor]}`
  return (
    <div className="App">
      <Quote indexq={index} jsonq={quotes} changeUser= {changeUser} colors={colors} randomColor={randomColor} />
      
    </div>
  )
}

export default App
