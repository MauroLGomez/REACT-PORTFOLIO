import React from "react";




const Projects = () => {
    return (
        <div id="projects" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
            <h1 className="text-4xl font-bold text-center text-[#001b5e]">Projects</h1>
            <p className="text-center py-12 text-2xl">
                These are all the projects that i have been working on!
            </p>
            <div className="grid sm:grid-cols-2 gap-12">
                <a className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-400 rounded-xl group hover:bg-gradient-to-r from-gray-200 to-[#001b5e]" href="https://github.com/MauroLGomez/qr-code-component">
                    <img src="https://i.imgur.com/CBWfpAn.png" title="Qr Code" className="rounded-xl group-hover:opacity-10"/>
                </a>

                <a className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-400 rounded-xl group hover:bg-gradient-to-r from-gray-200 to-[#001b5e]" href="https://github.com/MauroLGomez/Prototipo-Pagina-Web">
                    <img src="https://i.imgur.com/6jMqr7f.png" title="Landing Page" className="rounded-xl group-hover:opacity-10 w-full object-cover"/>
                </a>

                <a className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-400 rounded-xl group hover:bg-gradient-to-r from-gray-200 to-[#001b5e]" href="https://github.com/MauroLGomez/REACT-PORTFOLIO">
                    <img src="https://i.imgur.com/MhKKJO3.jpg" title="React Portfolio" className="rounded-xl group-hover:opacity-10"/>
                </a>
                
                <a className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-400 rounded-xl group hover:bg-gradient-to-r from-gray-200 to-[#001b5e]" href="https://github.com/MauroLGomez/calculadora">
                    <img src="https://i.imgur.com/huPdftA.png" title="Calculator React" className="rounded-xl group-hover:opacity-10"/>
                </a>
                
            </div>
        </div>
    );
}

export default Projects;