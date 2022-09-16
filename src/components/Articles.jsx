import React, { useState, useEffect } from 'react';


const Articles = (props) => {

    const [All, setAll] = useState([]);
    const [category, setCategory] = useState('');


    useEffect(() => {
        const url = 'http://localhost:3001/v2/api/news/category=' + props.category ;
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
                console.log(data);
            })
            .catch((err) => {
                console.log(err);
            });
            


    }, []);

    return (
        <>
            

            <div className='w-full min-h-screen flex flex-col md:flex-row my-2 p-2 py-4  bg-amber-900/5'>

                <h1 className='w-fit h-fit mx-auto text-2xl font-extrabold uppercase text-center mb-4 bg-amber-500/50 rounded-sm text-amber-50 hover:scale-105 duration-200 cursor-pointer'>{category} NEWS</h1>

                {/*Left Big Articles */}
                <div className='md:w-[60%] flex flex-col items-center'>

                    {All &&
                        All.map((article) => (
                            <div className="w-[75%] flex flex-col items-start p-2" key={article.id}>

                                <h2><a className='news-font text-lg font-semibold py-1' href="/">{article.title} </a></h2>
                                <img className='w-full' alt='img' src="https://a57.foxnews.com/hp.foxnews.com/images/2022/09/1024/576/40f5291f04e19ced466df5d6823de1dd.jpg?tl=1&ve=1"></img>
                                <p className='text-sm md:text-base news-font py-1'>{article.description}</p>
                                <span className='text-xs md:text-sm font-semibold text-amber-500 border-l-4 border-amber-500 p-1'>{article.createdAt.split('T')[0]}</span>

                            </div>
                        ))

                    }

                </div>


                {/*Right Articles */}
                <div className="md:w-[40%] bg-gray-50 text-slate-900 shadow shadow-slate-900/20 p-2" id="side_content">

                    <div className="flex flex-col items-start  m-1">
                        <span className="text-sm p-1 md:text-base news-font font-bold">The standard Lorem Ipsum passage</span>
                        <span className="text-xs p-1 md:text-sm">Samsung humour, or randomised words which don't look even slightly
                            believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there
                            isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum</span>
                    </div>

                    <div className="flex justify-around my-4">
                        <span className="nav w-full border-b border-amber-400/50 border-solid mx-3"></span>
                    </div>

                    <div className="flex flex-col items-start  m-1">
                        <span className="text-sm p-1 md:text-base news-font font-bold">The standard Lorem Ipsum passage</span>
                        <span className="text-xs p-1 md:text-sm">Samsung humour, or randomised words which don't look even slightly
                            believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there
                            isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum</span>
                    </div>

                    <div className="flex justify-around my-4">
                        <span className="nav w-full border-b border-amber-400/50 border-solid mx-3"></span>
                    </div>

                    <div className="flex flex-col items-start  m-1">
                        <span className="text-sm p-1 md:text-base news-font font-bold">The standard Lorem Ipsum passage</span>
                        <span className="text-xs p-1 md:text-sm">Samsung humour, or randomised words which don't look even slightly
                            believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there
                            isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum</span>
                    </div>

                </div>


            </div>
        </>
    )
}

export default Articles