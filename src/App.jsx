import { useState } from 'react'
import { HOME } from './components/home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <HOME />
    </>
  )
}

export default App
