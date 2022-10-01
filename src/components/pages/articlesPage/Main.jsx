import { React, useState, useEffect } from 'react'

const Main = (props) => {

    const [allArticles, setAll] = useState(null);
    const [error, setError] = useState(false);
    const [category] = useState(props.category);

    const url = 'http://localhost:3001/v2/api/news/category=';

    useEffect(() => {

        fetch(url + category)
            .then(res => {
                if (!res.ok) {
                    throw Error('Sorry! Could not find the ressource');
                } else {
                    return res.json();
                }
            })
            .then(data => {
                console.log(data);
                setAll(data);
            })
            .catch(err => {
                setError(true)
                console.error(err);
            })

    }, [])


    return (
        <>
            <div className='w-full min-h-screen my-2 p-2 bg-indigo-200/10'>
                {allArticles &&
                    allArticles.map(article => (
                        <div className="w-[60%] flex flex-col items-start my-4">

                            <h3 className='news-font text-sm md:text-base font-bold pt-2 text-slate-800/70' ><a href="/">{article.title} </a></h3>
                            <h2 className='news-font text-lg md:text-xl font-semibold pb-2 text-slate-800/90' ><a href="/">{article.description} </a></h2>
                            <img className='w-full' alt='img' src={article.urlToImage}></img>
                            <p className='w-full font-semibold text-sm md:text-base news-font py-1 text-slate-800/80'>{article.content}</p>

                            <span className='text-xs md:text-sm font-semibold text-amber-500 border-l-4 border-amber-500 p-1 my-2'>{article.createdAt}</span>

                            <h4 className='text-xs md:text-sm font-bold text-amber-500 p-1 my-2'>{article.author}</h4>

                        </div>
                    ))
                }
            </div>
        </>
    )
}

export default Main