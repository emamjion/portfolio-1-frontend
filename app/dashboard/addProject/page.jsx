"use client";

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const AddProject = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    
    const onSubmit = async (data) => {
        const projects = {
            imgUrl : data.imgUrl,
            liveLink: data.liveLink,
            clientRepo: data.clientRepo,
            serverRepo : data.serverRepo,
            technology: data.technology,
            overview : data.overview,
            category : data.category,
        };

        fetch('https://my-nextjs-portfolio-backend.vercel.app/projects', {
            method: 'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(projects)
        }).then(res => res.json()).then(data => {
            if(data.insertedId)
                {
                    reset();
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "Projects added Successfully!!",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
        })
    };
    
    
    return (
        <div className="w-full">
            <h1 className="text-3xl font-semibold">Add Project</h1>
            <div className=" mt-12 w-full h-[700px] ">
                <form onSubmit={handleSubmit(onSubmit)} className="border border-white/60 w-[50%] h-[700px] p-8 rounded-md">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div className="w-full">
                            <span className="block text-lg font-semibold mb-2">Image URL</span>
                            <Input 
                                className='w-full'
                                type="text"
                                {...register("imgUrl", {
                                    required: "Project Name is required",
                                })}
                            />
                        </div>
                        <div>
                            <span className="block text-lg font-semibold mb-2">Project Live Link</span>
                            <Input 
                                className='w-full'
                                type="text"
                                {...register("liveLink", {
                                    required: "Live Link is required",
                                })}
                            />
                        </div>
                        <div>
                            <span className="block text-lg font-semibold mb-2">Client Repo Link</span>
                            <Input 
                                className='w-full'
                                type="text"
                                {...register("clientRepo", {
                                    required: "Client Repo is required",
                                })}
                            />
                        </div>
                        <div>
                            <span className="block text-lg font-semibold mb-2">Server Repo Link</span>
                            <Input 
                                className='w-full'
                                type="text" 
                                {...register("serverRepo", {
                                    required: "Server Repo is required",
                                })}
                            />
                        </div>
                        <div>
                            <span className="block text-lg font-semibold mb-2">Technology</span>
                            <Input 
                                className='w-full'
                                type="text" 
                                {...register("technology", {
                                    required: "Technology is required",
                                })}
                            />
                        </div>
                        <div>
                            <span className="block text-lg font-semibold mb-2">Category</span>
                            <Input 
                                className='w-full'
                                type="text" 
                                {...register("category", {
                                    required: "Category is required",
                                })}
                            />
                        </div>
                    </div>
                    <div className="mt-5">
                        <span className="block text-lg font-semibold mb-2">Project Overview</span>
                        <Textarea 
                            className='h-[200px] resize-none'
                            placeholder='Write your message here...'
                            {...register("overview", {
                                required: "Project overview are required",
                            })}
                        ></Textarea>
                    </div>
                    <div className="w-full flex items-center justify-center mt-5">
                        <Button
                            size='lg'
                            className='max-w-52'
                        >Add Project</Button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddProject;