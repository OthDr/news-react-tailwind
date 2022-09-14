import React from 'react'

const Articles = () => {
    return (
        <>
            <div className='w-full flex flex-col md:flex-row my-2 p-2 py-4 border-[1px]  border-slate-900/25'>

                <h1 className='w-fit h-fit mx-auto text-2xl font-bold text-center p-1 mb-4 text-amber-400 border-b-[3px] border-amber-400/80'> Category</h1>
                {/*Left Big Articles */}
                <div className='md:w-[60%] flex flex-col items-center'>

                    <div className="w-[75%] flex flex-col items-start p-2">

                        <h2><a className='news-font text-lg font-semibold py-1' href="/">Title adbs dapsum </a></h2>
                        <img className='w-full' alt='img' src="https://a57.foxnews.com/hp.foxnews.com/images/2022/09/1024/576/40f5291f04e19ced466df5d6823de1dd.jpg?tl=1&ve=1"></img>
                        <p className='news-font py-1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores reprehenderit mollitia ducimus delectus, et est placeat ratione impedit esse aliquam in voluptas iste hic, dicta optio dolorum laborum eligendi nam.</p>
                        <span className='text-sm font-semibold text-amber-500 border-l-4 border-amber-500 p-1'>amet co</span>

                    </div>
                </div>


                {/*Right Articles */}
                <div className="md:w-[40%] bg-gray-50 text-slate-900 shadow p-2" id="side_content">

                    <div className="flex flex-col items-start mb-2 m-1">
                        <span className="news-font font-bold">1914 translation by H. Rackham</span>
                        <span className="text-sm"> humour, or randomised words which don't look even slightly
                            believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there
                            isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators
                            on the I SSD</span>
                    </div>

                    <div className="flex justify-around my-4">
                        <span className="nav w-full border-b border-amber-400/50 border-solid mx-3"></span>
                    </div>

                    <div className="flex flex-col items-start  m-1">
                        <span className="news-font font-bold">The standard Lorem Ipsum passage</span>
                        <span className="text-sm">Samsung humour, or randomised words which don't look even slightly
                            believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there
                            isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum</span>
                    </div>

                    <div className="flex justify-around my-4">
                        <span className="nav w-full border-b border-amber-400/50 border-solid mx-3"></span>
                    </div>

                    <div className="flex flex-col items-start  m-1">
                        <span className="news-font font-bold">The standard Lorem Ipsum passage</span>
                        <span className="text-sm">Samsung humour, or randomised words which don't look even slightly
                            believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there
                            isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum</span>
                    </div>

                </div>


            </div>
        </>
    )
}

export default Articles