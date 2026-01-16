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
        <div className='bg-white flex flex-col items-center lg:w-[45%] mx-auto rounded-xl mt-20'>
            <div>
                <h2 className='text-3xl font-zalando'>Login</h2>
                <div className='flex items-center gap-2'>
                    Hi, Welcome back
                    <MdWavingHand className='text-amber-500'/>
                </div>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}
            className='flex flex-col'
            >
                <label htmlFor='email'>Email</label>
                <input type='email' placeholder='Enter Email' {...register("email", {required: "Email is required, Please enter Email"})}/>
                {errors.email && <span className='text-red-600'>{errors.email.message}</span>}
                
                <label htmlFor='password'>Password</label>
                <input type='password' placeholder='Enter Password' {...register("password", {required: "Password is required, Please Enter Password"})}/>
                {errors.password && <span className='text-red-600'>{errors.password.message}</span>}

                <button type='submit' className='cursor-pointer'>Login</button>
            </form>

            <img src={loginImg} alt='Login Image' loading='lazy' width={300} height={300}/>

            <div className='flex'>
                <p>Not registered yet?</p>
                <a href='/signup'>Create an Account</a>
            </div>
        </div>
    </div>
  )
}

export default Login