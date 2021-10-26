import React from 'react'
import DarkThemeToggle from './DarkThemeToggle';
const Navbar = () => {

    return (
        <div class="w-screen flex justify-between bg-white dark:bg-gray-800 dark:text-white p-4
         filter drop-shadow-s transition-all duration-500 fixed border-b-2 dark:border-gray-800">
            
            <p class="text-2xl mr-4 font-semibold">Pexelgram</p>
           
           <DarkThemeToggle  class= "float-right mr-10"/>
            
        </div>
    )
}

export default Navbar;