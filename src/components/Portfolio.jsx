// eslint-disable-next-line no-unused-vars
import React from "react";
// eslint-disable-next-line no-unused-vars
import Java from "../../public/java.png";
// eslint-disable-next-line no-unused-vars
import react from "../../public/react.png";
// eslint-disable-next-line no-unused-vars
import python from "../../public/python.png";
// eslint-disable-next-line no-unused-vars
import php from "../../public/php.png";
function Portfolio() {
  // eslint-disable-next-line no-unused-vars
  const cardItem = [
    {
      id: 1,
      logo: Java,
      name: "Java",
      sourceLink:"https://github.com/SourabhGithub27/E_CommerceApplication",
    },
    {
      id: 2,
      logo: react,
      name: "react",
      sourceLink:"https://github.com/SourabhGithub27/Todo_App",
    },
    {
      id: 3,
      logo: php,
      name: "php",
      sourceLink:"https://github.com/SourabhGithub27/Construction_Management_System",
    },
    {
      id: 4,
      logo: python,
      name: "python",
      sourceLink:"https://github.com/SourabhGithub27/coronavirus_prediction_using_machine_learning",
    },
  ];
  return (
    <div name="Portfolio" className="max-w-screen-2xl container mx-auto px-4 md:px-20">
      <div>
        <h1 className="text-3xl font-bold mb-5">Portfolio</h1>
        <span className="underline font-semibold">Featured Projects</span>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-3 my-5">
          
          {cardItem.map(({ id, logo, name, sourceLink }) => (
            <div
              className="md:w-[300px] md:h-[250px] border-[2px] rounded-lg p-1 cursor-pointer hover:scale-110 duration-300"
              key={id}
            >
              <img
                src={logo}
                className="w-[120px] h-[120px] p-1 rounded-full border-[2px] "
                alt=""
              ></img>
              <div>
                <div className=" px-2 font-bold text-xl mb-2 ">{name} </div>
              </div>
              
              <div className="justify-around px-6 py-4">
              
                <a href={sourceLink} target="_blank">
                  <button className="bg-green-500 hover:bg-green-700 text-white font-bold rounded-xl px-4 py-2 ">
                  Source Code
                  
                  </button>
                  </a>
                
                  </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
