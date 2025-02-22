import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let a = 15;
  const firstName = "Ali";

  let isimler = ["Ali", "Enes", "Ayşenur", "Fatma"]

  return (
    <div>
      <p>a değişkeninin değeri : {a}</p>
      <p>Müşterinin Adı : {firstName}</p>


      {
        isimler.map((isim, index) => (
          <div style={{
            backgroundColor: 'green',
            border: '1px solid black'
          }} key={index}>{isim}</div>
        ))
      }
    </div>
  )
}

export default App
