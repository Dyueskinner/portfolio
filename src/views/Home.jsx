import { TypeAnimation } from 'react-type-animation'
import SamplePicture from '../assets/sample_image.jpg';
import { socialLinks } from '../constants'
import { Fade } from 'react-awesome-reveal'

const Home = () => {
    return (
        <>
            <section id="home">
            <div className="flex text-center lg:items-center bg-[#242424] font-josefin w-full mx-auto pt-8 lg:pt-36 lg:ps-44 lg:pb-52 pe-12 pb-36">
                
                {/* cta text  */}
                <Fade 
                duration={1500}
                direction='left'
                >
                <div className=' sm:text-center lg:text-left px-6 sm:px-0 lg:ps-20 lg:pe-12 '>
                    <p className=" text-white text-[24px] font-normal">
                        Hey there,
                    </p>

                    <h1 className="text-white text-[45px] font-bold">
                        I am Dominique
                    </h1>

                    <h1 className="text-white text-[45px] font-bold">
                        Aspiring
                        <br/>
                        <TypeAnimation className='text-[#FFAE00] font-bold' 
                            sequence={[
                                ' Frontend Developer',
                                1000,
                                ' Fullstack Developer',
                                1000
                            ]}
                            wrapper='span'
                            speed={50}
                            repeat={Infinity}
                        />
                    </h1>

                    <p className="text-white text-2xl font-normal">
                        I am a second year Web Programming student at NSCC, <br/> focusing on building a career as a Frontend/Fullstack <br/>Developer.
                    </p>

                {/* buttons */}
                <div className='lg:flex lg:mt-6 pt-4'>

                    {/* project button  */}
                    <button className='rounded-full border-solid border-2 border-[#FFAE00] px-7 py-2 font-bold text-white mr-4 hover:bg-[#FFAE00]'>Projects</button>

                    {/* resume button  */}
                    <button className='rounded-full border-solid border-2 border-[#FFAE00] px-7 py-2 font-bold text-white hover:bg-[#FFAE00]'>Resume</button>
                </div>
            </div>
            </Fade>


            {/* cta img & icons  */}
            <Fade
            duration={1500}
            direction='right'
            >
            <div className='hidden lg:block ps-18 pe-18 xl:pe-60'>
                <img 
                    src={SamplePicture} 
                    alt="sample" 
                    className="rounded-full border-solid border-[#FFAE00] border-4 lg:w-[421px] aspect-square object-cover"
                />

                {/* social links  */}
                <div className='text-center mt-4'>
                    {socialLinks.map((icons, index) => (
                    <a href={icons.link} key={index}>
                            <icons.Icon sx={{ color: '#FFAE00', fontSize: 40}} className='hover:text-white mr-1' />
                        </a>
                    ))
                
                }      
                </div>
            </div>
            </Fade>
        </div>
            </section>
        </>
    )
}

export default Home;