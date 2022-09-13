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
                        <li className="mr-2 font-semibold">General</li>
                        <li className="mx-2 font-semibold">Politics</li>
                        <li className="mx-2 font-semibold">Business</li>
                        <li className="mx-2 font-semibold">Tech</li>
                        <li className="mx-2 font-semibold">Health</li>
                        <li className="ml-2 font-semibold">Sports</li>

                    </ul>

                    <div className="flex items items-center mx-auto mt-4 md:my-0 w-52 sm:w-72 md:w-80 text-amber-400 p-1 rounded-lg border-2 border-amber-400">
                        <input className='px-1 bg-transparent outline-none w-full text-md text-amber-50' placeholder='search..' type="text" />
                        <GoSearch className='mx-1' size={20} />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Navbar;