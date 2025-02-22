import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Product from './Product'
import Container from './Container'

function App() {

  const productName = "Buzdolabı"

  return (
    <Container>
      <Product productName="Ayakkabı" price={3200} />
    </Container>
  )
}

export default App
