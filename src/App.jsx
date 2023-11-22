import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Dice from './Dice'
import LuckyN from './LuckyN'
function App() {

  return (
    <>
      <LuckyN diceno={2} result={7} color="green" />
      <LuckyN diceno={3} result={14} color="red" />
    </>
  )
}

export default App
