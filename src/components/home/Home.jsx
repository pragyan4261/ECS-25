import React from 'react'
export default function Home() {
    return (
        <div>
        {/* First Section with Background Image */}
        <section 
          className="h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center" 
          style={{ backgroundImage: "url('../images/bgImage.png')" }}
        >
          <h1 className="text-4xl text-white font-bold">Welcome to My Website</h1>
        </section>
  
        {/* Scroll Down Section with Solid Color */}
        <section className="h-screen bg-blue-500 flex items-center justify-center">
          <h2 className="text-3xl text-white font-semibold">Scroll Down to See More</h2>
        </section>
  
        {/* Additional Section */}
        <section className="h-screen bg-gray-800 flex items-center justify-center">
          <h2 className="text-3xl text-white font-semibold">Another Section</h2>
        </section>
      </div>
    )
};