import React, { useState, useEffect } from 'react';
import Three from '../../../utils/getThree';

const Articles = (props) => {

    const [All, setAll] = useState([]);
    const [sideArticles, setSideArticles] = useState([]);

    const [First, setFirst] = useState([]);
    const [category, setCategory] = useState('');

    useEffect(() => {
        const url = 'http://localhost:3001/v2/api/news/category=' + props.category;
        setCategory(props.category);

        fetch(url)
            .then(res => {
                if (!res.ok) {
                    throw Error('Sorry! Could not find the ressource');
                } else {
                    return res.json();
                }
            })
            .then((data) => {
                setAll(data);
                data[1].createdAt = data[1].createdAt.split('T')[0];
                setFirst(data[1]);
            }).then((data)=>{
                console.log(All);
                setSideArticles(Three(All));

            })
            .catch((err) => {
                console.error(err);
            });

    }, []);



    return (
        <>

            <div className='w-full my-2 p-2 bg-amber-900/5'>

                <h1 className='w-fit h-fit text-base md:text-2xl font-extrabold uppercase text-center mb-4 border-l-2 text-indigo-500/90 border-indigo-500/90 hover:border-l-8 duration-150 cursor-pointer p-2'>{category} NEWS</h1>

                {/*Left Big Articles */}
                <div className='flex flex-col md:flex-row '>
                    <div className='md:w-[60%] flex flex-col items-start'>

                        {First &&
                            <div className="w-[90%] flex flex-col items-start">

                                <h2 className='news-font text-lg md:text-xl font-bold py-2 text-slate-800' ><a href="/">{First.title} </a></h2>
                                <img className='w-full' alt='img' src="https://a57.foxnews.com/hp.foxnews.com/images/2022/09/1024/576/40f5291f04e19ced466df5d6823de1dd.jpg?tl=1&ve=1"></img>
                                <p className='text-sm md:text-base news-font py-1 text-slate-900'>{First.description}</p>
                                <span className='text-xs md:text-sm font-semibold text-amber-500 border-l-4 border-amber-500 p-1'>{First.createdAt}</span>

                            </div>
                        }

                    </div>


                    {/*Right Articles */}
                    <div className="md:w-[40%] text-slate-900" id="side_content">

                        {sideArticles && sideArticles.map((article) => (
                            <div className="flex flex-col items-start  my-1 md:my-2 p-2 md:p-3 bg-white rounded-sm shadow-md shadow-slate-900/20">
                                <a href="cursor-pointer"><h1 className="text-sm p-1 md:text-base news-font font-bold text-slate-800 hover:text-slate-800/70">{article}</h1></a>
                                <p className="text-xs p-1 md:text-sm text-slate-900">{article.content}</p>
                                <a href='/' className='text-amber-500/70 text-sm md:text-base font-bold cursor-pointer p-1 hover:text-amber-500'>More..</a>
                            </div>
                        ))}

                    </div>


                </div>
            </div>
        </>
    )
}

export default Articles