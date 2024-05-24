import Reading from '../src/assets/images/reading.jpg'
import Writting from '../src/assets/images/writting.jpg'
import Gaming from '../src/assets/images/gaming.jpg'
import computer from '../src/assets/images/com.jpg'
import FrontEnd from '../src/assets/images/frontend.jpg'
import Code from '../src/assets/images/code.jpg'
import eddieProject from '../src/assets/images/eddieProject.png'
import ProjectImage2 from '../src/assets/images/project2.png'
import ProjectImage4 from '../src/assets/images/projectImage4.png'
import ProjectImage5 from '../src/assets/images/projectImage5.png'
// import ProjectCheck1  from '../src/assets/images/projectchek2.png'
import ProjectImage3  from '../src/assets/images/projectImage3.png'

export const data = [
    {
        id: 1,
        img: Writting,
        title: 'Writting',
        // info: 'Quisque feugiat malesuada molestie.'
    },

    {
        id: 2,
        img: Reading,
        title: 'Reading',
        // info: 'Quisque feugiat malesuada molestie.'
    },

    {
        id: 3,
        img: Gaming,
        title: 'Gaming',
        // info: 'Quisque feugiat malesuada molestie.'
    },
]

export const article = [
    {
        id:1,
        image: computer,
        heading: 'Getting Started with web-developments? - Things to do when stuck',
        info: 'In this article, I will provide tips to help you get started with web development.',
        addedInfo:'Web development refers to building, creating and maintaining of website, it includes aspects such as web design, web publishing, web programming and data management...',
        link: 'https://ikechukwupowel.hashnode.dev/getting-started-with-web-developments-things-to-do-when-stuck'
    },
    {
        id:1,
        image: computer,
        heading: 'Factors to consider when replicating designs',
        info: 'This article explains factors to consider when replicating UI/UX designs',
        addedInfo:'Many front-end developers endlessly make blunders that they do not analyze strategies before replicating designs. Because of this, web developers usually get stuck and frustrated along the line. These article provide proven guidelines to replicate good designs',
        link: 'https://ikechukwupowel.hashnode.dev/factors-to-consider-when-replicating-designs'
    },
]

export const experiece = [
    {
        id:1,
        date: 'May 2022 - July 2023',
        title: 'Next Js',
        image: FrontEnd,
        info: 'Worked as a junior software engineer at Jobjo,worked with a group of team to design Job Board project'
    },

    {
        id:2,
        date: 'September 2023 - April 2024',
        title: 'React',
        image: Code,
        info: 'Worked as a junior software engineer at Terabytes, also worked as a team to design an affiliate website'
    },
]

export const projectData = [
    {
        title:"Create-Listing_page",
        info: "A mock create-listing page for a job board, designed using Next.js",
        image: ProjectImage4,
        link: "https://kouma-git-poweldev-flow-powei55.vercel.app/create-listing-job",
        code: "https://github.com/powei55/kouma/tree/powel_dev-flow"
    },
    {
        title:"Eddie Home-page",
        info: "In this project, I work with HTML and CSS and React to create a mock home page. The design is from devchallenge.io",
        image: eddieProject,
        link: "https://edie-homepage-react.netlify.app",
        code: "https://github.com/powei55/Edie-homepage"
    },
    {
        title:"Create-Profile_page",
        info: "A mock create-Profile page for a job board, designed using Next.js",
        image: ProjectImage5,
        link: "https://kouma-git-poweldev-flow-powei55.vercel.app/create-profile",
        code: "https://github.com/powei55/kouma/tree/powel_dev-flow"
    },
    {
        title:"My-Gallery",
        info: "In this project, I work with HTML and CSS and React  to create a responsive page.The design is from devchallenge.io",
        image: ProjectImage2,
        link: "https://my-gallery-master-page.netlify.app",
        code: "https://github.com/powei55/my-gallery-master-tailwind"
    },
    {
        title:"Check Out",
        info: "In this project, I work with HTML and CSS and React to create a responsive page. This page is similiar with a page. The design is from devchallenge.io",
        image: ProjectImage3,
        link: "https://general-page.netlify.app",
        code: "https://github.com/powei55/interior-consultant-master"
    },

   
]