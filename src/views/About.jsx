import SamplePicture from '../assets/sample_image.jpg'

const About = () => {
    return (
        <>
            <div className="flex flex-col lg:flex-row justify-between items-center bg-[#1A1A1A] font-josefin w-full mx-auto pt-24 lg:ps-8">
                {/* About image */}
                <div className="lg:w-1/2 flex justify-center lg:justify-end pe-8 mt-6">
                    <img 
                        src={SamplePicture} 
                        alt="sample" 
                        className="border-solid border-[#FFAE00] border-4 lg:w-[500px] h-[350px] object-cover" 
                    />
                </div>
                
                {/* About me text */}
                <div className="lg:w-1/2 sm:text-center lg:text-left sm:px-0 ms-0 lg:ms-12 pe-8">
                    <p className="text-[#FFAE00] text-[24px] font-normal underline underline-offset-4">
                        About Me
                    </p>

                    <h1 className="text-white text-[50px] font-bold">
                        My Journey into
                    </h1>

                    <h1 className="text-[#FFAE00] text-[50px] font-bold">
                        Web Development
                    </h1>

                    <p className="text-white text-lg font-normal pe-40">
                        I am currently a second-year Web Programming student at the NSCC IT Campus. My journey into web development began with creating websites on WordPress, but I quickly decided to take my skills to the next level by enrolling in the Web Programming program.<br/><br/>
                        I have a strong interest in Front-End Development, Full-Stack Development, and UI/UX Design, and I’m excited to expand my knowledge in these areas. One of my key goals is to write clean, efficient, and reusable code that enhances the overall user experience on the web, making it as seamless and enjoyable as possible.
                    </p>
                </div>
            </div>
        </>
    );
}

export default About;
