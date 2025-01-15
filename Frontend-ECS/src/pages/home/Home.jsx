import React from 'react';
import Gallery from './Gallery';
import Message from './Message';
import AboutUs from './AboutUs';
import Annual from './Annual';
import ParticlesComponent from '../Particle/Particle';

export default function Home() {
    return (
        <div className="mx-auto w-full space-y-10 overflow-x-hidden">
            <ParticlesComponent id='particlejs' />
            <div  className='absolute w-full   top-1/3'>
                    <h2 className="text-white  flex justify-center items-center text-4xl font-bold sm:text-5xl pl-6">
                        Electronics and Communication Society
                    </h2>
                </div>
                <div className="pc:h-[80vh] mobile:h-[60vh]" ></div>
            <Message/>
            <AboutUs/>
            <Annual/>
            <Gallery/>
        </div>
        
    );
    
}