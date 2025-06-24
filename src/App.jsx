import { useState } from 'react'
import './App.css'
import viratImage from './assets/virat_pic.png';
import Card from './components/Card';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='flex flex-row gap-2 justify-center bg-blue-900 items-center m-10'>
    <Card />

    </div>
  )
}

export default App
