"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const BlogDetailsPage = ({ params }) => {

    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/blogs/${params.blogId}`)
        .then(res => res.json())
        .then(data => setBlogs(data))
    }, []);

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
        >
            <div className="container mx-auto">
                <div className='flex flex-col xl:flex-row gap-[30px]'>
                    {/* image part */}
                    <motion.div 
                        className='xl:w-[54%] order-2 xl:order-none'
                        initial={{opacity: 0, translateX: '-100px'}}
                        animate={{ opacity: 1, translateX: '0px', transition: {
                            delay: 2.4,
                            duration: 0.4,
                            ease: 'easeInOut'
                        } }}
                    >
                        <div>
                            <Image
                                src={blogs.image}
                                alt=''
                                width={600}
                                height={400}
                                className='object-cover rounded-md'
                            />
                        </div>
                    </motion.div>
                    
                    {/* text part */}
                    <motion.div 
                        className='flex-1 flex order-1 xl:order-none mb-8 xl:mb-0'
                        initial={{ opacity: 0, translateX: '100px' }}
                        animate={{ opacity: 1, translateX: '0px', transition: {
                            delay: 2.4,
                            duration: 0.4,
                            ease: 'easeInOut'
                        }}}
                    >
                       <div>
                            <h1 className='text-2xl font-semibold text-accent'>{blogs.title}</h1>
                            <p className='text-white/60 mt-1 leading-loose'>{blogs.description}</p>
                            <div className='mt-8'>
                                <h3 className='text-white font-medium text-lg'>{blogs.subtitle}</h3>
                                <p className='text-white/60 mt-3'>
                                    {blogs.desc1}
                                </p>
                                <p className='text-white/60 mt-6'>
                                    {blogs.desc2}
                                </p>
                                <h4 className='text-medium text-lg mt-8'>Conclusion</h4>
                                <p className='text-white/60 mt-3'>
                                    {blogs.desc3}
                                </p>
                            </div>
                       </div>
                    </motion.div>
                </div>
                
                {/* second part - author name and image */}
                <motion.div 
                    className='mt-12 bg-[#27272c] max-w-[450px] h-[150px] mx-auto rounded-md'
                    initial={{ opacity: 0, translateY: '100px' }}
                    animate={{ opacity: 1, translateY: '0px', transition: {
                        delay: 2.4,
                        duration: 0.4,
                        ease: 'easeInOut'
                    }}}
                >
                    <div className='flex items-center justify-center gap-6 h-full'>
                        <div className=''>
                            <Image
                                src={blogs.authorimage}
                                width={80}
                                height={80}
                                alt=''
                            />
                        </div>
                        <div>
                            <h2 className='text-accent text-xl font-semibold'>{blogs.authorname}</h2>
                            <span className='text-md text-white/60 font-semibold mt-1'>{blogs.date}</span>
                        </div>
                    </div>
                </motion.div>
            </div>
                
        </motion.div>
    );
};

export default BlogDetailsPage;