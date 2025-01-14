import React from 'react';
import Gallery from './Gallery';
import Message from './Message';
import AboutUs from './AboutUs';
import Annual from './Annual';
import Spline from '@splinetool/react-spline';

export default function Home() {
    return (
        <div className="mx-auto w-full space-y-10 overflow-x-hidden">

            <div className='3d flex justify-center items-center relative '>
                <Spline scene="https://prod.spline.design/DZKI2wXU4Oob3ycH/scene.splinecode" />
               
                    <h2 className="absolute flex justify-center items-center text-white text-4xl font-bold sm:text-5xl">
                        Electronics and Communication Society
                    </h2>
                
            </div>

            <div className="cover bg-black flex h-[55px] w-[150px] absolute right-[20px] top-[675px] mobile:right-[10px] mobile:top-[165px]">
            </div>

          
            <Message/>
            <AboutUs/>
            <Annual/>
            <Gallery/>
        </div>
    );
}
