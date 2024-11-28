import { TypeAnimation } from 'react-type-animation'
import SamplePicture from '../assets/sample_image.jpg';

const Home = () => {
    return (
        <>
            <div className="flex justify-between items-center bg-[#242424] font-josefin w-3/4 mx-auto pt-36 ps-8">
                
                {/* cta text  */}
                <div className=' sm:text-center lg:text-left px-4 sm:px-0'>
                    <p className=" text-white text-[24px] font-normal">
                        Hey there,
                    </p>

                    <h1 className="text-white text-[50px] font-bold">
                        I am Dominique
                    </h1>

                    <h1 className="text-white text-[50px] font-bold">
                        Aspiring
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
                        I am a second year Web Programming student at NSCC <br/> focusing on building a career as a Frontend/Fullstack <br/>Developer.
                    </p>

                {/* buttons */}
                <div className='mt-6 flex'>
                    
                    {/* project button  */}
                    <button className='rounded-full border-solid border-2 border-[#FFAE00] px-7 py-2 font-bold text-white mr-4 hover:bg-[#FFAE00]'>Projects</button>

                    {/* resume button  */}
                    <button className='rounded-full border-solid border-2 border-[#FFAE00] px-7 py-2 font-bold text-white hover:bg-[#FFAE00]'>Resume</button>
                </div>
            </div>


            {/* cta img & icons  */}
            <div className='hidden lg:block pe-36'>
                <img 
                    src={SamplePicture} 
                    alt="sample" 
                    className="rounded-full border-solid border-[#FFAE00] border-4 lg:w-[421px] aspect-square object-cover"
                />
            </div>
        </div>
            
        </>
    )
}

export default Home;