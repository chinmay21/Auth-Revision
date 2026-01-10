import React from 'react'
import logo from '../assets/blogger-logo-icon-png-12.png'
import Card from '../components/Card'
import firstCard from '../assets/images/classroom-adult-teacher-holding-pointer-stick-flat-line-color-character-editable-outline-half-body-person-on-white-arab-male-instructor-simple-cartoon-spot-illustration-for-web-graphic-design-vector-r.png'
import secondCard from '../assets/images/student-man-with-glasses-and-bag-character-cartoon-people-student-university-free-vector-removebg-preview.png'
import thirdCard from '../assets/images/happy-students-group-illustration-vector-removebg-preview.png'
import fourthCard from '../assets/images/ab908510af9b6facbf2c230b84e922f0-removebg-preview.png'
const Home = () => {
  return (
    <div>
      {/* Parent div of whole page */}
      <div className='lg:h-screen lg:w-screen'>
        {/* Parent div of Hero Section */}
            <div className='lg:h-screen lg:w-screen flex flex-col items-center -mb-10 gap-y-5'>
                <div className='flex flex-row justify-between items-center lg:h-17.5 px-5 py-2 gap-x-4 mt-15 bg-amber-50 lg:w-137.5 rounded-2xl'>
                    <img src={logo} width={70} height={70} loading='lazy' alt='logo'/>
                    <button className='text-lg text-gray-800 hover:bg-[#EDE8E8] transition-all ease-in lg:w-37.5 lg:h-11.25 rounded-2xl'>Home</button>
                    <button className='text-lg font-semibold text-gray-800 bg-yellow-300 cursor-pointer lg:w-37.5 lg:h-11.25 rounded-2xl hover:shadow-neutral-500 hover:shadow-lg hover:scale-105 transition-all ease-out'>Signup</button>
                    <button className='text-lg font-semibold text-gray-800 bg-yellow-300 cursor-pointer lg:w-37.5 lg:h-11.25 rounded-2xl hover:shadow-neutral-500 hover:shadow-lg hover:scale-105 transition-all ease-out'>Login</button>
                </div>
                <div className='mt-37.5'>
                  <h2 className='text-gray-300 text-center text-5xl font-orbitron mb-5 lg:w-300'>Where Ideas Shape the Future of Education</h2>
                  <p className='text-gray-300 text-center text-lg font-orbitron tracking-wider'>Instructors share their vision for change. Students respond, question, and contribute through thoughtful discussion.</p>
                </div>
            </div>

            {/* Parent div of Cards section */}
            <div className='flex flex-wrap justify-center gap-10 bg-amber-400'>
              <Card title={'Instructor Perspectives'} 
                    description={'Instructors share their individual ideas and thoughts on how education can evolve, improve, and better serve students.'}
                    imgSrc={firstCard}
              />
              <Card title={'Student Opinions'} 
                    description={'Students engage with instructor ideas by sharing opinions, asking questions, and expressing agreement or concern through comments.'}
                    imgSrc={secondCard}
              />
              <Card title={'Open Discussions'} 
                    description={'A common dashboard where posts and conversations remain visible to everyone, encouraging transparency and healthy dialogue.'}
                    imgSrc={thirdCard}
              />
              <Card title={'Constructive Feedback'} 
                    description={'A space designed for thoughtful, respectful feedback that helps ideas grow through collaboration between instructors and students.'}
                    imgSrc={fourthCard}
              />
            </div>

            {/* Parent div of footer section */}
            <div>
              <div className='flex flex-col lg:w-screen text-white'>
                <div className='flex flex-col justify-center items-center font-orbitron'>
                  <h2>Built for Ideas That Matter</h2>
                  <p>A simple platform where instructors share perspectives and students contribute through discussion — because progress begins with conversation.</p>
                  <button>
                    <span>Join Now</span>
                  </button>
                </div>

                <div className='flex'>
                  <div></div>
                  <div className='flex'></div>
                </div>
              </div>
            </div>
      </div>
    </div>
  )
}

export default Home