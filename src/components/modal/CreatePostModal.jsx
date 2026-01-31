import React from 'react'
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { createPost } from '../../redux/operations/postAPI';
import { toast } from 'react-toastify';

const CreatePostModal = ({ isOpen, onClose }) => {

    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const dispatch = useDispatch();

    const autoGrow = (e) => {
        e.target.style.height = "auto";
        e.target.style.height = e.target.scrollHeight + "px";
    };

    const onSubmit = (data) => {
        dispatch(
            createPost({
                title:data.title,
                content:data.content
            })
        )
        .unwrap()
        .then((res) => {
            toast.success("Post created Successfully")
            reset();
            onClose();
        })
    }

    if(!isOpen) return null;

  return (
    <div 
        className='lg:h-screen lg:w-screen fixed top-5 flex justify-center'
        onClick={() => {
            reset();
            onClose();
        }}
    >
        <div
            onClick={(e) => e.stopPropagation()}
            className='flex justify-center text-indigo-500 bg-blue-200 lg:max-h-175 lg:w-[50%] px-10 pt-12 rounded-lg shadow-xl shadow-white'
        >
            <form
            onSubmit={handleSubmit(onSubmit)}
            className='flex flex-col justify-evenly lg:w-[45%] items-center'
            >
                <label htmlFor='title' className='text-lg font-semibold'>Title</label>
                <input type='text' placeholder='Enter Title'
                    {...register("title", {required: "Title is required, Please enter Title"})}
                    className='outline-none border bg-white border-neutral-400 focus-visible:ring-indigo-400
                     focus-visible:shadow-indigo-300 focus-visible:shadow-lg focus-visible:ring-2 focus-visible:border-0 pl-3
                      py-1.5 rounded-md transition-all ease-in delay-100 -mt-15 mb-2'
                />
                {errors.title && <span className='text-red-500'>{errors.title.message}</span>}

                <label htmlFor='content' className='text-lg font-semibold'>Content</label>
                <textarea onInput={autoGrow} id='content' placeholder='Enter Content'
                    {...register("content", {required: "Content is required, Please enter Content"})}
                    className='overflow-hidden resize-none outline-none bg-white border w-65 border-neutral-400
                     focus-visible:ring-indigo-400 focus-visible:shadow-indigo-300 focus-visible:shadow-lg
                      focus-visible:ring-2 focus-visible:border-0 px-3 -mt-15  py-1.5 rounded-md transition-all ease-in delay-100'
                />
                {errors.content && <span className='text-red-500'>{errors.content.message}</span>}

                <button
                type='submit'
                className='w-50 bg-linear-to-r from-[#e3ffe7] to-[#d9e7ff] mt-8 py-2 rounded-lg cursor-pointer 
                hover:shadow-lg hover:shadow-orange-200 transition-all ease hover:scale-105 delay-100 mb-2 text-indigo-400 font-semibold'
                >
                    Add Post
                </button>
            </form>
        </div>
    </div>
  )
}

export default CreatePostModal