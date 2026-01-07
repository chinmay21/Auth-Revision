import React from 'react'

const Home = () => {
  return (
    <div>
    {/* Parent div of whole page */}
        <div className='h-screen w-screen'>
        {/* Parent div of Hero Section */}
            <div className='h-screen w-screen flex flex-col items-center gap-y-5'>
                <div className='flex flex-row gap-x-4 mt-15'>
                    <button>Home</button>
                    <button>Signup</button>
                    <button>Login</button>
                </div>
                <div>Text of Hero Section</div>
            </div>
        </div>
    </div>
  )
}

export default Home