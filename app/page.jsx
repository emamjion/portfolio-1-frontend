import { Button } from "@/components/ui/button";
import { FiDownload } from 'react-icons/fi';

// Components
import Photo from "@/components/Photo";
import Social from "@/components/Social";
import Stats from "@/components/Stats";


const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row justify-between items-center xl:pt-8 xl:pb-24">
          {/* Text */}
          <div className="text-center xl:text-left order-2 xl:order-none ">
            <span className="text-xl">MERN Stack Developer</span>
            <h1 className="h1 mb-6">Hello I'm <br /> <span className="text-accent">Emam Khalid Jion</span></h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              I'm a skilled MERN stack developer with expertise in building dynamic, scalable web applications using MongoDB, Express.js, React, and Node.js. Passionate about coding and innovation.
            </p>
            {/* Button and socials */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button size='lg' className='uppercase flex items-center gap-2' variant='outline'>
                <span>Download Resume</span>
                <FiDownload className="text-xl" />
              </Button>
              <div className="mb-8 xl:mb-0">
                <Social
                  containerStyles="flex gap-6"
                  iconStyles="h-9 w-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>
          {/* Photo */}
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo/>
          </div>
        </div>
      </div>
      <Stats/>
    </section>
  );
};

export default Home;