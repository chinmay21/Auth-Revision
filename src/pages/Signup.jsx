import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { signup } from '../redux/operations/authAPI'

const Signup = () => {

    const { register, handleSubmit, setValue, formState: { errors } } = useForm();
    const [active, setActive] = useState('student');
    const [role, setRole] = useState("");
    const dispatch = useDispatch();

    const handleRoleSelect = (selectedRole) => {
        setRole(selectedRole);
        setActive(selectedRole.toLowerCase());
        setValue("role", selectedRole, { shouldValidate: true });
    };

    const clickHandler = () => {
        return console.log("REGITER BUTTON IS CLICKED");
    }
    const onSubmit = (data) => {
        dispatch(
            signup({
                name: data.name,
                email: data.email,
                password: data.password,
                role: data.role
            })
        );
    };
    
    console.log("THIS IS ROLE:", role);
  return (
    <div>
        {/* Parent div of signup from */}
        <div className='flex flex-col items-center rounded-xl gap-y-5 p-10 bg-white max-h-230 w-[35%] mx-auto mt-20'>
            <div className='flex flex-col items-center gap-3'>
                <h2 className='text-3xl font-zalando'>Create Your Account</h2>
                <p className='text-neutral-500'>Sign up to get started!</p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col max-h-260 gap-y-5'>
                <label htmlFor='name'>Username</label>
                <input type='text' placeholder='Enter Username' 
                className='pl-2 border border-gray-500 rounded-md h-8.75 w-100 outline-none focus-visible:text-[#000080] 
                focus-visible:ring-2 focus-visible:ring-indigo-400 focus-visible:shadow-indigo-400 focus-visible:shadow-lg 
                transition-all ease-in' 
                {...register("name", {required: "Username is Required, Please Enter Username"})}/>
                {errors.name && <span className='text-red-600'>{errors.name.message}</span>}
                
                <label htmlFor='email'>Email Address</label>
                <input type='email' placeholder='Enter Email' 
                className='pl-2 border border-gray-500 rounded-md h-8.75 w-100 outline-none focus-visible:text-[#000080] 
                focus-visible:ring-2 focus-visible:ring-indigo-400 focus-visible:shadow-indigo-400 focus-visible:shadow-lg 
                transition-all ease-in' 
                {...register("email", {required: "Email is Required, Please Enter Email"})}/>
                {errors.email && <span className='text-red-600'>{errors.email.message}</span>}

                <label htmlFor='password'>Password</label>
                <input type='password' placeholder='Enter Password' className='pl-2 border border-gray-500 rounded-md h-8.75 w-100 
                outline-none focus-visible:text-[#000080] focus-visible:ring-2 focus-visible:ring-indigo-400 
                focus-visible:shadow-indigo-400 focus-visible:shadow-lg transition-all ease-in' 
                {...register("password", {required: "Password is Required, Please Enter Password"})}/>
                {errors.password && <span className='text-red-600'>{errors.password.message}</span>}
                
                <label htmlFor="role">Select a Role</label>
                <input type='hidden' 
                {...register("role", {required: "An Account Type is Requied, Please select a Role"})}/>
                <span className='text-red-600'>{errors.role?.message}</span>
                <div
                className='flex justify-center gap-5 bg-indigo-700 py-2 pl-10 pr-10 min-w-62.5 rounded-full lg:w-50 text-green-100'>
                    <button type='button' onClick={() => handleRoleSelect("Student")} 
                    className={`cursor-pointer bg-[#191970] py-2 px-4 rounded-full ${active === 'student' ? "transition-all ease-in delay-75" 
                    : "bg-transparent"}`}>Student</button>
                    <button type='button' onClick={() => handleRoleSelect("Instructor")} 
                    className={`cursor-pointer bg-[#191970] py-2 px-4 rounded-full ${active === 'instructor' ? "transition-all ease-in delay-75" 
                    : "bg-transparent"}`}>Instructor</button>
                </div>
                <button onClick={clickHandler} type='submit' 
                className='bg-linear-to-r from-[#e3ffe7] to-[#d9e7ff] mt-8 py-2 rounded-lg cursor-pointer 
                hover:shadow-xl hover:shadow-indigo-200 text-indigo-400 font-semibold transition-all ease hover:scale-105 delay-100'>
                    Register
                </button>
            </form>

            <div className='text-sm'>
                Already have an account? <a href='/login' className='underline text-blue-500'>Login</a>
            </div>
        </div>
    </div>
  )
}

export default Signup