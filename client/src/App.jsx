import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Create from './pages/Create';
import Profile from './pages/Profile'
import Payment from './pages/Payment'
import Withdraw from './pages/Withdraw'

const App = () => {
  return (
    <div className='h-screen w-full bg-[#030b29]'>
      <Navbar />
      <div>
        <Sidebar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/payment' element={<Payment />} />
          <Route path='/withdraw' element={<Withdraw />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/create-campaign' element={<Create/>}/>
          <Route path='/campaign-details' element={<campaignDetails/>}/>
        </Routes>
      </div>
    </div>
  )
}

export default App