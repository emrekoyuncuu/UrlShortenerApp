import { useState } from 'react'
import './App.css'
import InputShortener from './InputShortener'
import LinkResult from './LinkResult'
import BackgroundAnimate from './backgroundAnimate'

function App() {
  const [inputValue, setInputValue] = useState("");

  return (
    <div className='container'>
      <InputShortener setInputValue={setInputValue} />
      <BackgroundAnimate />
      <LinkResult inputValue={inputValue} />
    </div>
  )
}

export default App
