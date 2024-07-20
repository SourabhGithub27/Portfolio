// eslint-disable-next-line no-unused-vars
import React from "react";
import { FaLinkedin } from "react-icons/fa6";
// eslint-disable-next-line no-unused-vars
import { SiTelegram } from "react-icons/si";

// eslint-disable-next-line no-unused-vars
import { IoLogoJavascript } from "react-icons/io5";
// eslint-disable-next-line no-unused-vars
import { FaReact } from "react-icons/fa6";

// eslint-disable-next-line no-unused-vars
import { ReactTyped} from "react-typed";
import pic from "../../public/pic.jpg"

function Home() {
  return (
    <>
      <div  name="Home" className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20 ">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 mt-12 md:mt-24 space-y-2 order-2 md:order-1">
            <span className="text-xl">Welcome In My Feed</span>
            <div className="flex space-x-1 text-2xl md:text-4xl">
              <h1> Hello, Im a</h1>
               {/* <span > Developer </span> */}
               <ReactTyped
                  className="text-red-700 font-bold"
                  strings={["Frontend Developer","Programmer"]}
                  typeSpeed={40}
                  backSpeed={50}
                  loop={true}
                  
                  
                   />
            </div>
            <br></br>
            <p className="text-sm md:text-md text-justify">
              A dynamic and passionate fresher developer with a solid foundation
              in web development technologies, including HTML, CSS, JavaScript,
              and React. Proficient in Python and experienced with backend
              frameworks such as FastAPI and MongoDB. Demonstrates strong
              problem-solving skills through hands-on projects, including a task
              tracker application, real-time weather web app, and a responsive
              single-page website. Adept at creating interactive and
              user-friendly applications. Eager to leverage these skills in a
              challenging development role to contribute to innovative projects
              and grow professionally.
            </p>
            <br></br>
            {/* social media icons */}
                <div className="flex flex-col items-center md:flex-row justify-between space-y-6 md:space-y-0">
                <div className="space-y-2">
                    <h1 className="font-bold">Available on</h1>
                    <ul className="flex space-x-5">
                        <li>
                        <a href="https://www.linkedin.com/in/sourabh-pradhan/" target="__blank">
                        <FaLinkedin className="text-2xl cursor-pointer hover:scale-105"/> </a> </li>
                        <li>
                        <a href="https://t.me/Souraaabh" target="__blank">
                        <SiTelegram className="text-2xl cursor-pointer hover:scale-105"/> </a></li>
                    </ul>
                    </div>
                    <div className="space-y-2">
                    <h1 className="font-bold">Currently working on</h1>
                    <div className="flex space-x-5">

                        <IoLogoJavascript className="text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]"/>
                        <FaReact          className="text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]" />
                        
                    </div>
                    </div>
                </div>
          </div>
          <div className="md:w-1/2 md:ml-48 md:mt-20 mt-8 order-1">
            <img src={pic} className="rounded-full md:w-[450px] md:h-[450px]"></img>
          </div>
          
        </div>
      </div>
      <hr></hr>
    </>
  );
}

export default Home;
