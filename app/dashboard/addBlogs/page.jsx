"use client";

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const AddBlog = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    
    const onSubmit = async (data) => {
        const blog = {
            imgUrl : data.imgUrl,
            title: data.title,
            subtitle: data.subtitle,
            author : data.author,
            authorImg: data.authorImg,
            details : data.details
        };

        fetch('https://my-nextjs-portfolio-backend.vercel.app/blogs', {
            method: 'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(blog)
        }).then(res => res.json()).then(data => {
            if(data.insertedId)
                {
                    reset();
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "Blog added Successfully!!",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
        })
    };
    
    
    return (
        <div className="w-full">
            <h1 className="text-3xl font-semibold">Add Blog</h1>
            <div className=" mt-12 w-full h-[700px] ">
                <form onSubmit={handleSubmit(onSubmit)} className="border border-white/60 w-[50%] h-[700px] p-8 rounded-md">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div className="w-full">
                            <span className="block text-lg font-semibold mb-2">Image URL</span>
                            <Input 
                                className='w-full'
                                type="text"
                                {...register("imgUrl", {
                                    required: "Blog image is required",
                                })}
                            />
                        </div>
                        <div>
                            <span className="block text-lg font-semibold mb-2">Blog Title</span>
                            <Input 
                                className='w-full'
                                type="text"
                                {...register("title", {
                                    required: "Blog title is required",
                                })}
                            />
                        </div>
                        <div>
                            <span className="block text-lg font-semibold mb-2">Subtitle</span>
                            <Input 
                                className='w-full'
                                type="text"
                                {...register("subtitle", {
                                    required: "Subtitle is required",
                                })}
                            />
                        </div>
                        <div>
                            <span className="block text-lg font-semibold mb-2">Author</span>
                            <Input 
                                className='w-full'
                                type="text" 
                                {...register("author", {
                                    required: "Author is required",
                                })}
                            />
                        </div>
                    </div>
                    <div className="mt-5">
                        <span className="block text-lg font-semibold mb-2">Author Image</span>
                        <Input 
                            className='w-full'
                            type="text" 
                            {...register("authorImg", {
                                required: "Author image is required",
                            })}
                        />
                    </div>
                    <div className="mt-5">
                        <span className="block text-lg font-semibold mb-2">Blog Details</span>
                        <Textarea 
                            className='h-[200px] resize-none'
                            placeholder='Write content here...'
                            {...register("details", {
                                required: "Details are required",
                            })}
                        ></Textarea>
                    </div>
                    <div className="w-full flex items-center justify-center mt-5">
                        <Button
                            size='lg'
                            className='max-w-52'
                        >Add Blog</Button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddBlog;