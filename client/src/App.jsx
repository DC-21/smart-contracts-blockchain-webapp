import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar'
import Navbar from './components/Navbar'
import Home from './pages/Home'                                                      '

const App = () => {
  return (
    <div className='h-screen w-full bg-[#030b29]'>
      <Navbar />
      <div>
        <Sidebar />
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </div>
    </div>
  )
}

export default App