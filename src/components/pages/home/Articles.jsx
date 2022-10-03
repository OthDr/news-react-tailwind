import React, { useState, useEffect } from 'react';
import Three from '../../../utils/getThree';
import { Link } from 'react-router-dom';

const Articles = (props) => {

    const [sideArticles, setSideArticles] = useState(null);

    const [First, setFirst] = useState(null);
    const [category, setCategory] = useState(null);

    
    const url = 'http://localhost:3001/v2/api/news/category=';

    useEffect(() => {
        setCategory(props.category);

        fetch(url+props.category)
            .then(res => {
                if (!res.ok) {
                    throw Error('Sorry! Could not find the ressource');
                } else {
                    return res.json();
                }
            })
            .then((data) => {
                data[0].createdAt = data[0].createdAt.split('T')[0];
                setFirst(data[0]);

                let three = Three(data);
                //console.log(three);

                setSideArticles(three);

            })
            .catch((err) => {
                console.error(err);
            });

    }, []);



    return (
        <>

            <div className='w-full min-h-screen my-2 p-4 bg-indigo-200/10'>

                <Link to={`/${category}`} className='w-fit text-base md:text-2xl font-extrabold uppercase text-center border-l-2 text-indigo-500/90 border-indigo-500/90 hover:border-l-8 duration-150 cursor-pointer p-2 my-2'>{category} NEWS</Link>

                {/*Left Big Articles */}
                <div className='flex flex-col md:flex-row mt-4'>
                    <div className='md:w-[90%] p-2 md:mr-2 flex flex-col items-center bg-stone-600/5'>

                        {First &&
                            <div className="w-[80%] flex flex-col items-start ">

                                <h3 className='news-font text-sm md:text-base font-bold pt-2 text-stone-800/70' ><a href="/">{First.title} </a></h3>
                                <h2 className='news-font text-lg md:text-xl font-semibold pb-2 text-stone-800/90' ><a href="/">{First.description} </a></h2>
                                <img className='w-full' alt='img' src={First.urlToImage}></img>
                                <p className='w-full font-semibold text-sm md:text-base news-font py-1 text-stone-800/80'>{First.content}</p>
                                <span className='text-xs md:text-sm font-semibold text-amber-500 border-l-4 border-amber-500 p-1 my-2'>{First.createdAt}</span>

                            </div>
                        }

                    </div>

                    {/*Right Articles */}

                    <div className="md:w-[30%] h-fit text-slate-900 mt-2 md:mt-0 md:p-2 rounded-sm bg-stone-600/5  shadow-slate-900/20" id="side_content">
                        {sideArticles && sideArticles.map((article, i) => (
                            <div key={i} className="flex flex-col items-start md:my-0 p-2 md:p-2 ">
                                <a href="cursor-pointer"><h1 className="text-sm p-1 md:text-base news-font font-bold text-stone-800 hover:text-stone-800/70">{article.title}</h1></a>
                                <p className="text-xs p-1 md:text-sm text-slate-900">{article.content.substring(0, 400)} <a href='/' className='text-amber-500/70 text-sm md:text-base font-bold cursor-pointer p-1 hover:text-amber-500'>..More</a>
                                </p>
                                <span className='w-[90%] mx-auto border-b-[1px] mt-4 -mb-2 border-slate-900/15'></span>
                            </div>
                        ))}

                    </div>

                </div>
            </div>
        </>
    )
}

export default Articles