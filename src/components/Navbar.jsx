import { React, useState } from 'react';
import { Link } from "react-router-dom";

import { GoSearch } from 'react-icons/go'

import { FiMenu, FiX } from 'react-icons/fi';


const Navbar = (props) => {


    const [mobMenu, showMenu] = useState(false);
    const toggleMenu = () => { showMenu(!mobMenu); console.log('clickeeeed'); };

    const normalClass = 'mx-2 text-xs sm:text-base font-semibold hover:border-b-2 border-amber-500 hover:text-amber-500 cursor-pointer duration-50 ';
    const normalMobClass = 'px-1 my-2 text-base sm:text-base font-semibold border-amber-500 hover:text-indigo-500/60';


    return (
        < >
            <div className='shadow-md relative'>
                <div className="flex justify-between  items-center p-4 md:p-6 lg:px-12">

                    <div className="text-slate-500 text-xl md:text-4xl font-bold">
                        <Link to='/'>
                            Doth
                            <span className="text-white bg-amber-500 rounded-md px-1">NEWS</span>
                        </Link>
                    </div>

                    <ul className="hidden md:flex items-center text-xs text-indigo-600 md:text-lg">
                        <li className="mx-1 md:mx-1 font-semibold hover:text-indigo-400">

                            <Link to='/signin'>Sign in</Link>
                        </li>
                        <li className="md:mx-1  bg-indigo-600 rounded-md text-white py-1 px-2 hover:bg-indigo-500">

                            <Link to='/signup'>Sign up</Link>
                        </li>
                    </ul>
                    {mobMenu
                        ? <FiX onClick={toggleMenu} className='md:hidden cursor-pointer hover:text-indigo-500' size={22} />
                        : <FiMenu onClick={toggleMenu} className='md:hidden cursor-pointer hover:text-indigo-500' size={22} />
                    }
                </div>


            </div>
            <div className="w-full flex lg:flex-row flex-col items-center bg-slate-900 py-4 md:p-6 ">

                <ul className="hidden mx-auto lg:ml-[10%] lg:w-full md:flex items-center text-indigo-500">
                    <li className={`${props.selectedCategory === 'general' ? 'border-b-2 border-amber-500' : normalClass} `}><Link to='/general' onClick={handleClick => props.category = 'general'}>General</Link></li>
                    <li className={`${props.selectedCategory === 'business' ? 'border-b-2 border-amber-500' : normalClass} `}><Link to='/business' onClick={handleClick => props.category = 'business'}>Business</Link></li>
                    <li className={`${props.selectedCategory === 'health' ? 'border-b-2 border-amber-500' : normalClass} `}><Link to='/health' onClick={handleClick => props.category = 'health'}>Health</Link></li>
                    <li className={`${props.selectedCategory === 'science' ? 'border-b-2 border-amber-500' : normalClass} `}><Link to='/science' onClick={handleClick => props.category = 'science'}>Science</Link></li>
                    <li className={`${props.selectedCategory === 'technology' ? 'border-b-2 border-amber-500' : normalClass} `}><Link to='/technologie' onClick={handleClick => props.category = 'technologie'}>Tech</Link></li>
                    <li className={`${props.selectedCategory === 'sports' ? 'border-b-2 border-amber-500' : normalClass} `}><Link to='/sports' onClick={handleClick => props.category = 'sports'}>Sports</Link></li>
                    <li className={`${props.selectedCategory === 'Entertaiment' ? 'border-b-2 border-amber-500' : normalClass} `}><Link to='/entertaiment' onClick={handleClick => props.category = 'entertaiment'}>entertaiment</Link></li>
                </ul>

                <div className="group flex items items-center mx-auto mt-2 sm:mt-4 lg:my-0 lg:mr-[10%] w-64 sm:w-80 lg:w-[630px] text-amber-400 p-2 bg-stone-50/10  rounded-sm lg:rounded hover:bg-slate-200/5 duration-200">
                    <input className='px-1 bg-transparent outline-none w-full text-base text-indigo-500 placeholder:text-stone-50/80' placeholder='search..' type="text" />
                    <GoSearch className='mx-1 cursor-pointer hover:scale-110 duration-300 hover:rotate-12 text-amber-50/40 group-hover:text-indigo-400' size={20} />
                </div>
            </div>




            {/*Mobile menu */}

            {
                mobMenu &&

                <div className='fixed top-0 left-0 w-full h-full flex flex-col bg-slate-900 z-50'>
                    <div className=" flex justify-between p-4 text-slate-500 text-xl font-bold bg-stone-50">
                        <Link to='/'>
                            Doth
                            <span className="text-white bg-amber-500 rounded-md px-1">NEWS</span>
                        </Link>
                        <FiX onClick={toggleMenu} className='md:hidden cursor-pointer hover:text-indigo-500' size={22} />
                    </div>
                    <ul className="w-full p-4 flex flex-col items-start text-indigo-500 border-indigo-500/40 border-b-[1px]">
                        <li className={`${props.selectedCategory === 'general' ? normalMobClass+'px-1 border-l-2 border-amber-500 text-amber-400 my-1' : normalMobClass}`}><Link to='/general' onClick={handleClick => props.category = 'general'}>General</Link></li>
                        <li className={`${props.selectedCategory === 'business' ? normalMobClass+'px-1 border-l-2 border-amber-500 text-amber-400 my-1' : normalMobClass}`}><Link to='/business' onClick={handleClick => props.category = 'business'}>Business</Link></li>
                        <li className={`${props.selectedCategory === 'health' ? normalMobClass+'px-1 border-l-2 border-amber-500 text-amber-400 my-1' : normalMobClass}`}><Link to='/health' onClick={handleClick => props.category = 'health'}>Health</Link></li>
                        <li className={`${props.selectedCategory === 'science' ? normalMobClass+'px-1 border-l-2 border-amber-500 text-amber-400 my-1' : normalMobClass}`}><Link to='/science' onClick={handleClick => props.category = 'science'}>Science</Link></li>
                        <li className={`${props.selectedCategory === 'technology' ? normalMobClass+'px-1 border-l-2 border-amber-500 text-amber-400 my-1' : normalMobClass}`}><Link to='/technologie' onClick={handleClick => props.category = 'technologie'}>Tech</Link></li>
                        <li className={`${props.selectedCategory === 'sports' ? normalMobClass+'px-1 border-l-2 border-amber-500 text-amber-400 my-1' : normalMobClass}`}><Link to='/sports' onClick={handleClick => props.category = 'sports'}>Sports</Link></li>
                        <li className={`${props.selectedCategory === 'Entertaiment' ? normalMobClass+'px-1 border-l-2 border-amber-500 text-amber-400 my-1' : normalMobClass}`}><Link to='/entertaiment' onClick={handleClick => props.category = 'entertaiment'}>entertaiment</Link></li>
                    </ul>

                    <div className='w-full p-4 my-2'>
                        <ul className="flex items-center text-base text-indigo-600">
                            <li className="font-semibold hover:text-indigo-400 mr-1">

                                <Link to='/signin'>Sign in</Link>
                            </li>
                            <li className="bg-indigo-600 rounded-md text-white py-1 px-2 hover:bg-indigo-500">

                                <Link to='/signup'>Sign up</Link>
                            </li>
                        </ul>
                    </div>
                </div>}




        </>
    );
}

export default Navbar;