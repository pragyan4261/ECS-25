import React from 'react';
import Gallery from './Gallery';


export default function Home() {
    return (
        <div className="mx-auto w-full max-w-7xl space-y-10">
            <aside className="main border-2 border-red-500 h-[89vh] bg-[url('https://i.postimg.cc/QCWYndrJ/bgImage.png')] bg-cover bg-center bg-no-repeat flex justify-center items-center text-center">
                <div>
                    <h2 className="text-white text-4xl font-bold sm:text-5xl">
                        Electronics and Communication Society
                    </h2>
                </div>
            </aside>

        
            <div className="about border-2 border-red-500 p-5 text-center h-[60vh] space-y-6">
                <div className="aboutImg flex justify-center items-center">
                    <img src="https://i.postimg.cc/7ZpR078Y/Group-48096073.png" alt="" />
                </div>
                
                <div className="flex justify-between space-x-6">
                    <div className="content border-2 border-red-500 p-4 h-40 w-1/2 flex items-center justify-center">
                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est libero sint nobis sed deleniti aliquid nostrum doloribus error, repellat eum esse officiis magnam cum, consectetur ullam. Qui corrupti, aliquam a similique modi adipisci sapiente eius. Ducimus ipsum fuga labore ut.
                        </p>
                    </div>

                    <div className="image border-2 border-red-500 p-4 h-40 w-1/2 flex items-center justify-center">
                        <img src="#" alt="" />
                    </div>
                </div>
            </div>

            <div className="message border-2 border-red-500 p-5 text-center h-[60vh] space-y-6">
                <div className="msgImg flex justify-center items-center">
                    <img src="https://i.postimg.cc/hGJ1bPRD/Group-15.png" alt="" />
                </div>
                
                <div className="flex justify-between space-x-6">
                    <div className="image border-2 border-red-500 p-4 h-40 w-1/2 flex items-center justify-center">
                        <img src="#" alt="" />
                    </div>

                    <div className="content border-2 border-red-500 p-4 h-40 w-1/2 flex items-center justify-center">
                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est libero sint nobis sed deleniti aliquid nostrum doloribus error, repellat eum esse officiis magnam cum, consectetur ullam. Qui corrupti, aliquam a similique modi adipisci sapiente eius. Ducimus ipsum fuga labore ut.
                        </p>
                    </div>

                </div>
            </div>
            <Gallery/>
        </div>
        
    );
    
}