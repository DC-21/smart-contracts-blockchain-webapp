import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Create from './pages/Create';
import Profile from './pages/Profile';
import Payment from './pages/Payment';
import Withdraw from './pages/Withdraw';

const App = () => {
  return (
    <div className='h-screen flex flex-row w-full bg-[#030b29]'>
      <div className='relative flex'>
        <Sidebar />
      </div>
      <div className='flex flex-col flex-1 overflow-hidden'>
        <Navbar />
        <div className='flex-1 overflow-y-auto p-4'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/payment' element={<Payment />} />
            <Route path='/withdraw' element={<Withdraw />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/create-campaign' element={<Create />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default App;
