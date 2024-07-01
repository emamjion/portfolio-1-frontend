"use client";
import { motion } from 'framer-motion';
import Link from 'next/link';

import WorkSliderBtn from '@/components/WorkSliderBtn';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import Image from 'next/image';
import { useState } from 'react';
import { BsGithub } from 'react-icons/bs';
import { FaEye, FaServer } from "react-icons/fa";
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';


// projects data
const projects = [
    {
        num: '01',
        category : 'fullstack',
        title: 'Blogger app',
        description: 'My blog website leverages Next.js for server-side rendering, Tailwind CSS for responsive design, and a backend powered by Express.js, Node.js, and MongoDB for robust data management.' ,
        stack : [
            {name : 'Next Js'},
            {name : 'MongoDB'},
            {name : 'Node Js'},
            {name : 'Express Js'},
            {name : 'Tailwind CSS'}       
        ],
        image: '/assets/work/p-2.png',
        live: '',
        githubClient: '',
        githubServer: ''
    },
    {
        num: '02',
        category : 'frontend',
        title: 'Computer Solution',
        description: 'My service-based website utilizes React.js for a dynamic user interface, Tailwind CSS for styling, and a backend with Express.js, Node.js, and MongoDB for efficient data handling and seamless service management.' ,
        stack : [
            {name : 'React Js'},
            {name : 'MongoDB'},
            {name : 'Node Js'},
            {name : 'Express Js'},
            {name : 'Tailwind CSS'}       
        ],
        image: '/assets/work/p-1.png',
        live: 'https://computer-solution-client.web.app/',
        githubClient: 'https://github.com/emamjion/computer-solution-client',
        githubServer: 'https://github.com/emamjion/computer-solution-server'
    },
    {
        num: '03',
        category : 'mernstack',
        title: 'Asetta Autos',
        description: 'My e-commerce website is built with React.js, Tailwind CSS, MongoDB, Express.js, Node.js, and integrates Stripe and SSLCommerz for secure and efficient payment processing and seamless transactions.' ,
        stack : [
            {name : 'React Js'},
            {name : 'MongoDB'},
            {name : 'Node Js'},
            {name : 'Express Js'},
            {name : 'Tailwind CSS'},       
            {name : 'Stripe payment gateway'},       
            {name : 'sslcommerz payment gateway'},       
        ],
        image: '/assets/work/p-3.png',
        live: 'https://asetta-autos-645ad.web.app/',
        githubClient: 'https://github.com/emamjion/asetta-autos-client',
        githubServer: 'https://github.com/emamjion/asetta-autos-server'
    },
]

const Projects = () => {
    
    const [project, setProject] = useState(projects[0]);
    const handleSlideChange = (swiper) => {
        // get current slide index
        const currentIndex = swiper.activeIndex
        // update project state based on current slide index
        setProject(projects[currentIndex]);
    }
    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: {
                delay: 2.4,
                duration: 0.4,
                ease: 'easeIn'
            } }}
            className='min-h-[80vh] flex flex-col justify-center py-12 xl:px-0'
        >
            <div className="container mx-auto">
                <div className='flex flex-col xl:flex-row xl:gap-[30px] '>
                    {/* text */}
                    <div className='w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none'>
                        <div className='flex flex-col gap-[30px] h-[50%]'>
                            {/* project num */}
                            <div className='text-8xl leading-none font-bold'>{project.num}</div>
                            {/* proejct category */}
                            <h2 className='text-[42px] font-semibold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize'>{project.category} project</h2>
                            
                            {/* project description */}
                            <p className='text-white/60'>{project.description}</p>
                            {/* stack */}
                            <ul className='flex gap-4 flex-wrap'>
                                {
                                    project.stack.map((item, index) => {
                                        return <li
                                            key={index}
                                            className='text-xl text-accent'

                                        >
                                            {item.name}
                                            {index !== project.stack.length - 1 && ','}
                                        </li>
                                    })
                                }
                            </ul>
                            {/* border */}
                            <div className='border border-white/20'></div>
                            {/* buttons */}
                            <div className='flex items-center gap-4'>
                                {/* live button */}
                                <Link href={project.live}>
                                    <TooltipProvider delayDuration={100}>
                                        <Tooltip>
                                            <TooltipTrigger className='w-[70px] h-[70px] rounded-full flex justify-center items-center bg-white/5 group'>
                                                <FaEye className='text-white text-3xl group-hover:text-accent' />
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                <p>Live project</p>
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                </Link>
                                {/* github client button */}
                                <Link href={project.githubClient}>
                                    <TooltipProvider delayDuration={100}>
                                        <Tooltip>
                                            <TooltipTrigger className='w-[70px] h-[70px] rounded-full flex justify-center items-center bg-white/5 group'>
                                                <BsGithub className='text-white text-3xl group-hover:text-accent' />
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                <p>GitHub client repository</p>
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                </Link>
                                {/* github server button */}
                                <Link href={project.githubServer}>
                                    <TooltipProvider delayDuration={100}>
                                        <Tooltip>
                                            <TooltipTrigger className='w-[70px] h-[70px] rounded-full flex justify-center items-center bg-white/5 group'>
                                                <FaServer  className='text-white text-3xl group-hover:text-accent' />
                                            </TooltipTrigger>
                                            <TooltipContent>
                                            <p>GitHub server repository</p>
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                </Link>
                            </div>
                        </div>
                    </div>
                    
                    
                    {/* slider */}
                    <div className='w-full xl:w-[50%]'>
                        <Swiper 
                            spaceBetween={30}
                            slidesPerView={1}
                            className='xl:h-[520px] mb-12'
                            onSlideChange={handleSlideChange}
                        >
                            {
                                projects.map((project, index) => {
                                    return (
                                        <SwiperSlide key={index} className='w-full'>
                                            <div className='h-[460px] relative group flex items-center justify-center bg-white/5'>
                                                {/* overlay */}
                                                <div className='absolute top-0 bottom-0 w-full h-full bg-black/10 z-10'></div>
                                                {/* Image */}
                                                <div className='w-full h-full'>
                                                    <Image
                                                        src={project.image}
                                                        fill
                                                        className='object-cover'
                                                        alt=''
                                                    />
                                                </div>
                                            </div>
                                    </SwiperSlide>
                                    );
                                })
                            }
                            {/* Slider buttons */}
                            <WorkSliderBtn
                                containerStyles='flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between
                                xl:w-max xl:justify-none'
                                btnStyles='text-accent text-[22px] transition-all bg-accent text-primary xl:text-accent xl:bg-white/5 w-[44px] h-[44px] flex items-center justify-center rounded-full'
                            />
                        </Swiper>
                    </div>
                </div>
            </div>
            
        </motion.section>
    );
};

export default Projects;