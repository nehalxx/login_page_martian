import React from 'react'
import Leftcont from './leftcont'
import Rightcont from './rightcont'
import FraudAlert from './fraudalert'
import FraudDistributionChart from './pie'

const Sec1cont = () => {
  return (
    <div className='px-7 py-3 h-[90vh] flex items-center '>
    <Leftcont/>

    <Rightcont/>
    <FraudDistributionChart/>
    <FraudAlert/>
    
    
    </div>
    
  )
}

export default Sec1cont