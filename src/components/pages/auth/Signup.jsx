import React from 'react'

import { GoMail, GoLock, GoPerson, GoSignIn, GoChevronLeft } from 'react-icons/go'
import { Link, useNavigate } from 'react-router-dom'


const Signup = () => {

  const navigate = useNavigate();

  return (
    <>
      <div className='w-full h-screen flex flex-col items-center justify-center bg-slate-900'>
        <div className='ml-[10%] sm:ml-[20%] md:ml-[25%] lg:ml-[32%] absolute top-0 left-0 py-4'>
          <button onClick={() => navigate(-1)} className='flex text-indigo-500 text-xl font-semibold items-center'><GoChevronLeft className='' size={35} />back</button>
        </div>
        <div className='w-[80%]  mx-auto sm:w-[60%] md:w-[50%] lg:w-[35%]  border-indigo-500/20 rounded-md'>

          <div className='justify-center p-4'>
            <GoSignIn className='mx-auto text-indigo-500/75' size={60} />
            <h1 className='w-full text-center text-lg md:text-xl font-semibold text-indigo-500/75'>Registration</h1>
          </div>

          <div className='flex w-[90%] mx-auto mt-4'>
            <div className="w-full group mx-auto flex items items-center mr-2 p-2 bg-stone-50/10 rounded-md">
              <GoPerson className='mx-2 cursor-pointer group-hover:scale-110 duration-500 text-stone-50/75 group-hover:text-indigo-400' size={25} />
              <input className=' outline-none w-full text-sm sm:text-base  p-1 text-indigo-400 rounded-md bg-transparent placeholder:text-stone-50/80' placeholder='first name' type="text" />
            </div>
            <div className="w-full group mx-auto flex items items-center p-2 bg-stone-50/10 rounded-md">
              <GoPerson className='mx-2 cursor-pointer group-hover:scale-110 duration-500 text-stone-50/75 group-hover:text-indigo-400' size={25} />
              <input className=' outline-none w-full text-sm sm:text-base  p-1 text-indigo-400 rounded-md bg-transparent placeholder:text-stone-50/80' placeholder='last name' type="text" />
            </div>
          </div>

          <div className="w-[90%] group mx-auto mt-2 flex items items-center p-2 bg-stone-50/10 rounded-md">
            <GoMail className='mx-2 cursor-pointer group-hover:scale-110 duration-500 text-stone-50/75 group-hover:text-indigo-400' size={25} />
            <input className=' outline-none w-full text-sm sm:text-base  p-1 text-indigo-400 rounded-md bg-transparent placeholder:text-stone-50/80' placeholder='email' type="text" />
          </div>

          <div className="w-[90%] group mx-auto mt-2 flex items items-center p-2 bg-stone-50/10 rounded-md">
            <GoLock className='mx-2 cursor-pointer group-hover:scale-110 duration-500 text-stone-50/75 group-hover:text-indigo-400 ' size={25} />
            <input className=' outline-none w-full text-sm sm:text-base  p-1 text-indigo-400 rounded-md bg-transparent placeholder:text-stone-50/80' placeholder='password' type="password" />
          </div>

          <div className='w-full flex '>
            <button className='w-[90%] mx-auto mt-8 p-2 font-bold text-indigo-500 border-2 border-indigo-500 rounded-md hover:text-slate-900 hover:bg-indigo-500 duration-150'>
              Done
            </button>

          </div>

          <div className='w-full my-8 flex justify-center'>
            <p className='text-stone-50/60'>Already registred?<Link to='/signin' className='ml-1 text-indigo-500 font-semibold'>Sign in</Link></p>
          </div>

        </div>

      </div>
    </>
  )
}

export default Signup