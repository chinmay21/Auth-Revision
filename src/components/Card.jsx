import React from 'react'

const Card = ({title, description, imgSrc}) => {
  return (
    // Parent div of card
        <div className='flex-none flex flex-col items-center justify-between bg-[#E6EEF7]
                        lg:h-170 lg:w-[35%] -translate-y-25 px-14 py-10 font-orbitron rounded-xl
                        hover:scale-105 cursor-pointer hover:shadow-neutral-200 hover:shadow-lg
                        transition-all ease-in-out'>
            <div className='text-xl'>{title}</div>
            <img className='-translate-y-5' src={imgSrc} loading='lazy' alt='Card Image' height={300} width={300}/>
            <div className='-translate-y-10'>{description}</div>
        </div>

  )
}

export default Card