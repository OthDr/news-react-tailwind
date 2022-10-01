import React from 'react';
import { Link } from "react-router-dom";

import { GoSearch } from 'react-icons/go'

const Navbar = () => {
    return (
        < >
            <div className='shadow-md '>
                <div className="flex justify-between  items-center p-6 lg:px-12">

                    <div className="text-slate-500 text-lg md:text-4xl font-bold">
                        <Link to='/'>
                            Doth
                            <span className="text-white bg-amber-500 rounded-md px-1">NEWS</span>
                        </Link>
                    </div>

                    <ul className="flex items-center text-xs text-indigo-600 md:text-lg">
                        <li className="mx-1 md:mx-1 font-semibold hover:text-indigo-400">

                            <Link to='/signin'>Sign in</Link>
                        </li>
                        <li className="md:mx-1  bg-indigo-600 rounded-md text-white py-1 px-2 hover:bg-indigo-500">

                            <Link to='/signup'>Sign up</Link>
                        </li>
                    </ul>
                </div>


            </div>
            <div className="w-full flex lg:flex-row flex-col items-center bg-slate-900 py-4 md:p-6 ">

                <ul className="mx-auto lg:ml-[10%] lg:w-full flex items-center text-indigo-500">
                    <li className="mr-1 text-xs sm:text-base font-semibold hover:border-b-2 border-amber-500 cursor-pointer duration-50 "><Link to='/general'>General</Link></li>
                    <li className="mx-1 text-xs sm:text-base font-semibold hover:border-b-2 border-amber-500 cursor-pointer duration-50 "><Link to='/business'>Business</Link></li>
                    <li className="mx-1 text-xs sm:text-base font-semibold hover:border-b-2 border-amber-500 cursor-pointer duration-50 "><Link to='/health'>Health</Link></li>
                    <li className="mx-1 text-xs sm:text-base font-semibold hover:border-b-2 border-amber-500 cursor-pointer duration-50 "><Link to='/science'>Science</Link></li>
                    <li className="mx-1 text-xs sm:text-base font-semibold hover:border-b-2 border-amber-500 cursor-pointer duration-50 "><Link to='/technologie'>Tech</Link></li>
                    <li className="ml-1 text-xs sm:text-base font-semibold hover:border-b-2 border-amber-500 cursor-pointer duration-50 "><Link to='/sports'>Sports</Link></li>
                    <li className="ml-1 text-xs sm:text-base font-semibold hover:border-b-2 border-amber-500 cursor-pointer duration-50 "><Link to='/entertaiment'>entertaiment</Link></li>
                </ul>

                <div className="group flex items items-center mx-auto mt-4 lg:my-0 lg:mr-[10%] sm:w-80 lg:w-[630px] text-amber-400 p-1 lg:p-2 bg-slate-200/10 rounded-sm lg:rounded hover:bg-slate-200/5 duration-200">
                    <input className='px-1 bg-transparent outline-none w-full text-sm sm:text-base text-indigo-50' placeholder='search..' type="text" />
                    <GoSearch className='mx-1 cursor-pointer hover:scale-110 duration-300 hover:rotate-12 text-amber-50/40 group-hover:text-indigo-400' size={20} />
                </div>
            </div>
        </>
    );
}

export default Navbar;