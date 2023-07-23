import React from 'react'
import Sidebar from './components/Sidebar'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <div className='h-screen w-full bg-[#a4a4d6]'>
      <Navbar/>
      <Sidebar/>
    </div>
  )
}

export default App