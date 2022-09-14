import { GoSearch } from 'react-icons/go'
const Navbar = () => {
    return (
        < >
            <div className='shadow-md '>
                <div className="flex justify-between  items-center p-6 lg:px-12">

                    <div className="text-slate-500 text-2xl md:text-4xl font-bold">
                        Doth
                        <span className="text-white bg-amber-500 rounded-md px-1">NEWS</span>
                    </div>

                    <ul className="flex items-center text-md text-slate-500 md:text-lg">
                        <li className="mx-1 font-semibold hover:text-slate-400">
                            <a href="/">Sign in</a>
                        </li>
                        <li className="mx-1  bg-slate-500 rounded-md text-white py-1 px-2 hover:bg-slate-400">
                            <a href="/">Sign up</a>
                        </li>
                    </ul>
                </div>

                <div className="flex md:flex-row flex-col items-center bg-slate-900 lg:px-12 p-6 ">

                    <ul className="mx-auto md:mx-0 md:w-full flex items-center text-amber-500">
                        <li className="mr-2 font-semibold hover:border-b-2 border-amber-500 cursor-pointer duration-100">General</li>
                        <li className="mx-2 font-semibold hover:border-b-2 border-amber-500 cursor-pointer duration-100">Politics</li>
                        <li className="mx-2 font-semibold hover:border-b-2 border-amber-500 cursor-pointer duration-100">Business</li>
                        <li className="mx-2 font-semibold hover:border-b-2 border-amber-500 cursor-pointer duration-100">Tech</li>
                        <li className="mx-2 font-semibold hover:border-b-2 border-amber-500 cursor-pointer duration-100">Health</li>
                        <li className="ml-2 font-semibold hover:border-b-2 border-amber-500 cursor-pointer duration-100">Sports</li>

                    </ul>

                    <div className="group flex items items-center mx-auto mt-4 md:my-0 w-[60%] sm:w-80 md:w-96 text-amber-400 p-1 rounded-lg border-2 border-amber-400/30 ">
                        <input className='px-1 bg-transparent outline-none w-full text-md text-amber-50' placeholder='key word ...' type="text" />
                        <GoSearch className='mx-1 cursor-pointer hover:scale-110 duration-300 hover:rotate-12 text-amber-400/40 group-hover:text-amber-400' size={20} />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Navbar;