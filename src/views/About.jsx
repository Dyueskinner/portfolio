import SamplePicture from '../assets/sample_image.jpg'
import { techStack } from '../constants';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <>
        <section id="about">
            <div className="flex flex-col lg:flex-row justify-between items-center bg-[#1A1A1A] font-josefin w-full mx-auto xl:pt-24 lg:ps-8 xl:ps-72 ">
                {/* About image */}
                <div className="lg:w-1/2 flex flex-col justify-center lg:justify-end xl:pe-0 mt-6 ">
                    <img 
                        src={SamplePicture} 
                        alt="sample" 
                        className="border-solid border-[#FFAE00] border-4 lg:w-[500px] lg:h-[350px] xl:w-[500px] xl:h-[400px] object-cover" 
                    />
                </div>
                
                {/* About me text */}
                <div className="lg:w-full sm:text-center lg:text-left sm:px-0 ms-0 lg:ms-12 xl:pe-48 xl:ps-24">
                    <p className="text-[#FFAE00] text-[24px] font-normal underline underline-offset-4">
                        About Me
                    </p>

                    <h1 className="text-white text-[50px] font-bold">
                        My Journey into
                    </h1>

                    <h1 className="text-[#FFAE00] text-[50px] font-bold">
                        Web Development
                    </h1>

                    <p className="text-white text-lg font-normal xl:pe-40 xl:text-2xl">
                        I am currently a second-year Web Programming student at the NSCC IT Campus. My journey into web development began with creating websites on WordPress, but I quickly decided to take my skills to the next level by enrolling in the Web Programming program.<br/><br/>
                        I have a strong interest in Front-End Development, Full-Stack Development, and UI/UX Design, and I’m excited to expand my knowledge in these areas. One of my key goals is to write clean, efficient, and reusable code that enhances the overall user experience on the web, making it as seamless and enjoyable as possible.
                    </p>
                </div>
                
            </div>

    {/* tools and tech title  */}
        <div>
            <p className='text-[24px] xl:text-center text-[#FFAE00] underline underline-offset-4 font-josefin bg-[#1a1a1a]  pb-4 xl:pt-5'>
                Tools and Technologies 
            </p>
        </div>
    {/* tech stack links */}
    <div className='flex bg-[#1a1a1a] items-center justify-center '>
    <div className="grid grid-cols-3 sm:grid-cols-2 lg:grid-cols-3 gap-8 bg-[#1a1a1a] font-josefin  text-center">
        {techStack.map((tech) => (
            <motion.div 
            initial="hidden"
            whileInView={"visible"}
            variants={{
                visible: {
                    y: 0,
                    opacity: 1,
                    transition: {
                        type: "spring",
                    },
                },
                hidden: { opacity: 1, y:80}
            }}
            key={tech.id} 
            className="flex justify-center text-3xl items-center w-[450px] h-20 rounded-[15px]  gap-3 bg-[#242424]">
            <img
              src={tech.url}
              alt={tech.name}
              className="w-9 h-9 object-contain"
              />
            <p className="text-white text-xl">{tech.name}</p>
          </motion.div>
            ))};
        </div>
        </div>
        </section>
        </>
    );
};

export default About;
