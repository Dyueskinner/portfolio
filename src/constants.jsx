import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GithubIcon from '@mui/icons-material/GitHub'
import Image from './assets/sample_image.jpg'

export const socialLinks = [
    {name: "LinkedIn", Icon: LinkedInIcon, link:"https://www.linkedin.com/in/dyueskinner",},
    {name: "Github", Icon: GithubIcon, link:"https://www.github.com/dyueskinner",}
]

export const techStack = [
    {id: "1", name: "HTML", url: "https://raw.githubusercontent.com/devicons/devicon/ca28c779441053191ff11710fe24a9e6c23690d6/icons/html5/html5-original.svg"},
    {id: "2", name: "CSS", url: "https://raw.githubusercontent.com/devicons/devicon/ca28c779441053191ff11710fe24a9e6c23690d6/icons/css3/css3-original.svg"},
    {id: "3", name: "JavaScript", url: "https://raw.githubusercontent.com/devicons/devicon/ca28c779441053191ff11710fe24a9e6c23690d6/icons/javascript/javascript-original.svg"},
    {id: "4", name: "Node.js", url: "https://raw.githubusercontent.com/devicons/devicon/ca28c779441053191ff11710fe24a9e6c23690d6/icons/nodejs/nodejs-original-wordmark.svg"},
    {id: "5", name: "React", url: "https://raw.githubusercontent.com/devicons/devicon/ca28c779441053191ff11710fe24a9e6c23690d6/icons/react/react-original.svg"},
    {id: "6", name: "Next.js", url: "https://raw.githubusercontent.com/devicons/devicon/ca28c779441053191ff11710fe24a9e6c23690d6/icons/nextjs/nextjs-original-wordmark.svg"},
    {id: "7", name: "MongoDB", url: "https://raw.githubusercontent.com/devicons/devicon/ca28c779441053191ff11710fe24a9e6c23690d6/icons/mongodb/mongodb-original-wordmark.svg"},
    {id: "8", name: "Figma", url: "https://raw.githubusercontent.com/devicons/devicon/ca28c779441053191ff11710fe24a9e6c23690d6/icons/figma/figma-original.svg"},
    {id: "9", name: "Bootstrap 5", url: "https://raw.githubusercontent.com/devicons/devicon/ca28c779441053191ff11710fe24a9e6c23690d6/icons/bootstrap/bootstrap-original.svg"},
    {id: "10", name: "Tailwind CSS", url: "https://raw.githubusercontent.com/devicons/devicon/ca28c779441053191ff11710fe24a9e6c23690d6/icons/tailwindcss/tailwindcss-original.svg"},
    {id: "11", name: "PHP", url: "https://raw.githubusercontent.com/devicons/devicon/ca28c779441053191ff11710fe24a9e6c23690d6/icons/php/php-original.svg"},
    {id: "12", name: "MySQL", url: "https://raw.githubusercontent.com/devicons/devicon/ca28c779441053191ff11710fe24a9e6c23690d6/icons/mysql/mysql-original-wordmark.svg"},
    {id: "13", name: "WordPress", url: "https://raw.githubusercontent.com/devicons/devicon/ca28c779441053191ff11710fe24a9e6c23690d6/icons/wordpress/wordpress-original.svg"},
    {id: "14", name: "C#", url: "https://raw.githubusercontent.com/devicons/devicon/ca28c779441053191ff11710fe24a9e6c23690d6/icons/csharp/csharp-original.svg"},
    {id: "15", name: ".NET", url: "https://raw.githubusercontent.com/devicons/devicon/ca28c779441053191ff11710fe24a9e6c23690d6/icons/dot-net/dot-net-plain-wordmark.svg"},
    {id: "16", name: "Git", url: "https://raw.githubusercontent.com/devicons/devicon/ca28c779441053191ff11710fe24a9e6c23690d6/icons/git/git-original.svg"},
    {id: "17", name: "GitHub", url: "https://raw.githubusercontent.com/devicons/devicon/ca28c779441053191ff11710fe24a9e6c23690d6/icons/github/github-original-wordmark.svg"},
]

export const projects = [
    //project card 1
    {
        id:"1", 
        image:Image,
        title:"Portfolio", 
        description:"My Portfolio was designed and developed by me using React and Tailwind CSS. I used Figma to design the layout and components. The website is hosted on Vercel.",
        techUsed:[
            "React",
            "Tailwind CSS",
            "Figma"
        ], 
        websitelink:"https://dyueskinner.vercel.app",
        sourceLink:"",
    },

    //project card 2
    {
        id:"2",
        image:"",
        title:"Test",
        description:"Test Description",
        techUsed:[],
        websitelink:"",
        sourceLink:"",
    },

    //project card 3
    {
        id:"3",
        image:"",
        title:"Test",
        description:"Test Description",
        techUsed:[],
        websitelink:"",
        sourceLink:"",
    },
]

// export const techUsed = [
//     {id:"1", name:"React"},
//     {id:"2", name:"Tailwind CSS"},
//     {id:"3", name:"Figma"},
//     {id:"4", name:"Vercel"},
//     {id:"5", name:"Node.js"},
//     {id:"6", name:"MongoDB"},
//     {id:"7", name:"Next.js"},
//     {id:"8", name:"Bootstrap 5"},
//     {id:"9", name:"PHP"},
//     {id:"10", name:"MySQL"},
//     {id:"11", name:"WordPress"},
//     {id:"12", name:"C#"},
//     {id:"13", name:".NET"},
//     {id:"14", name:"Git"},
//     {id:"15", name:"GitHub"},
    
// ]
