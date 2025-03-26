import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import useCounter from './hooks/useCounter'
import useToogle from './hooks/useToogle'
import useCopyToClipboard from './hooks/useCopyToClipboard'

function App() {

  // const { count, increase, decrease } = useCounter();
  // const { open, change } = useToogle();
  const [copied, copy] = useCopyToClipboard("Pes etme çalış");

  return (
    // <div>
    //   <div>{count}</div>
    //   <button onClick={increase}>Arttır</button>
    //   <button onClick={decrease}>Azalt</button>
    // </div>

    // <div>
    //   {open && <div style={{ width: '100px', height: '100px', backgroundColor: 'red' }}>Kutu</div>}
    //   <button onClick={change}>{open ? 'Gizle' : 'Göster'}</button>
    // </div>

    <div>
      {copied && 'kopyalandı'}
      <button onClick={copy}>Kopyala</button>
    </div>
  )
}

export default App
