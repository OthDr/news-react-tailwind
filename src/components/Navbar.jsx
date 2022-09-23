
const Navbar = () => {
    return (
        < >
            <div className='shadow-md '>
                <div className="flex justify-between  items-center p-6 lg:px-12">

                    <div className="text-slate-500 text-2xl md:text-4xl font-bold">
                        Doth
                        <span className="text-white bg-amber-500 rounded-md px-1">NEWS</span>
                    </div>

                    <ul className="flex items-center text-md text-indigo-600 md:text-lg">
                        <li className="mx-1 font-semibold hover:text-indigo-400">
                            <a href="/">Sign in</a>
                        </li>
                        <li className="mx-1  bg-indigo-600 rounded-md text-white py-1 px-2 hover:bg-indigo-500">
                            <a href="/">Sign up</a>
                        </li>
                    </ul>
                </div>

                
            </div>
        </>
    );
}

export default Navbar;