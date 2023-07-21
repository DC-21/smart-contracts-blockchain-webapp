import React from 'react'
import Sidebar from './components/Sidebar'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <div className='h-screen w-full bg-blue-950'>
      <Navbar/>
      <Sidebar/>
    </div>
  )
}

export default App