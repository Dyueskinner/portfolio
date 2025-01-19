import ProjectCard from "../components/ProjectCard";

const Projects = () => {
    return (
        <>
        <section id="project">
            <div className="bg-[#242424] lg:pt-24">
                <h1 className="text-[#FFAE00] underline text-center text-[24px] mt-10">Projects</h1>
                <p className="text-white px-10 text-center text-lg">
                Below is a selection of projects I have developed, along with a few notable collaborations I've contributed to.</p>
            </div>
            <div className="flex justify-center">
                <ProjectCard />
            </div>
        </section>
        </>
    )
}

export default Projects;