import {Login} from './component/Login'
import {Register} from './component/register'
import {Home} from './component/Home'
import { useState } from 'react'
import './App.css'

function App() {
  const [user, setUser] = useState([])
  
  return (
  
    <div className='App'>
      {
        !user.length >0//si el campo de user tiene algun caracter que pase a home
        ?<Login setUser={setUser}/>
        :<Home setUser={setUser}/>
      }
    </div>
     
  )
}

export default App
