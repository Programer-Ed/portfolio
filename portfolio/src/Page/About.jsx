// function About() {
//   return (
//     <div>
//        <section className="about py-20 px-5">
//       <h2 className="text-1xl text-center text-neutral-300">About Me</h2>
//       <p className="mt-4 text-lg text-center p-2">Bringing Simple, Understandable Code to Life for Seamless Experiences.</p>
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
//         <div className="p-4 border-x border-t rounded-lg">
//             <h2 className="text-base font-bold">Building End-to-End Solutions</h2>
//             <p className="text-sm text-gray-500">I help businesses overcome the challenge of poor user experiences by creating scalable, intuitive, and user-centered web applications that run seamlessly from front to back.</p>
//         </div>
//         <div className="p-4 border-x border-t rounded-lg">
//             <h2 className="text-base font-bold">Turning Complex into Simple, Effective Solutions</h2>
//             <p className="text-sm text-gray-500">By leveraging both frontend and backend technologies, I design and build functional user journeys that make digital products intuitive, impactful, and easy to navigate.</p>
//         </div>
//         <div className="p-4 border-x border-t rounded-lg">
//             <h2 className="text-base font-bold">Full-Stack Expertise for Seamless Integration</h2>
//             <p className="text-sm text-gray-500">With expertise in JavaScript, React, Vue, TypeScript, Flask, Python, and Django, I craft responsive, high-performance applications that ensure smooth interaction from the user interface to the server-side functionality.</p>
//         </div>
//         <div className="p-4 border-x border-t rounded-lg">
//             <h2 className="text-base font-bold">User-Centered Design</h2>
//             <p className="text-sm text-gray-500">Every project I undertake is driven by one goal: creating robust, scalable solutions that empower users and enable business growth.</p>
//         </div>
//         </div>
//     </section>
//     </div>
   
//   );
// }

// export default About;


function About() {
  return (
    <div className="about">
      <section id="about" className="about py-20 px-5">
        <h2 className="text-2xl font-bold text-center text-gray-50">About Me</h2>
        <p className="mt-4 text-lg text-center p-2">
          Bringing Simple, Understandable Code to Life for Seamless Experiences.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-6">
          {[
            {
              title: "Building End-to-End Solutions",
              content:
                "I help businesses overcome the challenge of poor user experiences by creating scalable, intuitive, and user-centered web applications that run seamlessly from front to back.",
            },
            {
              title: "Turning Complex into Simple, Effective Solutions",
              content:
                "By leveraging both frontend and backend technologies, I design and build functional user journeys that make digital products intuitive, impactful, and easy to navigate.",
            },
            {
              title: "Full-Stack Expertise for Seamless Integration",
              content:
                "With expertise in JavaScript, React, Vue, TypeScript, Flask, Python, and Django, I craft responsive, high-performance applications that ensure smooth interaction from the user interface to the server-side functionality.",
            },
            {
              title: "User-Centered Design",
              content:
                "Every project I undertake is driven by one goal: creating robust, scalable solutions that empower users and enable business growth.",
            },
          ].map((item, index) => (
            <div key={index} className="p-4 border-x border-t rounded-lg">
              <h3 className="text-base font-bold">{item.title}</h3>
              <p className="text-sm text-gray-500 mt-2">{item.content}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default About;