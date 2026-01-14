import React from 'react'
import { useForm } from 'react-hook-form'

const Signup = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        return console.log("THIS IS DATA:", data);
    }
  return (
    <div>
        {/* Parent div of signup from */}
        <div className='flex flex-col items-center rounded-xl gap-y-5 p-10 bg-white h-160 w-[35%] mx-auto mt-20'>
            <div className='flex flex-col items-center gap-3'>
                <h2 className='text-3xl font-zalando'>Create Your Account</h2>
                <p className='text-neutral-500'>Sign up to get started!</p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col h-100 gap-y-5'>
                <label for='name'>Username</label>
                <input type='text' placeholder='Enter Username' className='pl-2 border border-gray-500 rounded-md h-8.75 w-100 outline-none focus-visible:text-[#000080] focus-visible:ring-2 focus-visible:ring-indigo-400 focus-visible:shadow-indigo-400 focus-visible:shadow-lg transition-all ease-in' {...register("name", {required: "Username is Required, Please Enter Username"})}/>
                {errors.name && <span className='text-red-600'>{errors.name.message}</span>}
                
                <label for='email'>Email Address</label>
                <input type='email' placeholder='Enter Email' className='pl-2 border border-gray-500 rounded-md h-8.75 w-100 outline-none focus-visible:text-[#000080] focus-visible:ring-2 focus-visible:ring-indigo-400 focus-visible:shadow-indigo-400 focus-visible:shadow-lg transition-all ease-in' {...register("email", {required: "Email is Required, Please Enter Email"})}/>
                {errors.email && <span className='text-red-600'>{errors.email.message}</span>}

                <label for='password'>Password</label>
                <input type='password' placeholder='Enter Password' className='pl-2 border border-gray-500 rounded-md h-8.75 w-100 outline-none focus-visible:text-[#000080] focus-visible:ring-2 focus-visible:ring-indigo-400 focus-visible:shadow-indigo-400 focus-visible:shadow-lg transition-all ease-in' {...register("password", {required: "Password is Required, Please Enter Password"})}/>
                {errors.password && <span className='text-red-600'>{errors.password.message}</span>}

                <button type='submit' className='bg-linear-to-r from-[#e3ffe7] to-[#d9e7ff] mt-8 py-2 rounded-lg cursor-pointer hover:shadow-xl hover:shadow-indigo-200 transition-all ease hover:scale-105'>Register</button>
            </form>

            <div className=' text-sm'>
                Already have an account? <a href='/login' className='text-sm underline text-blue-500'>Login</a>
            </div>
        </div>
    </div>
  )
}

export default Signup