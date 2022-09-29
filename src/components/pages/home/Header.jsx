import React from 'react'

import { GoSearch } from 'react-icons/go'

const Header = () => {



    return (

        <>
            <div className="w-full flex md:flex-row flex-col items-center bg-slate-900 py-4 md:p-6 ">

                <ul className="mx-auto md:ml-[10%] md:w-full flex items-center text-indigo-500">
                    <li className="mr-1 text-xs sm:text-base font-semibold hover:border-b-2 border-amber-500 cursor-pointer duration-100 ">General</li>
                    <li className="mx-1 text-xs sm:text-base font-semibold hover:border-b-2 border-amber-500 cursor-pointer duration-100 ">Politics</li>
                    <li className="mx-1 text-xs sm:text-base font-semibold hover:border-b-2 border-amber-500 cursor-pointer duration-100 ">Business</li>
                    <li className="mx-1 text-xs sm:text-base font-semibold hover:border-b-2 border-amber-500 cursor-pointer duration-100 ">Tech</li>
                    <li className="mx-1 text-xs sm:text-base font-semibold hover:border-b-2 border-amber-500 cursor-pointer duration-100 ">Health</li>
                    <li className="ml-1 text-xs sm:text-base font-semibold hover:border-b-2 border-amber-500 cursor-pointer duration-100 ">Sports</li>
                </ul>

                <div className="group flex items items-center mx-auto mt-4 md:my-0 md:mr-[10%] sm:w-80 md:w-[630px] text-amber-400 p-1 md:p-2 bg-slate-200/10 rounded-sm md:rounded hover:bg-slate-200/5 duration-200">
                    <input className='px-1 bg-transparent outline-none w-full text-sm sm:text-base text-indigo-50' placeholder='key word ...' type="text" />
                    <GoSearch className='mx-1 cursor-pointer hover:scale-110 duration-300 hover:rotate-12 text-amber-50/40 group-hover:text-indigo-400' size={20} />
                </div>
            </div>

            <div className='p-4 md:p-6 pb-12 '>

                <div className='grid lg:grid-cols-3 gap-1 md:gap-2 items-center w-[100%] sm:w-[70%] md:w-[80%] mx-auto'>

                    <div className='relative h-full col-span-2 row-span-2 hover:scale-95 duration-500 cursor-pointer group'>
                        <h1 className='absolute top-0 w-full mx-auto p-2 md:p-4 font-bold text-center text-base sm:text-lg lg:text-2xl lg:scale-0 lg:group-hover:scale-100 lg:duration-500 bg-gradient-to-b from-indigo-900/50 to-transparent text-slate-50/80'>Poll: Americans say politicians aren't ‘informed enough’ to set abortion policy</h1>
                        <img className='w-[100%] h-full rounded md:rounded-sm' src="https://www.politico.com/dims4/default/9dd9a97/2147483647/legacy_thumbnail/403x218%3E/quality/90/?url=https%3A%2F%2Fstatic.politico.com%2Fdd%2Fbe%2Fdb3bdfc545abaf5187493ba9fd0c%2F220914-abortion-protest-getty.jpg" alt="/" />
                    </div>

                    <div className='relative h-full col-span-1 row-span-1 hover:scale-95 duration-500 cursor-pointer group'>
                        <h1 className='absolute top-0 w-full mx-auto md:p-2 font-semibold text-center text-xs sm:text-base lg:text-lg lg:scale-0 lg:group-hover:scale-100 lg:duration-500   bg-gradient-to-b from-indigo-900/50 to-transparent text-slate-50/80'>DOJ cracks down on employees’ political involvement ahead of midterms</h1>
                        <img className='w-[100%] h-full rounded md:rounded-sm' src="https://www.politico.com/dims4/default/23af11d/2147483647/legacy_thumbnail/403x218%3E/quality/90/?url=https%3A%2F%2Fstatic.politico.com%2Fff%2Fb1%2F30ab5cef495cae12d985ce764245%2Fvirus-outbreak-website-scams-17167.jpg" alt="/" />
                    </div>

                    <div className='relative h-full col-span-1 row-span-1 hover:scale-95 duration-500 cursor-pointer group'>
                        <h1 className='absolute top-0 w-full mx-auto md:p-2 font-semibold text-center text-xs sm:text-base lg:text-lg lg:scale-0 lg:group-hover:scale-100 lg:duration-500   bg-gradient-to-b from-indigo-900/50 to-transparent text-slate-50/80'>Trump Made N.Y. Attorney General’s Fraud Case Virtually Unbeatable</h1>
                        <img className='w-[100%] h-full rounded md:rounded-sm' src="https://a57.foxnews.com/hp.foxnews.com/images/2022/09/1024/576/40f5291f04e19ced466df5d6823de1dd.jpg?tl=1&ve=1" alt="/" />
                    </div>

                </div>

            </div>
        </>
    )
}

export default Header