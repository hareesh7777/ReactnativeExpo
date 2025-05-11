import { useState } from 'react'
import './App.css'
import MovieCard from './components/MovieCard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <MovieCard movie={{
        url: '',
        title: '',
        overview: ''
      }} />
    </div>
  )
}

export default App
