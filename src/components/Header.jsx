import React from 'react'
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const Header = () => {

    const settings = {
        dots: true,
        autoplay: true,
        lazyLoad: true,
        infinite: true,
        speed: 1500,
        autoplaySpeed: 4500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 1,
    };

    return (

        <div className='py-6 '>

            <Slider {...settings} className='w-[80%] sm:w-[70%] md:w-[60%] lg:w-[50%] mx-auto my-4 md:my-8'>

                <div className=' flex flex-col items-center'>
                    <h1 className='uppercase  news-font text-center p-2 pb-4 text-xl sm:text-2xl lg:text-3xl font-bold top-0 text-slate-600'>US Social security</h1>
                    <img className='w-[100%]' src="https://a57.foxnews.com/static.foxbusiness.com/foxbusiness.com/content/uploads/2022/05/192/108/social-security.jpg?tl=1&ve=1" alt="/" />
                </div>

                <div className=' flex flex-col items-center'>
                    <h1 className='uppercase news-font text-center p-2 pb-4 text-xl sm:text-2xl lg:text-3xl font-bold top-0 text-slate-600'>1914 translation by H. Rackham</h1>
                    <img className='w-[100%]' src="https://a57.foxnews.com/static.foxbusiness.com/foxbusiness.com/content/uploads/2022/07/576/324/powell-5.jpg?tl=1&ve=1" alt="/" />
                </div>

                <div className=' flex flex-col items-center'>
                    <h1 className='uppercase news-font text-center p-2 pb-4 text-xl sm:text-2xl lg:text-3xl font-bold top-0 text-slate-600'>Airlines Landing Article</h1>
                    <img className='w-[100%]' src="https://a57.foxnews.com/hp.foxbusiness.com/images/2022/07/281/158/3bfa998c063eecdd6660cc7dfe4d6559.jpg?tl=1&ve=1" alt="/" />
                </div>

            </Slider>

        </div>
    )
}

export default Header