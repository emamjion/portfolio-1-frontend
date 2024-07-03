"use client";

import Head from "next/head";
import Link from "next/link";

import React, { useState } from "react";
import { FaBlog, FaUserGraduate } from "react-icons/fa";
import { FiMessageSquare } from "react-icons/fi";
import { GiSkills } from "react-icons/gi";
import { HiMenuAlt3 } from "react-icons/hi";
import { MdAddCard, MdOutlineDashboard } from "react-icons/md";
import { TbReportAnalytics } from "react-icons/tb";

const DashboardLayout = ({ children }) => {
    const menus = [
        {
            name: 'Dashboard',
            link: '/dashboard',
            icon: MdOutlineDashboard
        },
        {
            name: 'analytics',
            link: '/analytics',
            icon: TbReportAnalytics
        },
        {
            name: 'message',
            link: '/message',
            icon: FiMessageSquare
        },
        {
            name: 'Add Project',
            link: '/dashboard/addProject',
            icon: MdAddCard,
            margin: true
        },
        {
            name: 'Add Blog',
            link: '/dashboard/addBlogs',
            icon: FaBlog
        },
        {
            name: 'Add Skill',
            link: '/dashboard/addSkill',
            icon: GiSkills
        },
        {
            name: 'Add Experience',
            link: '/dashboard/addExperience',
            icon: FaUserGraduate
        },
        {
            name: 'Add About',
            link: '/dashboard/addAbout',
            icon: FaUserGraduate
        },
        {
            name: 'Manage Projects',
            link: '/dashboard/manageProject',
            icon: MdAddCard,
            margin: true
        },
        {
            name: 'Manage Blogs',
            link: '/dashboard/manageBlogs',
            icon: FaBlog
        },
        {
            name: 'Manage Skills',
            link: '/dashboard/manageSkills',
            icon: GiSkills
        },
        {
            name: 'Manage Experience',
            link: '/dashboard/manageExperience',
            icon: FaUserGraduate
        },
        {
            name: 'Manage About',
            link: '/dashboard/manageAbout',
            icon: FaUserGraduate,
        }
    ];

   

    const [open, setOpen] = useState(true);
    return (
        <div>
            <Head>
                <title>Dashboard</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <section className='flex gap-6'>
                <div className={`bg-[#2c3e50] min-h-screen ${open ? 'w-72' : 'w-16'} text-gray-100 px-4 duration-500`}>
                    <div className='py-3 flex justify-end'>
                        < HiMenuAlt3 
                            size={26} 
                            className='cursor-pointer'
                            onClick={() => setOpen(!open)}
                        />
                    </div>
                    <div className='mt-4 flex flex-col gap-4 relative'>
                        {
                            menus.map((menu, i) => <Link
                                key={i}
                                className={` ${menu?.margin && 'mt-5'} group flex items-center gap-3.5 font-medium p-2 hover:bg-gray-800 rounded-md`}
                                href={menu?.link}
                            >
                                <div>
                                    {React.createElement(menu?.icon, {size: '20'})}
                                </div>
                                <h2 className={`whitespace-pre duration-500 ${!open && 'opacity-0 translate-x-28 overflow-hidden'}`} style={{transitionDelay: `${i + 3}00ms`}}>{menu?.name}</h2>
                                <h2 className={` ${open && 'hidden'} absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit`}>{menu?.name}</h2>
                            </Link>)
                        }
                        
                    </div>
                </div>
            
            <div className='m-3 w-full'>
                {children}
            </div>
            </section>
    </div>
    );
};

export default DashboardLayout;