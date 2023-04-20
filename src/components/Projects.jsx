import React from "react";




const Projects = () => {
    return (
        <div id="projects" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
            <h1 className="text-4xl font-bold text-center text-[#001b5e]">Projects</h1>
            <p className="text-center py-12 text-2xl">
                These are all the projects that i have been working on!
            </p>
            <div className="grid sm:grid-cols-2 gap-12">
                <a href="https://github.com/MauroLGomez/qr-code-component">
                    <img src="https://i.imgur.com/CBWfpAn.png" title="Qr Code"/>
                </a>

                <a href="https://github.com/MauroLGomez/Prototipo-Pagina-Web">
                    <img src="https://i.imgur.com/6jMqr7f.png" title="Landing Page"/>
                </a>

                <a href="https://github.com/MauroLGomez/REACT-PORTFOLIO">
                    <img src="https://i.imgur.com/MhKKJO3.jpg" title="React Portfolio"/>
                </a>
                
                <a href="https://github.com/MauroLGomez/calculadora">
                    <img src="https://i.imgur.com/huPdftA.png" title="Calculator React"/>
                </a>
                
            </div>
        </div>
    );
}

export default Projects;