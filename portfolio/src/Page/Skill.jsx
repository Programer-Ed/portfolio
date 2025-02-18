// function Skills() {
//     return ( 
//         <>
//         <h1>Professional Skills</h1>
        
//         </>
//      );
// }

// export default Skills;

import React from "react";

// Icons data array
const icons = [
  { src: "/icons/html.png", alt: "HTML", title: "HTML" },
  { src: "/icons/css.png", alt: "CSS", title: "CSS" },
  { src: "/icons/python.svg", alt: "Python", title: "Python" },
  { src: "/icons/js.svg", alt: "JavaScript", title: "JavaScript" },
  { src: "/icons/figma.svg", alt: "Figma", title: "Figma" },
  { src: "/icons/next-js.svg", alt: "Next.js", title: "Next.js" },
  { src: "/icons/react.png", alt: "React", title: "React" },
  { src: "/icons/tailwind.svg", alt: "Tailwind", title: "Tailwind" },
  { src: "/icons/ts.svg", alt: "TypeScript", title: "TypeScript" },
//   { src: "/icons/wordpress.svg", alt: "WordPress", title: "WordPress" },
  { src: "/icons/flask.svg", alt: "Flask", title: "Flask" },
  { src: "/icons/mysql.svg", alt: "mySQL", title: "mySQL" },
  { src: "/icons/postgress.svg", alt: "Postgress", title: "Postgress" },
//   { src: "/icons/django.svg", alt: "Django", title: "Django" },
//   { src: "/icons/fastapi.svg", alt: "FastApi", title: "FastApi" },
//   { src: "/icons/php.svg", alt: "PHP", title: "PHP" },
//   { src: "/icons/laravel.svg", alt: "Laravel", title: "Laravel" }
];

const IconCard = ({ src, alt, title }) => {
  return (
    <div className="relative group block p-2 h-full w-full">
      <div className="group relative z-20 rounded-2xl h-full w-full p-4 overflow-hidden bg-black border border-transparent dark:border-white/[0.2] group-hover:border-slate-700 group-hover:border-4">

        <div className="relative">
          <img
            alt={alt}
            loading="lazy"
            width="50"
            height="50"
            decoding="async"
            className="object-contain rounded-2xl h-20 md:h-28 w-full"
            src={src}
          />
          <div className="p-4">
            <h3 className="mt-8 text-slate-200 tracking-wide text-base uppercase text-center font-bold">
              {title}
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};


const IconGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-10">
      {icons.map((icon) => (
        <IconCard key={icon.title} src={icon.src} alt={icon.alt} title={icon.title} />
      ))}
    </div>
  );
};

// Skills component
const Skills = () => {
  return (
    <section id="skills">
      <h1 className="text-3xl text-center font-bold my-8">Professional Skills</h1>
      <IconGrid />
    </section>
  );
};

export default Skills;
