// eslint-disable-next-line no-unused-vars
import React from "react";

function About() {
  return (
    <div name="About" className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16">
      <div>
        <h1 className="text-3xl font-bold mb-5">About</h1>
        <p>
          Hi there, Im Sourabh a passionate frontend developer with a strong
          foundation in web development. I specialize in creating responsive and
          interactive web applications using HTML, CSS,Tailwind CSS and
          JavaScript, with a keen focus on React.I transform ideas into
          interactive and responsive digital experiences.Im excited to bring my
          innovative mindset and technical expertise to a forward-thinking team,
          contributing to impactful projects while growing as a professional.
        </p>
        <br></br>
        <h1 className="text-green-500 font-semibold text-xl">Education</h1>
        <ul>
          <li className="font-bold">CV Raman Global University</li>
          <p className="text-sm">
            B.Tech in Computer Science and Information
            Technology,Bhubaneswar(2019-2023)
          </p>
          <li className="font-bold"> Intermediate(XII)</li>
          <p className="text-sm">KIIT H.S School,Bhubaneswar(2017-2019)</p>
          <li className="font-bold">Class 10th(X)</li>
          <p className="text-sm">Prabhuji E.M School,Sambalpur</p>
        </ul>
        <br></br>
        <br></br>
        <h1 className="text-green-500 font-semibold text-xl">
          Skills & Expertise
        </h1>
        <ul>
          <li className="font-bold">
            Programming languages:
            <span className="font-normal"> Java, HTML, CSS, JavaScript</span>
          </li>
          <li className="font-bold">
            Expertise:
            <span className="font-normal">
              {" "}
              React.js, Restful APIs, TailwindCSS, UI/UX
            </span>
          </li>
          <li className="font-bold">
            Databases:
            <span className="font-normal"> SQL,MySQL, Firebase, MongoDB </span>
          </li>
          <li className="font-bold">
            Version Control:<span className="font-normal"> Git,GitHub </span>
          </li>
          <li className="font-bold">
            TOOLS:
            <span className="font-normal">
              {" "}
              Eclipse, VS Code, Android Studio
            </span>
          </li>
        </ul>
        <br></br>
        <br></br>
        <h1 className="text-green-500 font-semibold text-xl">
          Work Experience
        </h1>
        <ul>
          <li className="font-bold underline">
            Fronted Developer Intern:CodeAlpha| Remote(April 2024-July 2024)
          </li>

          <span>
            Developed and maintained responsive web applications using HTML,
            CSS, JavaScript, and modern frontend frameworks such as React,
            collaborated with UX/UI designers to implement design specifications
            and ensure a seamless user experience.
          </span>
          <br></br>
          <br></br>
          <p>
            Optimized web applications for maximum speed and scalability,
            ensuring efficient performance across different browsers and
            utilized version control systems like Git to manage and track
            changes in codebase, collaborating with team members on feature
            branches and pull requests.
          </p>
          <br></br>
          <p>
            Integrated APIs and third-party services to enhance application
            functionality and deliver dynamic content debugged and resolved
            front-end issues, ensuring cross-browser compatibility and fixing
            layout inconsistencies,worked closely with backend developers to
            integrate front-end components with server-side logic, ensuring data
            integrity and seamless functionality.
          </p>
          <br></br>
          <p>
            Participated in Agile/Scrum development processes, attending daily
            stand-ups, sprint planning, and retrospectives to ensure timely
            delivery of features and conducted user testing and gathered
            feedback to iterate and improve web applications based on user
            experience and behavior analysis.
          </p>
        </ul>
        <br></br>
        <ul>
          <li className="font-bold underline">
            Full Stack Developer Trainee: JSpiders | Bhubaneswar(February
            2023-February 2024)
          </li>
          <p>
            Learned core java concepts understand fundamental of object-oriented
            programming in Java, including defining classes, invoking methods
            using class libraries, proficient in SQL query writing and
            optimization.
          </p>
          <br></br>
          <p>Experienced and in advance java concepts with hands on projects.</p>
          
        </ul>
      
        <br></br>
        <br></br>
        <h1 className="text-green-500 font-semibold text-xl">
          Achievements & Awards
        </h1>
        <ul>
          <li>Lead to team of 4 in Mobile Application Development Competition and Won 2nd Prize.</li>
        </ul>
      </div>
    </div>
  );
}

export default About;
