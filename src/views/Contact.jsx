import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GithubIcon from '@mui/icons-material/GitHub'
import EmailIcon from '@mui/icons-material/Email';


const Contact = () => {
    return (
        <section id="contact">

            <div className="bg-[#1A1A1A]">
                <h1 className="text-[#FFAE00] text-[24px] underline text-center pt-10">Contact Me</h1>
                <p className="text-white px-12 text-center">Thank you for taking the time to take a look at my portfolio. If you would like to reach out I can be reached at:</p>
                <br />
                <p className="text-white text-center pb-10">
                    Dominique Yue-Skinner
                    <br />
                    <p>dyueskinner@gmail.com</p>
                    <p>782-446-7022</p>

                    {/* Links  */}
                    <div className=''>
                    <a className="text-[#FFAE00] hover:text-white pe-1" href="https://www.linkedin.com/in/dyueskinner"><LinkedInIcon /></a>
                    <a className="text-[#FFAE00] hover:text-white pe-1" href="https://www.github.com/dyueskinner"><GithubIcon /></a>
                    <a className="text-[#FFAE00] hover:text-white" href="mailto:dyueskinner@gmail.com"><EmailIcon /></a>
                    </div>
                </p>
            </div>

            
           
            
        </section>
    );
}

export default Contact;