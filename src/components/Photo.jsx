"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';

const Photo = () => {
    return (
        <div className="w-full h-full relative">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: {
                    delay: 2,
                    duration: 0.4,
                    ease: 'easeIn'
                } }}
            >
                <motion.div 
                    className='w-[298px] h-[298px] xl:w-[498px] xl:h-[498px] mix-blend-lighten'
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, transition: {
                        delay: 2.4,
                        duration: 0.4,
                        ease: 'easeInOut'
                    } }}
                >
                    <Image 
                        src='/assets/pp.png' 
                        priority 
                        quality={100} 
                        fill 
                        alt='Cover picture'
                        className='object-contain'
                    />
                </motion.div>
            </motion.div>
        </div>
    );
};

export default Photo;