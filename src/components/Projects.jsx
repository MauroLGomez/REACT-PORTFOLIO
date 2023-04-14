import React from "react";
import Projectitem from "./Projectitem";
import calculatorReact from "../assets/calculatorReact.png";
import landingPage from "../assets/landingPage.png";
import portfolioReact from "../assets/portfolioReact.jpg";
import qrCode from "../assets/qrCode.png";



const Projects = () => {
    return (
        <div id="projects" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
            <h1 className="text-4xl font-bold text-center text-[#001b5e]">Projects</h1>
            <p className="text-center py-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem dicta suscipit ex aliquam consequatur eaque voluptates vel? Obcaecati architecto quasi veritatis, perspiciatis labore sit placeat quos consequatur? Aperiam, in explicabo!
            </p>
            <div className="grid sm:grid-cols-2 gap-12">
                <Projectitem />
                <Projectitem />
                <Projectitem />
                <Projectitem />
            </div>
        </div>
    );
}

export default Projects;