import Link from "next/link";

// Components
import MobileNav from "./MobileNav";
import Nav from "./Nav";
// Shadcn button
import { Button } from "./ui/button";

const Header = () => {
    return (
        <header className="py-8 xl:py-12 text-white">
            <div className="container max-auto flex justify-between items-center">
                <Link href='/'>
                    <h1 className="font-semibold text-4xl">Emam Jion<span className="text-accent">.</span></h1>
                </Link>
                
                
                
                <div className="hidden xl:flex items-center gap-8">
                    <Nav/>
                    <Link href='https://drive.google.com/file/d/16CleVeBa9bskP1EqLb9sgZFyNbiRlRvP/view?usp=drive_link' target="_blank">
                        <Button>Download Resume</Button>
                    </Link>
                </div>

                {/* Mobile Nav */}
                <div className="xl:hidden">
                    <MobileNav/>
                </div>
            </div>
        </header>
    );
};

export default Header;