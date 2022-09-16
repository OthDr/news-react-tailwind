import React from 'react'

import { GoSearch } from 'react-icons/go'

const Header = () => {



    return (

        <>
            <div className="w-full flex md:flex-row flex-col items-center bg-slate-900 p-6 ">

                <ul className="mx-auto md:ml-[10%] md:w-full flex items-center text-amber-500">
                    <li className="mr-2 text-sm sm:text-base font-semibold hover:border-b-2 border-amber-500 cursor-pointer duration-100 ">General</li>
                    <li className="mx-2 text-sm sm:text-base font-semibold hover:border-b-2 border-amber-500 cursor-pointer duration-100 ">Politics</li>
                    <li className="mx-2 text-sm sm:text-base font-semibold hover:border-b-2 border-amber-500 cursor-pointer duration-100 ">Business</li>
                    <li className="mx-2 text-sm sm:text-base font-semibold hover:border-b-2 border-amber-500 cursor-pointer duration-100 ">Tech</li>
                    <li className="mx-2 text-sm sm:text-base font-semibold hover:border-b-2 border-amber-500 cursor-pointer duration-100 ">Health</li>
                    <li className="ml-2 text-sm sm:text-base font-semibold hover:border-b-2 border-amber-500 cursor-pointer duration-100 ">Sports</li>
                </ul>

                <div className="group flex items items-center mx-auto mt-4 md:my-0 md:mr-[10%] sm:w-80 md:w-[630px] text-amber-400 p-1 bg-slate-800/40 ">
                    <input className='px-1 bg-transparent outline-none w-full text-sm sm:text-base text-amber-50' placeholder='key word ...' type="text" />
                    <GoSearch className='mx-1 cursor-pointer hover:scale-110 duration-300 hover:rotate-12 text-amber-50/40 group-hover:text-amber-400' size={20} />
                </div>
            </div>

            <div className='p-6 pb-12 bg-slate-900'>

                <div className='grid lg:grid-cols-3 gap-1 items-center w-[90%] sm:w-[70%] md:w-[80%] mx-auto'>

                    <div className='relative col-span-2 row-span-2 hover:scale-95 duration-500 cursor-pointer group'>
                        <h1 className='absolute top-0 w-full mx-auto p-2 md:p-4 font-bold text-center text-lg sm:text-lg lg:text-2xl bg-slate-800/40 text-slate-50'>US Social security</h1>
                        <img className='w-[100%]' src="https://a57.foxnews.com/static.foxbusiness.com/foxbusiness.com/content/uploads/2022/05/192/108/social-security.jpg?tl=1&ve=1" alt="/" />
                    </div>

                    <div className='relative hover:scale-95 duration-500 cursor-pointer group'>
                        <h1 className='absolute top-0 w-full mx-auto p-1 md:p-2 font-semibold text-center text-sm sm:text-md lg:text-lg   bg-slate-800/40 text-slate-50'>1914 translation by H. Rackham</h1>
                        <img className='w-[100%]' src="https://a57.foxnews.com/static.foxbusiness.com/foxbusiness.com/content/uploads/2022/07/576/324/powell-5.jpg?tl=1&ve=1" alt="/" />
                    </div>

                    <div className='relative hover:scale-95 duration-500 cursor-pointer group'>
                        <h1 className='absolute top-0 w-full mx-auto p-1 md:p-2 font-semibold text-center text-sm sm:text-md lg:text-lg   bg-slate-800/40 text-slate-50'>Airlines Landing Article</h1>
                        <img className='w-[100%]' src="https://a57.foxnews.com/hp.foxbusiness.com/images/2022/07/281/158/3bfa998c063eecdd6660cc7dfe4d6559.jpg?tl=1&ve=1" alt="/" />
                    </div>

                </div>

            </div>
        </>
    )
}

export default Header