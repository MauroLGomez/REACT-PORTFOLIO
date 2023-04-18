import React from "react";
import { GrGithub, GrLinkedin } from "react-icons/gr";
import { TypeAnimation } from "react-type-animation";

const Main = () => {
    return (
        <div id="main">
            <img className="w-full h-screen object-cover object-bottom" src="https://images.unsplash.com/photo-1678698611311-535d7d644c1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1138&q=80" alt="background" />
            <div className="w-full h-screen absolute
            top-0 left-0 bg-white/30">
            <div className="max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center">
                <h1 className="sm:text-5xl text-4xl font-bold text-black-800">I'm Mauro Gomez</h1>
                <h2 className="flex sm:text-3xl text-2xl pt-4 font-semibold text-black-800">I'm a        
                <TypeAnimation
      sequence={[
        "Code Enthusiast", // Types 'One'
        1000, // Waits 1s
        "Coder", // Deletes 'One' and types 'Two'
        2000, // Waits 2s
        "Front End Developer",
        5000
      ]}
      wrapper="span"
      cursor={true}
      repeat={Infinity}
      style={{ fontSize: '1em', display: 'inline-block', paddingLeft: "5px" }}
    />
                </h2>
                <div className="flex justify-between pt-6 max-w-[200px] w-auto">
                    <a href="https://www.linkedin.com/in/mauro-leandro-gomez/">
                        <GrLinkedin className="cursor-pointer" alt="LinkedIn" size={40}
                        />
                    </a>
                    <a href="https://github.com/MauroLGomez">
                        <GrGithub className="cursor-pointer" alt="Github" size={40}
                        />
                    </a>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Main;