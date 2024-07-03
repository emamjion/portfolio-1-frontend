"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

// Blog data
// const blogs = [
//     {
//         "id": 1,
//         "title": "The Rise of JavaScript",
//         "description": "JavaScript dominates web development, offering versatility for front-end and back-end, essential for full-stack developers.",
//         "desc1": "JavaScript is versatile, working seamlessly on both front-end and back-end, making it an essential skill for full-stack developers.",
//         "desc2": "It boasts wide adoption and community support, with numerous resources available for learning and troubleshooting.",
//         "desc3": "Its rich ecosystem includes powerful frameworks and libraries like React, Angular, and Node.js, enhancing development efficiency.",
//         "image": "https://i.ibb.co/5TbGsjy/software-developer-programming-desktop-with-code-symbols-24877-70808.jpg",
//         "subtitle": "Dominating the Web",
//         "date": "2024-07-02",
//         "authorname": "John Doe",
//         "authorimage": "https://i.ibb.co/JjPm5J3/author-img.png"
//     },
//     {
//         "id": 2,
//         "title": "Python's Popularity in Data Science",
//         "description": "Python excels in data science and machine learning with simple syntax, extensive libraries, and strong community support.",
//         "desc1": "Python's simple syntax and readability make it accessible to beginners and experts alike, fostering rapid development.",
//         "desc2": "It features extensive libraries like NumPy, Pandas, and TensorFlow, providing robust tools for data manipulation and analysis.",
//         "desc3": "The strong community and continuous development ensure Python remains at the forefront of technological advancements in data science.",
//         "image": "https://i.ibb.co/5TbGsjy/software-developer-programming-desktop-with-code-symbols-24877-70808.jpg",
//         "subtitle": "Data Science Leader",
//         "date": "2024-07-02",
//         "authorname": "Jane Smith",
//         "authorimage": "https://i.ibb.co/JjPm5J3/author-img.png"
//     },
//     {
//         "id": 3,
//         "title": "The Growth of TypeScript",
//         "description": "TypeScript enhances JavaScript with static types, improving productivity and code quality, ideal for large-scale projects.",
//         "desc1": "TypeScript enhances code maintainability by enabling static type-checking, which helps catch errors early in the development process.",
//         "desc2": "Its robust tooling and IDE support, like Visual Studio Code, streamline the coding experience and increase productivity.",
//         "desc3": "TypeScript's increasing adoption in large-scale projects highlights its effectiveness in managing complex codebases.",
//         "image": "https://i.ibb.co/5TbGsjy/software-developer-programming-desktop-with-code-symbols-24877-70808.jpg",
//         "subtitle": "Supercharged JavaScript",
//         "date": "2024-07-02",
//         "authorname": "Alice Johnson",
//         "authorimage": "https://i.ibb.co/JjPm5J3/author-img.png"
//     },
//     {
//         "id": 4,
//         "title": "Rust: A Systems Programming Language",
//         "description": "Rust offers performance and safety for systems programming, ensuring memory safety and preventing common bugs.",
//         "desc1": "Rust ensures memory safety without a garbage collector, preventing common bugs and vulnerabilities associated with memory management.",
//         "desc2": "It offers high performance and concurrency, making it suitable for system-level tasks and performance-critical applications.",
//         "desc3": "With growing popularity and industry adoption, Rust is increasingly chosen for developing reliable and efficient software.",
//         "image": "https://i.ibb.co/5TbGsjy/software-developer-programming-desktop-with-code-symbols-24877-70808.jpg",
//         "subtitle": "Safe Systems Programming",
//         "date": "2024-07-02",
//         "authorname": "Robert Brown",
//         "authorimage": "https://i.ibb.co/JjPm5J3/author-img.png"
//     },
//     {
//         "id": 5,
//         "title": "The Versatility of Go (Golang)",
//         "description": "Go excels in concurrent programming, offering simplicity, efficiency, and strong concurrency support.",
//         "desc1": "Go's efficient garbage collection and memory management make it a reliable choice for building scalable applications.",
//         "desc2": "Its strong concurrency support with goroutines allows developers to handle multiple tasks simultaneously with ease.",
//         "desc3": "Go is ideal for cloud services and microservices architectures, offering fast compilation and minimal runtime overhead.",
//         "image": "https://i.ibb.co/5TbGsjy/software-developer-programming-desktop-with-code-symbols-24877-70808.jpg",
//         "subtitle": "Efficient and Concurrent",
//         "date": "2024-07-02",
//         "authorname": "Emily Davis",
//         "authorimage": "https://i.ibb.co/JjPm5J3/author-img.png"
//     },
//     {
//         "id": 6,
//         "title": "Kotlin's Ascendancy in Android Development",
//         "description": "Kotlin is preferred for Android development, offering modern features and seamless interoperability with Java.",
//         "desc1": "Kotlin's null safety features and concise syntax reduce the risk of runtime errors and improve code readability.",
//         "desc2": "Its full interoperability with Java allows developers to use existing Java libraries and frameworks seamlessly.",
//         "desc3": "Google's official support for Kotlin in Android development has accelerated its adoption, making it a mainstream language for mobile development.",
//         "image": "https://i.ibb.co/5TbGsjy/software-developer-programming-desktop-with-code-symbols-24877-70808.jpg",
//         "subtitle": "Modern Android Development",
//         "date": "2024-07-02",
//         "authorname": "Michael Wilson",
//         "authorimage": "https://i.ibb.co/JjPm5J3/author-img.png"
//     }
// ]

const BlogPage = () => {
    
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        fetch('https://my-nextjs-portfolio-backend.vercel.app/blogs').then(res => res.json()).then(data => setBlogs(data))
    }, [])
    
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
                <div className='flex flex-col gap-[30px]'>
                    <h3 className='text-4xl text-accent'>Latest Blog</h3>
                    <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>
                        Dive into my web development journey with coding tutorials, project highlights, and insights on the latest MERN stack trends.
                    </p>
                    
                    {/* Blog container */}
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                        {
                            blogs.map((blog, index) => {
                                return (
                                    <div key={index} className='border border-accent rounded-md bg-[#27272c]'>
                                        <div>
                                            <Image
                                                src={blog.image}
                                                alt=''
                                                width={200}
                                                height={200}
                                                className='w-full rounded'
                                            />
                                        </div>
                                        <div className='p-5 mt-4'>
                                            <span className='px-4 py-2 bg-accent text-primary rounded-md text-xs font-bold'>{blog.date}</span>
                                            <h1 className='mt-3 text-xl font-semibold text-accent'>{blog.title}</h1>
                                            <p className='text-white/60 mt-3 leading-1'>{blog.description}</p>
                                            <Link href={`/blog/${blog._id}`} className='mt-6'>
                                                <span className='text-accent font-bold'>Read more</span>
                                            </Link>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default BlogPage;