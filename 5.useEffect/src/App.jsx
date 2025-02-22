import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [firtName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");

  useEffect(() => {
    console.log("her zaman çalışır")
  })

  useEffect(() => {
    console.log("ilk render edildiğinde çalışır")
  }, [])

  useEffect(() => {
    console.log("ilk render edildiğinde ve firstName state edildiğinde çalışır")
  }, [firtName])

  useEffect(() => {
    console.log("ilk render edildiğinde ve lastName state edildiğinde çalışır")
  }, [lastName])

  useEffect(() => {
    console.log("ilk render edildiğinde ve firstName veya lastName state değerlerinde değişiklik olduğunda çalışır")
  }, [firtName, lastName])

  return (
    <div>
      <div><button onClick={() => setfirstName("Ali")}>Adı Değiştir</button></div>
      <div><button onClick={() => setlastName("Çiftçi")}>Soyadı Değiştir</button></div>
    </div>
  )
}

export default App
