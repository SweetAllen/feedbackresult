import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Route, Routes } from "react-router-dom";
import Home from './Home';
import Header from './Header';
import { UserAuthContextProvider } from './context/AuthContext';
function App() {
  const [count, setCount] = useState(0)

  return (
    <UserAuthContextProvider>
      <Header/>
    <Routes>
    <Route  path="/" element={<Home/>}></Route>
</Routes>
</UserAuthContextProvider>

  )
}

export default App
