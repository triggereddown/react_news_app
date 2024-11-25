import React from 'react';

    const Navbar = ({setCategory}) => {
      return (
     <nav className="bg-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6  lg:px-8">

            <div className="flex justify-between h-16 ">
                <a href="#" className="text-lg font-sans py-3">News By Trigger</a>

            
                <div className="hidden md:flex space-x-4 items-center">
                    <a href="#" className="px-2 py-3 rounded-md text-xl font-medium text-white hover:text-red-500 " onClick={()=> {setCategory("technology")}}>Technology</a>
                    <a href="#" className="px-2 py-3 rounded-md text-xl font-medium text-white hover:text-green-700">Business</a>
                    <a href="#" className="px-2 py-3 rounded-md text-xl font-medium text-white hover:text-green-700">Sports</a>

                </div>
            </div>
        </div>
        
     </nav>
      );
    };
    
    export default Navbar;

