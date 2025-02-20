// function Navbar() {
//   return (
//     <>
//       <div className="w-full">
//         <div className="flex max-w-fit fixed top-10 inset-x-0 mx-auto border border-transparent dark:border-white/[0.2] rounded-full dark:bg-black bg-white shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] px-8 py-4 items-center justify-center space-x-4">
//           <a className="relative dark:text-neutral-50 items-center flex space-x-1 text-green-500 dark:hover:text-neutral-300 hover:text-green-700" href="#about">
//             <span className="block sm:hidden"></span>
//             <span className="text-sm !cursor-pointer">About</span>
//           </a>
//           <a className="relative dark:text-neutral-50 items-center flex space-x-1 text-blue-500 dark:hover:text-neutral-300 hover:text-blue-700" href="#skills">
//             <span className="block sm:hidden"></span>
//             <span className="text-sm !cursor-pointer">Skills</span>
//           </a>
//           {/* <a className="relative dark:text-neutral-50 items-center flex space-x-1 text-yellow-500 dark:hover:text-neutral-300 hover:text-yellow-700" href="#projects">
//             <span className="block sm:hidden"></span>
//             <span className="text-sm !cursor-pointer">Projects</span>
//           </a> */}
//           <a className="relative dark:text-neutral-50 items-center flex space-x-1 text-blue-500 dark:hover:text-neutral-300 hover:text-blue-700" href="#contact">
//             <span className="block sm:hidden"></span>
//             <span className="text-sm !cursor-pointer">Contact</span>
//           </a>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Navbar;

import { useState } from 'react';

function Navbar() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className="w-full">
        {/* Navbar container */}
        <div className="flex max-w-fit fixed top-10 inset-x-0 mx-auto border border-transparent dark:border-white/[0.2] rounded-full dark:bg-black bg-white shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] px-8 py-4 items-center justify-between md:space-x-4 md:px-10 sm:px-6">
          
          {/* Menu Links (Desktop) */}
          <div className="hidden md:flex space-x-4">
            <a className="text-sm text-green-500 hover:text-green-700 dark:text-neutral-50 dark:hover:text-neutral-300" href="#about">About</a>
            <a className="text-sm text-blue-500 hover:text-blue-700 dark:text-neutral-50 dark:hover:text-neutral-300" href="#skills">Skills</a>
            <a className="text-sm text-blue-500 hover:text-blue-700 dark:text-neutral-50 dark:hover:text-neutral-300" href="#contact">Contact</a>
          </div>

          {/* Hamburger Button (Mobile) */}
          <button
            className="md:hidden text-white"
            onClick={toggleMenu}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
        
        {/* Mobile Menu (When open) */}
        {isMenuOpen && (
          <div className="md:hidden bg-white dark:bg-black p-4 rounded-lg space-y-4">
            <a className="block text-sm text-green-500 hover:text-green-700 dark:text-neutral-50 dark:hover:text-neutral-300" href="#about">About</a>
            <a className="block text-sm text-blue-500 hover:text-blue-700 dark:text-neutral-50 dark:hover:text-neutral-300" href="#skills">Skills</a>
            <a className="block text-sm text-blue-500 hover:text-blue-700 dark:text-neutral-50 dark:hover:text-neutral-300" href="#contact">Contact</a>
          </div>
        )}
      </div>
    </>
  );
}

export default Navbar;
