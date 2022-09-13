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
        initialSlide: 1
    };

    return (

        <div className='py-4 '>

            <Slider {...settings} className='w-[100%] sm:w-[85%] md:w-[80] lg:w-[65%] bg-transparent mx-auto my-4 md:my-8'>

                <div className=' flex flex-col items-center'>
                    <h1 className='uppercase  news-font text-center p-2 text-xl sm:text-2xl lg:text-3xl font-bold top-0 text-slate-600'>Title1 of the picture</h1>
                    <img className='w-[100%]' src="https://img.huffingtonpost.com/asset/62f7a5b02300001a00a724e3.png?cache=DHQEQA2hF0&ops=1280_480&format=webp" alt="/" />
                </div>

                <div className=' flex flex-col items-center'>
                    <h1 className='uppercase news-font text-center p-2 text-xl sm:text-2xl lg:text-3xl font-bold top-0 text-slate-600'>Title1 of the picture</h1>
                    <img className='w-[100%]' src="https://img.huffingtonpost.com/asset/62f7a5b02300001a00a724e3.png?cache=DHQEQA2hF0&ops=1280_480&format=webp" alt="/" />
                </div>

            </Slider>

        </div>
    )
}

export default Header