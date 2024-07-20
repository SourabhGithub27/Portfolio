// eslint-disable-next-line no-unused-vars
import React from "react";
// eslint-disable-next-line no-unused-vars
import Java from "../../public/java.png";
// eslint-disable-next-line no-unused-vars
import HTML from "../../public/HTML.png"
// eslint-disable-next-line no-unused-vars
import CSS from "../../public/CSS.png"
// eslint-disable-next-line no-unused-vars
import Javascript from "../../public/javascript.png"
// eslint-disable-next-line no-unused-vars
import TailwindCSS from "../../public/TailwindCSS.png"
// eslint-disable-next-line no-unused-vars
import MySQL from "../../public/MySQL.png"
// eslint-disable-next-line no-unused-vars
import react from "../../public/react.png";
// eslint-disable-next-line no-unused-vars
import python from "../../public/python.png";
// eslint-disable-next-line no-unused-vars
import php from "../../public/php.png";
function Experience() {
  // eslint-disable-next-line no-unused-vars
  const cardItem = [
    {
      id: 1,
      logo: Java,
      name: "Java",
    },
    {
      id: 2,
      logo: HTML,
      name: "HTML",
    },
    {
      id: 3,
      logo: CSS,
      name: "CSS",
    },
    {
      id: 4,
      logo: Javascript,
      name: "Javascript",
    },
    {
      id: 5,
      logo: TailwindCSS,
      name: "TailwindCSS",
    },
    {
      id: 6,
      logo: MySQL,
      name: "MySQL",
    },
    {
      id: 7,
      logo: react,
      name: "react",
    },
    {
      id: 8,
      logo: python,
      name: "python",
    },
    {
      id: 9,
      logo: php,
      name: "php",
    },
  ];
  return (
    <div name="Experience" className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16">
      <div>
        <h1 className="text-3xl font-bold mb-5">Experience</h1>
        <p className="">Ive experience on below technologies.</p>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-7 my-3">
          {cardItem.map(({ id, logo, name }) => (
            <div
              className="flex flex-col items-center justify-center  border-[2px] rounded-full md:w-[200px] md:h-[200px] shadow-md p-1 cursor-pointer hover:scale-110 duration-300"
              key={id}
            >
              <img
                src={logo}
                className="w-[150px]  rounded-full  "
                alt=""
              ></img>
              <div>
                <div>{name} </div>
              </div>
              
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Experience;
