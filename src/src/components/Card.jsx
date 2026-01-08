import React from 'react'

const Card = ({title, description, imgSrc}) => {
  return (
    // Parent div of card
        <div className='flex-1 gap-x-2.5 bg-white w-[45%]'>
            <div>{title}</div>
            <img src={imgSrc} loading='lazy' alt='Card Image' className='w-32'/>
            <div>{description}</div>
        </div>

  )
}

export default Card