import React, { useEffect, useState } from 'react'
import logo from '../assets/blogger-logo-icon-png-12.png'
import Card from '../components/Card'
import firstCard from '../assets/images/classroom-adult-teacher-holding-pointer-stick-flat-line-color-character-editable-outline-half-body-person-on-white-arab-male-instructor-simple-cartoon-spot-illustration-for-web-graphic-design-vector-r.png'
import secondCard from '../assets/images/student-man-with-glasses-and-bag-character-cartoon-people-student-university-free-vector-removebg-preview.png'
import thirdCard from '../assets/images/happy-students-group-illustration-vector-removebg-preview.png'
import fourthCard from '../assets/images/ab908510af9b6facbf2c230b84e922f0-removebg-preview.png'
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { useRef } from 'react'
const Home = () => {

  const footerRef = useRef(null);
  const cardsRef = useRef(null);
  const [active, setActive] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
        console.log(entry)
        setActive(entry.isIntersecting);
    }, { threshold:0.5 })


    if(footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => {
      if(footerRef.current) {
        observer.unobserve(footerRef.current);
      }
    }
  }, []);

  useEffect(() => {
    if(!active) return;

    const handleScroll = () => {
      if(!footerRef.current) return;

      const rect = footerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      const rawProgress = ((windowHeight - rect.top) / (windowHeight + rect.height)) * 0.5;


      const clamped = Math.min(Math.max(rawProgress, 0), 1);
      console.log('THIS IS RAW:', clamped);
      setProgress(clamped);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [active]);

  const scale = 0.75 + progress * 0.30;

  const translateY = -100 * progress;
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
            <div ref={cardsRef} className={`flex flex-wrap justify-center gap-10 bg-amber-400 relative z-20`}>
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
            <div ref={footerRef} className={`lg:h-100 relative z-10 transition-all ease-in`}
            style={{
              transform: `translateY(${translateY}px) scale(${scale})`}}
            >
              <div className='flex flex-col lg:w-screen text-white'>
                <div className='flex flex-col gap-10 justify-center items-center font-orbitron'>
                  <h2 className='text-2xl'>Built for Ideas That Matter</h2>
                  <p className='text-lg'>A simple platform where instructors share perspectives and students contribute through discussion — because progress begins with conversation.</p>
                  <button className='bg-black p-4 px-5 rounded-xl hover:cursor-pointer mt-5'>
                    <span>Join Now</span>
                  </button>
                </div>

                <div className='w-screen flex justify-between px-20 mt-30'>
                  <div className='flex items-center'>
                    <img src={logo} loading='lazy' alt='Logo' width={100} height={100}/>
                    <h2 className='text-2xl'>discover</h2>
                  </div>
                  <div className='flex items-center justify-around gap-x-5'>
                    <FaInstagram className='h-10 w-10'/>
                    <FaFacebook className='h-10 w-10'/>
                    <FaLinkedin className='h-10 w-10'/>
                  </div>
                </div>
              </div>
            </div>
      </div>
    </div>
  )
}

export default Home