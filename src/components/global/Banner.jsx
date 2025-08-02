import React from 'react'

const Banner = ({bannerText}) => {
    return (
        <>
        <div className='w-full bg-gradient-to-r from-blue-500 to-violet-500 text-white '>
            <div className='max-w-[1280px]  min-h-80 mx-auto  flex justify-center items-center relative overflow-hidden'>
                <h1 className='text-5xl font-semibold'>{bannerText}</h1>
                <img src="logo.png" alt="" className='opacity-15 w-104 absolute right-4' />
            </div>
        </div>
        </>
    )
}

export default Banner