import React from 'react'
import { useForm } from 'react-hook-form'
import { MdWavingHand } from "react-icons/md";
import loginImg from '../assets/images/loginImg.png'

const Login = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        return console.log("THIS IS DATA:", data);
    }
  return (
    <div>
        {/* Parent div of login section */}
        <div className='bg-white flex flex-col items-center lg:w-[39%] min-h-150 mx-auto rounded-xl py-5 mt-20'>
            <div className='pr-38'>
                <h2 className='text-3xl font-zalando'>Login</h2>
                <div className='flex items-center gap-2 mt-2 text-lg'>
                    Hi, Welcome back
                    <MdWavingHand className='text-yellow-500' size={20}/>
                </div>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}
            className='flex flex-col mt-3 w-80'
            >
                <label htmlFor='email'>Email</label>
                <input type='email' placeholder='Enter Email' 
                className='border border-gray-500 rounded-md pl-3 my-2 h-8 outline-none focus-visible:ring-2 focus-visible:text-[#000080] 
                focus-visible:ring-indigo-400 focus-visible:shadow-indigo-400 focus-visible:shadow-lg transition-all ease-in'
                {...register("email", {required: "Email is required, Please enter Email"})}/>
                {errors.email && <span className='text-red-600 mb-3'>{errors.email.message}</span>}
                
                <label htmlFor='password'>Password</label>
                <input type='password' placeholder='Enter Password' 
                className='border border-gray-500 rounded-md pl-3 my-2 h-8 outline-none focus-visible:ring-2 focus-visible:text-[#000080] 
                focus-visible:ring-indigo-400 focus-visible:shadow-indigo-400 focus-visible:shadow-lg transition-all ease-in'
                {...register("password", {required: "Password is required, Please Enter Password"})}/>
                {errors.password && <span className='text-red-600 mb-3'>{errors.password.message}</span>}

                <button type='submit' 
                className='bg-linear-to-r from-[#e3ffe7] to-[#d9e7ff] mt-8 py-2 rounded-lg cursor-pointer 
                hover:shadow-xl hover:shadow-indigo-200 transition-all ease hover:scale-105 delay-100 mb-2 text-indigo-400 font-semibold'
                >
                    Login
                </button>
            </form>

            <img src={loginImg} alt='Login Image' loading='lazy' width={300} height={300}/>

            <div className='flex text-sm mt-3 gap-1'>
                <p>Not registered yet?</p>
                <a href='/signup' className='underline text-blue-500'>Create an Account</a>
            </div>
        </div>
    </div>
  )
}

export default Login