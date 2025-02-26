import { projects } from "../constants"
import PublicIcon from '@mui/icons-material/Public';
import GitHubIcon from '@mui/icons-material/GitHub';


const ProjectCard = () => {
    return (
        <div className="grid grid-cols-1 grid-rows-1 justify-center pt-5 lg:grid-cols-3 gap-10">
            {projects.map((project) => (
                <div 
                key={project.id}
                className="bg-[#1A1A1A] h-[600px] w-[400px] mb-5 rounded-lg text-center p-4">
                <p className="mb-3 font-bold text-lg text-[#FFAE00] underline">{project.title}</p>
                    <img 
                    className="rounded-lg mb-3 border border-[#FFAE00]"
                    src={project.image} 
                    alt={project.title}
                    />
                    <p className="text-white px-4">{project.description}</p>

                    <div className="pt-5 mb-1">
                        <p className="text-[#FFAE00] underline mb-2">Technology used:</p>
                    </div>

                    {/* technology used */}
                    <div className="flex justify-center gap-2 flex-wrap mb-2">
                       {project.techUsed.map((tech, index) => (
                        <span key={index} className="bg-black text-white rounded-lg p-1 px-3">{tech}</span>
                       ))}
                    </div>
               
                
                {/* button group */}
                <div className="flex justify-center pt-1 mt-1 gap-2">
                    <button className="flex border border-[#FFAE00] rounded-lg px-3 p-1 text-white hover:bg-[#FFAE00]">
                        
                        <a href={project.websiteLink}><PublicIcon /> Website</a>
                            </button>
                    <button className="flex border border-[#FFAE00] rounded-lg px-3 p-1 text-white hover:bg-[#FFAE00]">
                        <a href={project.sourceLink}><GitHubIcon /> Source</a>
                        </button>
                </div>
                </div>
            ))}
        </div>
    )
}

export default ProjectCard;