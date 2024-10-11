import React from 'react'
import Countainer from './Countainer'
import FadIn from './FadIn'

const Usps = () => {
  return (
    <Countainer className='text-4xl font-bold space-y-12 max-w-[692px] py-[8rem] z-10 relative  text-white'>
      <FadIn>
        <p>New Apple Originals every month - always ad-free.</p>
        </FadIn>
      <FadIn>

        <p>Stream on the Apple Tv+ on Apple devices, smart TVs,<br/> consoles,  or sticks.</p>
        </FadIn>
      <FadIn>

        <p>Watch in 4k HDR video with immersive Spatial Audio.</p>
        </FadIn>
      <FadIn>

        <p>Share a single subscription with up to five people.</p>
        </FadIn>
    </Countainer>

  )
}

export default Usps
