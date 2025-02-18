function Navbar() {
  return (
    <>
      <div className="w-full">
        <div className="flex max-w-fit fixed top-10 inset-x-0 mx-auto border border-transparent dark:border-white/[0.2] rounded-full dark:bg-black bg-white shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] px-8 py-4 items-center justify-center space-x-4">
          <a className="relative dark:text-neutral-50 items-center flex space-x-1 text-green-500 dark:hover:text-neutral-300 hover:text-green-700" href="#about">
            <span className="block sm:hidden"></span>
            <span className="text-sm !cursor-pointer">About</span>
          </a>
          <a className="relative dark:text-neutral-50 items-center flex space-x-1 text-blue-500 dark:hover:text-neutral-300 hover:text-blue-700" href="#skills">
            <span className="block sm:hidden"></span>
            <span className="text-sm !cursor-pointer">Skills</span>
          </a>
          <a className="relative dark:text-neutral-50 items-center flex space-x-1 text-yellow-500 dark:hover:text-neutral-300 hover:text-yellow-700" href="#projects">
            <span className="block sm:hidden"></span>
            <span className="text-sm !cursor-pointer">Projects</span>
          </a>
          <a className="relative dark:text-neutral-50 items-center flex space-x-1 text-blue-500 dark:hover:text-neutral-300 hover:text-blue-700" href="#contact">
            <span className="block sm:hidden"></span>
            <span className="text-sm !cursor-pointer">Contact</span>
          </a>
        </div>
      </div>
    </>
  );
}

export default Navbar;