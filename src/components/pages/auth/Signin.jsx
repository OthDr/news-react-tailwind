import React from 'react'
// GoSignIn  GoEye GoMail  GoLock GoSignOut  GoPerson GoSmiley
import { GoMail, GoLock, GoPerson } from 'react-icons/go'
import { Link } from 'react-router-dom'

const Signin = () => {
  return (
    <>
      <div className='w-full h-screen flex flex-col items-center justify-center bg-slate-900'>

        <div className='w-[80%]  mx-auto sm:w-[60%] md:w-[50%] lg:w-[35%] border-2 border-indigo-500/20 rounded-md'>
          <div className='justify-center p-4'>
            <GoPerson className='mx-auto text-indigo-500/30' size={70} />
            <h1 className='w-full text-center text-xl font-semibold text-indigo-500/30'>Sign-in</h1>
          </div>
          <div className="w-[90%] group mx-auto mt-4 flex items items-center p-1 bg-stone-50/5 rounded-md">
            <GoMail className='mx-2 cursor-pointer group-hover:scale-110 duration-500 text-stone-50/40 group-hover:text-indigo-400' size={25} />
            <input className=' outline-none w-full text-sm sm:text-base  p-1 text-indigo-400 rounded-md bg-transparent' placeholder='email' type="text" />
          </div>

          <div className="w-[90%] group mx-auto mt-2 flex items items-center p-1 bg-stone-50/5 rounded-md">
            <GoLock className='mx-2 cursor-pointer group-hover:scale-110 duration-500 text-stone-50/40 group-hover:text-indigo-400 ' size={25} />
            <input className=' outline-none w-full text-sm sm:text-base  p-1 text-indigo-400 rounded-md bg-transparent' placeholder='password' type="text" />
          </div>

          <div className='w-full flex '>
            <button className='w-[50%] mx-auto mt-8 p-1 lg:p-2 font-bold text-indigo-500 border-2 border-indigo-500 rounded-md hover:text-slate-900 hover:bg-indigo-500 duration-150'>
              Done
            </button>

          </div>

          <div className='w-full my-8 flex justify-center'>
            <p className='text-stone-50/40'>Don't have an account?<Link to='/signup' className='ml-1 text-indigo-500 font-semibold'>Register</Link></p>
          </div>

        </div>

      </div>
    </>

  )
}

export default Signin