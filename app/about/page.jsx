"use client";

import { FaBootstrap, FaCss3, FaGit, FaGithub, FaHtml5, FaJs, FaNodeJs, FaReact, FaSass } from 'react-icons/fa';
import { RiNextjsFill } from "react-icons/ri";
import { SiExpress, SiMongodb, SiMongoose, SiRedux, SiTailwindcss, SiTypescript } from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";

// about data
const about = {
    title: 'About me',
    description: 'I am a MERN Stack web developer who loves making beautiful and functional websites. With a good eye for design and strong coding skills, I create projects that look great and work well. My portfolio shows various works, highlighting my commitment to quality and new ideas. Check out how I blend creativity and technical skills to deliver impressive web experiences.',
    info: [
        {
            fieldName: 'Name',
            fleldValue: 'Emam Khalid Jion'
        },
        {
            fieldName: 'Phone',
            fleldValue: '(+880) 1727 08 7717'
        },
        {
            fieldName: 'Experience',
            fleldValue: '1+ Years'
        },
        {
            fieldName: 'Skype',
            fleldValue: 'emamkhalidjion'
        },
        {
            fieldName: 'Nationality',
            fleldValue: 'Bangladeshi'
        },
        {
            fieldName: 'Email',
            fleldValue: 'emamjion@gmail.com'
        },
        {
            fieldName: 'Freelance',
            fleldValue: 'Not Available'
        },
        {
            fieldName: 'Language',
            fleldValue: 'Bengali, English'
        },
    ]
}

// Experience data
const experience = {
    icon: '/assets/resume/badge.svg',
    title: 'My experience',
    description: 'With a keen eye for design and robust coding skills, I excel in developing visually stunning and highly functional web applications. My portfolio highlights diverse projects that demonstrate my commitment to quality and innovation.',
    items: [
        {
            company: 'bdCalling IT Ltd.',
            position: 'Frontend Designer',
            duration: '02/2024 - 05/2024'
        },
        {
            company: 'bdCalling IT Ltd.',
            position: 'Frontend Designer',
            duration: '02/2024 - 05/2024'
        },
        {
            company: 'bdCalling IT Ltd.',
            position: 'Frontend Designer',
            duration: '02/2024 - 05/2024'
        },
    ]
}


// Education data
const education = {
    icon: '/assets/resume/cap.svg',
    title: 'My education',
    description: 'With a keen eye for design and robust coding skills, I excel in developing visually stunning and highly functional web applications. My portfolio highlights diverse projects that demonstrate my commitment to quality and innovation.',
    items: [
        {
            Institution: 'Phitron',
            degree: 'CS Fundamentals With Phitronf',
            duration: 'spring 2024'
        },
        {
            Institution: 'Programming Hero',
            degree: 'Next Level Web Development Course',
            duration: '2023 - 2024'
        },
        {
            Institution: 'Programming Hero',
            degree: 'Complete Web Development Course',
            duration: '2022 - 2023'
        },
        {
            Institution: 'University of Liberal Arts Bangladesh(ULAB)',
            degree: 'Computer Science and Engineering(CSE)',
            duration: '2019 - present'
        },    
    ]
}

// skills data
const skills = {
    title: 'My skills',
    description: 'With a keen eye for design and robust coding skills, I excel in developing visually stunning and highly functional web applications. My portfolio highlights diverse projects that demonstrate my commitment to quality and innovation.',
    skillList : [
        {
            icon: <FaHtml5/>,
            name : 'HTML5'
        },
        {
            icon: <FaCss3/>,
            name : 'CSS3'
        },
        {
            icon: <FaJs/>,
            name : 'JavaScript'
        },
        {
            icon: <FaReact/>,
            name : 'React Js'
        },
        {
            icon: <SiMongodb/>,
            name : 'Mongodb'
        },
        {
            icon: <SiExpress/>,
            name : 'Express Js'
        },
        {
            icon: <FaNodeJs />,
            name : 'Node Js'
        },
        {
            icon: <SiTypescript/>,
            name : 'TypeScript'
        },
        {
            icon: <SiRedux/>,
            name : 'Redux'
        },
        {
            icon: <SiMongoose/>,
            name : 'Mongoose'
        },
        {
            icon: <RiNextjsFill/>,
            name : 'Next Js'
        },
        {
            icon: <FaBootstrap/>,
            name : 'Bootstrap'
        },
        {
            icon: <SiTailwindcss/>,
            name : 'Tailwind CSS'
        },
        {
            icon: <FaSass/>,
            name : 'SASS'
        },
        {
            icon: <FaGithub/>,
            name : 'GitHub'
        },
        {
            icon: <TbBrandFramerMotion/>,
            name : 'Framer Motion'
        },
        {
            icon: <FaGit/>,
            name : 'Git'
        },
    ]

}

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
// import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
// import { ScrollArea } from '@/components/ui/scroll-area';
import { motion } from 'framer-motion';


const About = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1,
                transition: {
                    delay: 2.4,
                    duration: 0.4,
                    ease: 'easeIn'
                }
             }}
            className='min-h-[80vh] flex items-center justify-center py-12 xl:py-0'
        >
            <div className="container mx-auto">
                    <Tabs defaultValue='about' className='flex flex-col xl:flex-row gap-[60px]'>
                        <TabsList className='flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6'>
                            <TabsTrigger value='about'>About me</TabsTrigger>
                            <TabsTrigger value='skills'>Skills</TabsTrigger>
                            <TabsTrigger value='experience'>Experience</TabsTrigger>
                            <TabsTrigger value='education'>Education</TabsTrigger>
                        </TabsList>


                        {/* Content */}
                        <div className='min-h-[70vh] w-full'>
                            {/* About me */}
                            <TabsContent value='about' className='w-full'>
                                about me
                            </TabsContent>
                        </div>
                    </Tabs>
            </div>
        </motion.div>
    );
};

export default About;