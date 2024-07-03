"use client";

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const AddExperience = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    
    const onSubmit = async (data) => {
        const experience = {
            company : data.company,
            position: data.position,
            duration: data.duration,
        };

        fetch('https://my-nextjs-portfolio-backend.vercel.app/experiences', {
            method: 'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(experience)
        }).then(res => res.json()).then(data => {
            if(data.insertedId)
                {
                    reset();
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "Experience added Successfully!!",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
        })
    };
    
    
    return (
        <div className="w-full">
            <h1 className="text-3xl font-semibold">Add Experience</h1>
            <div className=" mt-12 w-full h-full">
                <form onSubmit={handleSubmit(onSubmit)} className="border border-white/60 w-[50%] p-8 rounded-md">
                    <div className="space-y-6">
                        <div className="w-full">
                            <span className="block text-lg font-semibold mb-2">Company Name</span>
                            <Input 
                                className='w-full'
                                type="text"
                                {...register("company", {
                                    required: "Company Name is required",
                                })}
                            />
                        </div>
                        <div>
                            <span className="block text-lg font-semibold mb-2">Position</span>
                            <Input 
                                className='w-full'
                                type="text"
                                {...register("position", {
                                    required: "Position is required",
                                })}
                            />
                        </div>
                        
                        {/* TODO: ekhane shadcn er date use korbo */}
                        <div>
                            <span className="block text-lg font-semibold mb-2">Duration</span>
                            <Input 
                                className='w-full'
                                type="text"
                                {...register("duration", {
                                    required: "Duration is required",
                                })}
                            />
                        </div>
                    </div>
                    <div className="w-full flex items-center justify-center mt-5">
                        <Button
                            size='lg'
                            className='max-w-52'
                        >Add Experience</Button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddExperience;