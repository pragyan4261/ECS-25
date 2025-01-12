import React from 'react';
import Gallery from './Gallery';
import Message from './Message';
import AboutUs from './AboutUs';
import Annual from './Annual';

export default function Home() {
    return (
        <div className="mx-auto w-full space-y-10 overflow-x-hidden">
            <aside className="main h-[89vh] bg-[url('https://i.postimg.cc/QCWYndrJ/bgImage.png')] bg-cover bg-center bg-no-repeat flex justify-center items-center text-center">
                <div>
                    <h2 className="text-white text-4xl font-bold sm:text-5xl">
                        Electronics and Communication Society
                    </h2>
                </div>
            </aside>
            <Message/>
            <AboutUs/>
            <Annual/>
            <Gallery/>
        </div>
        
    );
    
}