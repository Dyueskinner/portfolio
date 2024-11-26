import { TypeAnimation } from 'react-type-animation'

const Home = () => {
    return (
        <>
            <div className="bg-[#242424] font-josefin">
                <div className='sm:text-center lg:text-left'>
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
            </div>
        </>
    )
}

export default Home;