import React from "react";
import Workitem from "./Workitem";

const data = [
    {
        year: "2022",
        title: "Front end developer",
        duration: "4 months",
        details: "I was part of a group of developers that created a startup which helped small business and ONGs to have their first landing page for free",
        company: "Gocode",
    }
]

const Work = () => {
    return (
        <div id="work" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
            <h1 className="text-4xl font-bold text-center text-[#001b5e]">
            Work
            </h1>
            {data.map((item, idx) => (
                <Workitem key={idx} 
                year={item.year} 
                title={item.title} 
                duration={item.duration} 
                details={item.details}
                company={item.company}/>
           ))}
        </div>
    )
}

export default Work;