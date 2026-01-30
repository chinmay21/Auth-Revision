import React from 'react'
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { createPost } from '../../redux/operations/postAPI';
import { toast } from 'react-toastify';

const CreatePostModal = ({ isOpen, onClose }) => {

    const { register, handleSubmit, formState: { errors } } = useForm();

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
        })
    }

    if(!isOpen) return null;

  return (
    <div 
        className='lg:h-screen lg:w-screen fixed top-5 flex justify-center'
        onClick={onClose}
    >
        <div
            onClick={(e) => e.stopPropagation()}
            className='text-indigo-500 bg-white lg:max-h-175 lg:w-[50%] px-10 pt-12 rounded-lg shadow-xl shadow-white'
        >
            <form
            onSubmit={handleSubmit(onSubmit)}
            className='flex flex-col gap-4 lg:w-[45%] items-center'
            >
                <label htmlFor='title'>Title</label>
                <input type='text' placeholder='Enter Title'
                    {...register("title", {required: "Title is required, Please enter Title"})}
                    className='outline-none border border-neutral-400 focus-visible:ring-indigo-400
                     focus-visible:shadow-indigo-300 focus-visible:shadow-lg focus-visible:ring-2 focus-visible:border-0 pl-3
                      py-1.5 rounded-md transition-all ease-in delay-100 mb-2'
                />
                {errors.title && <span className='text-red-500'>{errors.title.message}</span>}

                <label htmlFor='content'>Content</label>
                <textarea onInput={autoGrow} id='content' placeholder='Enter Content'
                    {...register("content", {required: "Content is required, Please enter Content"})}
                    className='overflow-hidden resize-none outline-none border border-neutral-400
                     focus-visible:ring-indigo-400 focus-visible:shadow-indigo-300 focus-visible:shadow-lg
                      focus-visible:ring-2 focus-visible:border-0 pl-3 py-1.5 rounded-md transition-all ease-in delay-100'
                />
                {errors.content && <span className='text-red-500'>{errors.content.message}</span>}

                <button
                type='submit'
                >
                    Add Post
                </button>
            </form>
        </div>
    </div>
  )
}

export default CreatePostModal