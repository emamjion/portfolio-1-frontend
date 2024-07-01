"use client";

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { motion } from 'framer-motion';

// select - at this moment, this is optional
// import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '@/components/ui/select';
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';

// contact data
const info = [
    {
        icon : <FaPhoneAlt/>,
        title: 'Phone',
        description: '(+880) 1727 08 7717',
    },
    {
        icon : <FaEnvelope/>,
        title: 'Email',
        description: 'emamjion@gmail.com',
    },
    {
        icon : <FaMapMarkerAlt/>,
        title: 'Address',
        description: 'Dhaka - 1207, Bangladesh',
    },
]


const Contact = () => {
    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: {
                delay: 2.4,
                duration: 0.4,
                ease: 'easeIn'
            } }}
            className='py-6'
        >
            <div className="container mx-auto">
                <div className='flex flex-col xl:flex-row gap-[30px] '>
                    {/* Contact form */}
                    <div className='xl:w-[54%] order-2 xl:order-none'>
                        <form className='flex flex-col gap-6 p-10 bg-[#27272c] rounded-md'>
                            <h3 className='text-4xl text-accent'>Lets contact me</h3>
                            <p className='text-white/60'>Reach out through the form on my website for personalized assistance and inquiries</p>
                            
                            {/* infput field */}
                            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                                <Input
                                    type='firstname'
                                    placeholder='Firstname'
                                />
                                <Input
                                    type='lastname'
                                    placeholder='Lastname'
                                />
                                <Input
                                    type='email'
                                    placeholder='Email address'
                                />
                                <Input
                                    type='phone'
                                    placeholder='Phone number'
                                />
                            </div>

                            {/* Select - At this moment, this is optional  */}
                            {/*
                            <Select>
                                <SelectTrigger className='w-full'>
                                    <SelectValue 
                                        placeholder='Select a service'
                                    />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectLabel>Select a service</SelectLabel>
                                        <SelectItem value="est">Web Design</SelectItem>
                                        <SelectItem value="cst">Web Development</SelectItem>
                                        <SelectItem value="mst">Figma to HTML</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                            */}
                            
                            {/* Textarea */}
                            <Textarea  
                                className='h-[200px] resize-none'
                                placeholder='Write your message here...'
                            />

                            {/* button */}
                            <Button
                                size='md'
                                className='max-w-40'
                            >Send</Button>
                        </form>
                    </div>
                    
                    
                    {/* Info */}
                    <div className='flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0'>
                        <ul className='flex flex-col gap-10'>
                            {
                                info.map((item, index) => {
                                    return <li key={index} className='flex items-center gap-6'>
                                        <div className='w-[52px] h-[52px] xl:w-[72px] xl:h-[72] bg-[#27272c] text-accent rounded-md flex items-center justify-center'>
                                            <div className='text-[28px]'>{item.icon}</div>
                                        </div>
                                        <div className='flex-1'>
                                            <p className='text-white/60'>{item.title}</p>
                                            <h3 className='text-xl'>{item.description}</h3>
                                        </div>
                                    </li>
                                })
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </motion.section>
    );
};

export default Contact;