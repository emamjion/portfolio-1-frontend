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
        }
    ]
}


// Education data
const education = {
    icon: '/assets/resume/cap.svg',
    title: 'My education',
    description: 'Complemented by certifications in web development from Phitron and Programming Hero, with a focus on frontend, full-stack, and next-level skills, alongside ongoing studies in Computer Science and Engineering.',
    items: [
        {
            institution: 'Phitron',
            degree: 'CS Fundamentals With Phitron',
            duration: 'spring 2024'
        },
        {
            institution: 'Programming Hero',
            degree: 'Next Level Web Development Course',
            duration: '2023 - 2024'
        },
        {
            institution: 'Programming Hero',
            degree: 'Complete Web Development Course',
            duration: '2022 - 2023'
        },
        {
            institution: 'University of Liberal Arts Bangladesh(ULAB)',
            degree: 'Computer Science and Engineering(CSE)',
            duration: '2019 - present'
        },    
        {
            institution: 'Programming Hero',
            degree: 'L2 Web Development - Frontend Track',
            duration: '2024 - present'
        },    
        {
            institution: 'Programming Hero',
            degree: 'L2 Web Development - Full-Stack Track',
            duration: '2024 - present'
        },    
    ]
}

// skills data
const skills = {
    title: 'My skills',
    description: ' I craft innovative, user-friendly solutions with expertise in React, Next.js, Bootstrap, Node.js, Express, and MongoDB, driving business success with cutting-edge technology and passion.',
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

import { ScrollArea } from '@/components/ui/scroll-area';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
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
                            <TabsContent value='about' className='w-full text-center xl:text-left'>
                                <div className='flex flex-col gap-[30px] '>
                                    <h3 className='text-4xl font-semibold'>{about.title}</h3>
                                    <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>{about.description}</p>
                                    <ul className='grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0'>
                                        {
                                            about.info.map((item, index) => {
                                                return <li key={index} className='flex items-center justify-center xl:justify-start gap-4'>
                                                    <span className='text-white/60'>{item.fieldName}</span>
                                                    <span className='text-xl'>{item.fleldValue}</span>
                                                </li>
                                            })
                                        }
                                    </ul>
                                </div>
                                
                            </TabsContent>



                            {/* Skills */}
                            <TabsContent value='skills' className='w-full'>
                                <div className="flex flex-col gap-[30px]">
                                    <div className='flex flex-col gap-[30px] text-center lg:text-left'>
                                        <h3 className='text-4xl font-semibold'>{skills.title}</h3>
                                        <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>{skills.description}</p>
                                    </div>
                                    <ScrollArea className='h-[400px]'>
                                        <ul className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]'>
                                            {
                                                skills.skillList.map((skill, index) => {
                                                    return <li key={index}>
                                                        <TooltipProvider delayDuration={100}>
                                                            <Tooltip>
                                                                <TooltipTrigger className='w-full h-[150px] bg-[#232329] flex justify-center items-center rounded-xl group'>
                                                                    <div className='text-6xl group-hover:text-accent transition-all duration-300'>{skill.icon}</div>
                                                                </TooltipTrigger>
                                                                <TooltipContent>
                                                                    <p>{skill.name}</p>
                                                                </TooltipContent>
                                                            </Tooltip>
                                                        </TooltipProvider>
                                                    </li>
                                                })
                                            }
                                        </ul>
                                    </ScrollArea>
                                </div>
                            </TabsContent>



                            {/* Experience */}
                            <TabsContent value='experience' className='w-full'>
                                <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                                    <h3 className='text-4xl font-semibold'>{experience.title}</h3>
                                    <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>{experience.description}</p>
                                    <ScrollArea className='h-[400px]'>
                                        <ul className='grid grid-cols-1 lg:grid-cols-2 gap-[30px]'>
                                            {experience.items.map((item, index) => {
                                                return <li key={index} className='bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1'>
                                                    <span className='text-accent'>{item.duration}</span>
                                                    <h3 className='text-xl max-w-[260px] min-h-[60px] text-center lg:text-left'>{item.position}</h3>
                                                    <div className='flex items-center gap-3'>
                                                        {/* dot */}
                                                        <span className='size-[6px] rounded-full bg-accent'></span>
                                                        <p className='text-white/60'>{item.company}</p>
                                                    </div>
                                                </li>
                                            })}
                                        </ul>
                                    </ScrollArea>
                                </div>
                            </TabsContent>



                            {/* Education */}
                            <TabsContent value='education' className='w-full'>
                                <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                                    <h3 className='text-4xl font-semibold'>{education.title}</h3>
                                    <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>{education.description}</p>
                                    <ScrollArea className='h-[400px]'>
                                        <ul className='grid grid-cols-1 lg:grid-cols-2 gap-[30px]'>
                                            {education.items.map((item, index) => {
                                                return <li key={index} className='bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1'>
                                                    <span className='text-accent'>{item.duration}</span>
                                                    <h3 className='text-xl max-w-[260px] min-h-[60px] text-center lg:text-left'>{item.degree}</h3>
                                                    <div className='flex items-center gap-3'>
                                                        {/* dot */}
                                                        <span className='size-[6px] rounded-full bg-accent'></span>
                                                        <p className='text-white/60'>{item.institution}</p>
                                                    </div>
                                                </li>
                                            })}
                                        </ul>
                                    </ScrollArea>
                                </div>
                            </TabsContent>
                        </div>
                    </Tabs>
            </div>
        </motion.div>
    );
};

export default About;