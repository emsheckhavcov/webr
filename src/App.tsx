import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Pythagor } from './components/pythagor'
import { UserProfile } from './components/UserProfile'
import { TodoList } from "./components/TodoList"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      
      <UserProfile firstname={'1'} lastname={'2'} birthyear={2005}/>
      <Pythagor />
      <TodoList />
      
    </>
  )
}

export default App
