import { projects } from "../constants"

const ProjectCard = () => {
    return (
        <div className="grid grid-cols-1 grid-rows-1 justify-center ps-12 pt-5">
            {projects.map((project) => (
                <div 
                key={project.id}
                className="bg-[#1A1A1A] h-[450px] w-[400px] mb-5 rounded-lg text-center p-4"
                >
                    <img 
                    className="rounded-lg"
                    src={project.image} 
                    alt={project.title}
                    />
                    <p className="pt-3 text-lg text-white underline">{project.title}</p>
                    <p className="text-white">{project.description}</p>
                <div className="flex justify-start mt-20 ps-2">
                    <button className="border border-[#FFAE00] rounded-xl p-1 px-3 text-white hover:bg-[#FFAE00] me-2"><a href={project.link}>Website</a></button>
                    <button className="border border-[#FFAE00] rounded-xl p-1 px-3 text-white hover:bg-[#FFAE00]">Source</button>
                </div>
                </div>
            ))}
        </div>
    )
}

export default ProjectCard;