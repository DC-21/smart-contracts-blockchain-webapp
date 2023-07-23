import React from 'react'
import Sidebar from './components/Sidebar'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <div className='h-screen w-full bg-[#030b29]'>
      <Navbar/>
      <Sidebar/>
    </div>
  )
}

export default App