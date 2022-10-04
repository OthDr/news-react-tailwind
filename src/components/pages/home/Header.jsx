import { React, useState, useEffect } from 'react'
import Three2 from '../../../utils/getThree2';

const Header = (props) => {
    const [GridArticles, setGridArticles] = useState(null);

    const url = 'http://localhost:3001/v2/api/news';

    useEffect(() => {

        fetch(url)
            .then(res => {
                return res.json();

            })
            .then((data) => {
                let three2 = Three2(data);
                //console.log(data);
                setGridArticles(three2);

            })
            .catch((err) => {
                //console.error(err);
            });

    }, [])

    return (

        <>
            {
                console.log(GridArticles)
            }
            <div className='p-4 lg:p-6 pb-12 bg-slate-900'>

                {GridArticles &&
                    <div className='grid lg:grid-cols-3 gap-1 lg:gap-2 items-center w-[100%] sm:w-[70%] lg:w-[80%] mx-auto'>

                        <div className='relative h-full col-span-2 row-span-2 hover:scale-95 duration-500 cursor-pointer group z-10'>
                            <h1 className='absolute top-0 w-full mx-auto p-2 md:p-3 font-bold text-center text-base sm:text-lg lg:text-2xl bg-gradient-to-b from-indigo-900/50 to-transparent text-slate-50/80'>{GridArticles[0].title}</h1>
                            <img className='w-[100%] h-full rounded md:rounded-sm' src={GridArticles[0].urlToImage} alt="/" />
                        </div>

                        <div className='relative h-full col-span-1 row-span-1 hover:scale-95 duration-500 cursor-pointer group z-10'>
                            <h1 className='absolute top-0 w-full mx-auto md:p-2 font-semibold text-center text-xs sm:text-base lg:text-lg bg-gradient-to-b from-indigo-900/50 to-transparent text-slate-50/80'>{GridArticles[1].title}</h1>
                            <img className='w-[100%] h-full rounded md:rounded-sm' src={GridArticles[1].urlToImage} alt="/" />
                        </div>

                        <div className='relative h-full col-span-1 row-span-1 hover:scale-95 duration-500 cursor-pointer group z-10'>
                            <h1 className='absolute top-0 w-full mx-auto md:p-2 font-semibold text-center text-xs sm:text-base lg:text-lg bg-gradient-to-b from-indigo-900/50 to-transparent text-slate-50/80'>{GridArticles[2].title}</h1>
                            <img className='w-[100%] h-full rounded md:rounded-sm' src={GridArticles[2].urlToImage} alt="/" />
                        </div>

                    </div>
                }

            </div>
        </>
    )
}

export default Header