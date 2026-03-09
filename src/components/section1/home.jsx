import React from 'react'
import Lhome from './lhome'
import FreezeButton from './rhome'
import Copilot from './genai'

const Home = () => {
    

  return (
    <div className=' h-screen flex items-center'><Lhome/>
    <FreezeButton/>
    <Copilot/></div>
  )
}

export default Home