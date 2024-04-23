import {Login} from './component/Login'
import {Register} from './component/register'
import {Home} from './component/Home'
import {InitPage} from './component/InitPage'
import { useState } from 'react'
import {Route, Routes} from "react-router-dom"
import './App.css'

function App() {
  const [user, setUser] = useState([])
  
  return (
    <div className='App'>
    <Routes>
      <Route  path='' element={<InitPage/>}/>
      <Route  path='/home' element={<Home setUser={setUser}/>}/>
      <Route  path='/login' element={<Login setUser={setUser} User={user}/>}/>
      <Route  path='/register' element={<Register/>}/>
    </Routes>
    
    
      
    </div>
     
  )
}

export default App
