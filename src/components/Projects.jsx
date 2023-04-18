import React from "react";
import Projectitem from "./Projectitem";
import calculatorReact from "./../../assets/calculatorReact.png";
import landingPage from "./../../assets/landingPage.png";
import portfolioReact from "./../../assets/portfolioReact.jpg";
import qrCode from "./../../assets/qrCode.png";



const Projects = () => {
    return (
        <div id="projects" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
            <h1 className="text-4xl font-bold text-center text-[#001b5e]">Projects</h1>
            <p className="text-center py-12 text-2xl">
                These are all the projects that i have been working on!
            </p>
            <div className="grid sm:grid-cols-2 gap-12">
                <Projectitem src="./../../assets/calculatorReact.png" title="React Calculator"
                href="https://github.com/MauroLGomez/calculadora"/>
                <Projectitem img={landingPage} title="Landing Page"
                href="https://github.com/MauroLGomez/Prototipo-Pagina-Web/"/>
                <Projectitem img={portfolioReact} title="Portfolio React"
                href="https://github.com/MauroLGomez/REACT-PORTFOLIO"/>
                <Projectitem img={qrCode} title="Qr Code"
                href="https://github.com/MauroLGomez/qr-code-component"/>
            </div>
        </div>
    );
}

export default Projects;