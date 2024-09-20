import React from 'react'
import { useForm } from 'react-hook-form'
import axios from 'axios'
function Signup() {
  console.log(useForm())
  const { handleSubmit, register } = useForm()


  const onSubmit = async (data) => {
    const res = await axios.post('http://localhost:3000/api/register', data)
    console.log(res.data)
    // console.log(data)

  }

  return (
    <div className='flex justify-center items-center min-h-screen'>
      <div className='p-6 w-[25rem] shadow-lg rounded-md'>
        <h1 className='text-black font-bold text-3xl text-center m-2'>Signup</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label className='block' htmlFor='Name'>Name</label>
          <input className='block mt-1 border border-slate-900 p-2 w-full rounded-md' type='text' name='name' {...register('name')} />
          <label className='block' htmlFor='Name'>Email</label>
          <input className='block mt-1 border border-slate-900 p-2 w-full rounded-md' type='email' name='email' {...register('email')} />
          <label className='block' htmlFor='Name'>Phone</label>
          <input className='block mt-1 border border-slate-900 p-2 w-full rounded-md' type='text' name='phone' {...register('phone')} />
          <label className='block' htmlFor='Name'>Password</label>
          <input className='block mt-1 border border-slate-900 p-2 w-full rounded-md' type='password' name='password' {...register('password')} />
          <button className='bg-blue-500 px-8 py-2 rounded-md w-full mt-3 text-white' type='submit'>Signup</button>
        </form>
      </div>
    </div>
  )
}

export default Signup
