import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import { Route, Routes } from "react-router-dom";
import Home from './Home';

import { UserAuthContextProvider } from './context/AuthContext';
function App() {
  const [count, setCount] = useState(0)

  return (
    <UserAuthContextProvider>

    <Routes>
    <Route  path="/" element={<Home/>}></Route>




</Routes>
</UserAuthContextProvider>

  )
}

export default App
