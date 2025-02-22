import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  //string firstName = "Ali"

  const [firstName, setfirstName] = useState('Ali');
  const [lastName, setlastName] = useState('Yılmaz');

  const handleChange = () => {
    setfirstName("Hilal")
  }

  const [count, setCount] = useState(0);

  const arttir = () => {
    setCount(count + 1)
  }

  console.log("component render edildi")

  return (
    <div>
      <div>{firstName} {lastName}</div>
      <div><button onClick={() => { setfirstName("Ayşenur") }}>İsmi Değiştir</button></div>
      <div><button onClick={handleChange}>İsmi Değiştir</button></div>

      <div>{count}</div>
      <div><button onClick={arttir}>Arttır</button></div>

    </div>
  )
}

export default App
