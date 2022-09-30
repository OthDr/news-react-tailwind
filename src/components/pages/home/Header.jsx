import { React, useState, useEffect } from 'react'
import { GoSearch } from 'react-icons/go'
import Three2 from '../../../utils/getThree2';

const Header = () => {
    const [GridArticles, setGridArticles] = useState([]);

    useEffect(() => {
        const url = 'http://localhost:3001/v2/api/news';

        fetch(url)
            .then(res => {
                if (!res.ok) {
                    throw Error('Sorry! Could not find the ressource');
                } else {
                    return res.json();
                }
            })
            .then((data) => {

                let three2 = Three2(data);
                console.log(three2);

                setGridArticles(three2);

            })
            .catch((err) => {
                console.error(err);
            });

    }, [])

    return (

        <>
            <div className="w-full flex lg:flex-row flex-col items-center bg-slate-900 py-4 md:p-6 ">

                <ul className="mx-auto lg:ml-[10%] lg:w-full flex items-center text-indigo-500">
                    <li className="mr-1 text-xs sm:text-base font-semibold hover:border-b-2 border-amber-500 cursor-pointer duration-50 ">General</li>
                    <li className="mx-1 text-xs sm:text-base font-semibold hover:border-b-2 border-amber-500 cursor-pointer duration-50 ">Politics</li>
                    <li className="mx-1 text-xs sm:text-base font-semibold hover:border-b-2 border-amber-500 cursor-pointer duration-50 ">Business</li>
                    <li className="mx-1 text-xs sm:text-base font-semibold hover:border-b-2 border-amber-500 cursor-pointer duration-50 ">Tech</li>
                    <li className="mx-1 text-xs sm:text-base font-semibold hover:border-b-2 border-amber-500 cursor-pointer duration-50 ">Health</li>
                    <li className="ml-1 text-xs sm:text-base font-semibold hover:border-b-2 border-amber-500 cursor-pointer duration-50 ">Sports</li>
                </ul>

                <div className="group flex items items-center mx-auto mt-4 lg:my-0 lg:mr-[10%] sm:w-80 lg:w-[630px] text-amber-400 p-1 lg:p-2 bg-slate-200/10 rounded-sm lg:rounded hover:bg-slate-200/5 duration-200">
                    <input className='px-1 bg-transparent outline-none w-full text-sm sm:text-base text-indigo-50' placeholder='search..' type="text" />
                    <GoSearch className='mx-1 cursor-pointer hover:scale-110 duration-300 hover:rotate-12 text-amber-50/40 group-hover:text-indigo-400' size={20} />
                </div>
            </div>

            <div className='p-4 lg:p-6 pb-12 bg-slate-900'>

                <div className='grid lg:grid-cols-3 gap-1 lg:gap-2 items-center w-[100%] sm:w-[70%] lg:w-[80%] mx-auto'>

                    <div className='relative h-full col-span-2 row-span-2 hover:scale-95 duration-500 cursor-pointer group'>
                        <h1 className='absolute top-0 w-full mx-auto p-2 md:p-3 font-bold text-center text-base sm:text-lg lg:text-2xl bg-gradient-to-b from-indigo-900/50 to-transparent text-slate-50/80'>{GridArticles[0].title}</h1>
                        <img className='w-[100%] h-full rounded md:rounded-sm' src={GridArticles[0].urlToImage} alt="/" />
                    </div>

                    <div className='relative h-full col-span-1 row-span-1 hover:scale-95 duration-500 cursor-pointer group'>
                        <h1 className='absolute top-0 w-full mx-auto md:p-2 font-semibold text-center text-xs sm:text-base lg:text-lg bg-gradient-to-b from-indigo-900/50 to-transparent text-slate-50/80'>{GridArticles[1].title}</h1>
                        <img className='w-[100%] h-full rounded md:rounded-sm' src={GridArticles[1].urlToImage} alt="/" />
                    </div>

                    <div className='relative h-full col-span-1 row-span-1 hover:scale-95 duration-500 cursor-pointer group'>
                        <h1 className='absolute top-0 w-full mx-auto md:p-2 font-semibold text-center text-xs sm:text-base lg:text-lg bg-gradient-to-b from-indigo-900/50 to-transparent text-slate-50/80'>{GridArticles[2].title}</h1>
                        <img className='w-[100%] h-full rounded md:rounded-sm' src={GridArticles[2].urlToImage} alt="/" />
                    </div>

                </div>

            </div>
        </>
    )
}

export default Header