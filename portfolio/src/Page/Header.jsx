// function Header() {
//   return (
//     <div className="header">
//           <header className="text-center py-20">
//       <p className="text-xs font-bold pt-6">Passionate About Building Functional and Beautiful User Interfaces, Bridging Front-End Elegance with Back-End Power.</p>
//       <p className="mt-4 text-3xl text-center flex flex-col items-center">
//            <span className="text-4xl">Crafting Functional and Beautiful Interfaces,</span>
//            <span className="text-4xl mt-2">Engineering Seamless Experiences from Front to Back.</span>
//       </p>
//       <p className="font-bold pt-2">Hi 👋🏾,I'm Edwin, a Full-Stack developer based in Nairobi, Kenya.</p>
//     </header>
//     </div>

//   );
// }

// export default Header;

function Header() {
  return (
    <div className="header">
      <header className="text-center py-10 sm:py-20">
        <p className="text-xs font-bold pt-6 sm:text-sm md:text-base">
          Passionate About Building Functional and Beautiful User Interfaces, Bridging Front-End Elegance with Back-End Power.
        </p>
        <p className="mt-4 text-xl sm:text-2xl md:text-3xl text-center flex flex-col items-center">
          <span className="text-2xl sm:text-4xl">Crafting Functional and Beautiful Interfaces,</span>
          <span className="text-2xl sm:text-4xl mt-2">Engineering Seamless Experiences from Front to Back.</span>
        </p>
        <p className="font-bold pt-2 text-sm sm:text-base">Hi 👋🏾, I'm Edwin, a Full-Stack developer based in Nairobi, Kenya.</p>
      </header>
    </div>
  );
}

export default Header;
