"use client";

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const AddAbout = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    
    const onSubmit = async (data) => {
        const about = {
            fieldname : data.fieldname,
            fieldvalue: data.fieldvalue,
        };

        fetch('https://my-nextjs-portfolio-backend.vercel.app/about', {
            method: 'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(about)
        }).then(res => res.json()).then(data => {
            if(data.insertedId)
                {
                    reset();
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "About added Successfully!!",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
        })
    };
    
    
    return (
        <div className="w-full">
            <h1 className="text-3xl font-semibold">Add Skill</h1>
            <div className=" mt-12 w-full h-[100%] ">
                <form onSubmit={handleSubmit(onSubmit)} className="border border-white/60 w-[50%] p-8 rounded-md">
                    <div className="space-y-6">
                        <div className="w-full">
                            <span className="block text-lg font-semibold mb-2">Field Name</span>
                            <Input 
                                className='w-full'
                                type="text"
                                {...register("fieldname", {
                                    required: "Field Name is required",
                                })}
                            />
                        </div>
                        <div>
                            <span className="block text-lg font-semibold mb-2">Field Value</span>
                            <Input 
                                className='w-full'
                                type="text"
                                {...register("fieldvalue", {
                                    required: "Field Value is required",
                                })}
                            />
                        </div>
                    </div>
                    <div className="w-full flex items-center justify-center mt-5">
                        <Button
                            size='lg'
                            className='max-w-52'
                        >Add About</Button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddAbout;