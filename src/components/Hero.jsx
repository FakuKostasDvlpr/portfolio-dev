import React from 'react'
import './HeroStyles.css'

const Hero = () => {
  return (
    <>
        <div id='card' className='mt-10 flex flex-col justify-center h-60 lg:w-[750px] w-full max-w-[780px] mx-auto bg-gray-500
                sm:w-[640px] max-sm:w-[440px]
        '>
            <div className='flex flex-col lg:w-[340px] mx-10 gap-5'>
                <div>
                    <img class="rounded-full object-contain object-center " width={70} src="/removebg.png" alt="me-avatar-icon"/>
                </div>
                <div>
                    <h1 className='text-pretty font-bold text-green-200 text-4xl'>Hola soy Facu!</h1>
                </div>
            </div>
        </div>

       
    </>
  )
}

export default Hero