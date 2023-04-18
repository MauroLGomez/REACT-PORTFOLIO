import React from "react";

const Projects = () => {
    return (
        <div id="projects" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
            <h1 className="text-4xl font-bold text-center text-[#001b5e]">Projects</h1>
            <p className="text-center py-12 text-2xl">
                These are all the projects that i have been working on!
            </p>
            <div className="grid sm:grid-cols-2 gap-12">
                <img src="./../../assets/calculatorReact" title="React Calculator"
                href="https://github.com/MauroLGomez/calculadora"/>
                <img src="./../../assets/landingPage.png" title="Landing Page"
                href="https://github.com/MauroLGomez/Prototipo-Pagina-Web/"/>
                <img src="./../../assets/portfolioReact.jpg" title="Portfolio React"
                href="https://github.com/MauroLGomez/REACT-PORTFOLIO"/>
                <img src="./../../assets/qrCode.png" title="Qr Code"
                href="https://github.com/MauroLGomez/qr-code-component"/>
            </div>
        </div>
    );
}

export default Projects;