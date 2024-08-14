import Image from 'next/image'
import React from 'react'

const Loader = () => {
  return (
    <div className='loader'>
        <Image 
        src="/assets/icons/loading2.png"
        alt="Loading"
        height={50}
        width={50}
        className='animate-spin'
        />
        Loading...
    </div>
  )
}

export default Loader