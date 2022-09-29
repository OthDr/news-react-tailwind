import React from 'react';
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        < >
            <div className='shadow-md '>
                <div className="flex justify-between  items-center p-6 lg:px-12">

                    <div className="text-slate-500 text-lg md:text-4xl font-bold">
                        Doth
                        <span className="text-white bg-amber-500 rounded-md px-1">NEWS</span>
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
        </>
    );
}

export default Navbar;