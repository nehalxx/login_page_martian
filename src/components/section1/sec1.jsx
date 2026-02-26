import React from 'react'
import Navbar from './navbar'
import Sec1cont from './sec1cont'
import FraudAlert from './fraudalert'

const Sec1 = () => {
  return (
    <div className='h-screen w-full'><Navbar/>
    <Sec1cont/>
    <FraudAlert/>
</div>
  )
}

export default Sec1