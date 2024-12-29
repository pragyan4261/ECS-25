import React from 'react';

function Profile() {
    return (
        <div className="flex h-screen">

            <div className="w-1/2 border-2 flex flex-col items-center justify-center text-white text-2xl">
                
                <div className="image bg-gray-500 w-full h-1/4 flex items-center justify-center">
                    Image
                </div>

                
                <div className="details flex flex-col justify-evenly h-3/4 w-full">
                    <div className="fullname border-2 text-center">Full Name</div>
                    <div className="scholar_id border-2 text-center">Scholar ID</div>
                    <div className="username border-2 text-center">Username</div>
                    <div className="email border-2 text-center">Email</div>
                </div>
            </div>



            <div className="w-1/2 border-2 flex items-center justify-center text-white text-2xl">
                Events 
                testing github kyuki humko ata nhi achhe se
                Github se laude na lag jae isliye testing 
                arre nhi lagega re, seekh gye apan
                 mei toh atak gaya
                okok
                okok
            </div>
        </div>
    );
}

export default Profile;
