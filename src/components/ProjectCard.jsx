import { projects } from "../constants"



const ProjectCard = () => {
    return (
        <div className="grid grid-cols-1 grid-rows-1 justify-center ps-12 pt-5">
            {projects.map((project) => (
                <div 
                key={project.id}
                className="bg-[#1A1A1A] h-[460px] w-[400px] mb-5 rounded-lg text-center p-4"
                >
                    <img 
                    className="rounded-lg"
                    src={project.image} 
                    alt={project.title}
                    />
                    <p className="pt-3 text-lg text-white underline">{project.title}</p>
                    <p className="text-white">{project.description}</p>

                    <div className="pt-5 mb-1">
                        <p className="text-white">Technology used:</p>
                    </div>
                    
                    <div className="flex justify-center gap-2 flex-wrap">
                       {project.techUsed.map((tech, index) => (
                        <span key={index} className="bg-black text-white rounded-lg p-1 px-3">{tech}</span>
                       ))}
                    </div>
               
                
                {/* button group */}
                <div className="flex justify-center pt-1 mt-1">
                    <button className="flex border border-[#FFAE00] rounded-lg px-3 p-1 text-white hover:bg-[#FFAE00] me-2">
                        <img className="me-1" src="" alt="" />
                        <a href={project.link}>Website</a>
                            </button>
                    <button className="flex border border-[#FFAE00] rounded-lg px-3 p-1 text-white hover:bg-[#FFAE00]">Source</button>
                </div>
                </div>
            ))}
        </div>
    )
}

export default ProjectCard;