import { TypeAnimation } from 'react-type-animation'
import SamplePicture from '../assets/sample_image.jpg';

const Home = () => {
    return (
        <>
        {/* cta text  */}
            <div className="flex justify-between items-center bg-[#242424] font-josefin p-56">
                <div className='sm:text-center lg:text-left ms-16'>
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

                </div>

                {/* cta img & icons  */}
                <div className="hidden lg:block">
                    <img src={ SamplePicture} alt="sample" className='h-[450px] w-[450px] rounded-full me-16 border-solid border-[#FFAE00] border-4' />
                </div>
            </div>
        </>
    )
}

export default Home;