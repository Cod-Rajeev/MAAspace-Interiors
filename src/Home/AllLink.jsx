import React from 'react'
import Navbar from '../navbar/Navbar'
import Home from './FirstSction/Home'
import ThirdSectin from './ThirdSection/ThirdSectin'
import FiveSection from './FiveSection/FiveSection'
import SixSection from './SixSection/SixSection'
import ForthSection from './ForthSection/ForthScrollSection'
import WhyChoose from './WhyChoose/WhyChoose'
import ExploreOurWork from '../PortFolio/ExploreOurWork'

const AllLink = () => {
  return (
    <>
     <Home/>
     <ThirdSectin/>
     {/* <ForthSection/> */}
     {/* <FiveSection/> */}
     <ExploreOurWork/>
     <SixSection/>

<WhyChoose/>


    
    
    
    
    
    </>
  )
}

export default AllLink