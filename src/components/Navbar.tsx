import { useState, useEffect } from "react"
import Home from "../assets/Home"
import Project from "../assets/Projects"
import About from "../assets/About"
import GlitchText from "./ui/GlitchText"
import { HoverCard, HoverCardTrigger, HoverCardContent } from "./ui/hover-card"

function Navbar() {
    const [isVisible, setIsVisible] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollThreshold = 20;
            const scrollY = window.scrollY;

            if (scrollY > scrollThreshold) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <div
                className={`fixed h-22 top-0 left-0 right-0 z-1 backdrop-blur-sm bg-linear-to-b from-white/10 to-white/5  shadow-lg transition-transform duration-300 ease-in-out ${isVisible ? 'translate-y-0' : '-translate-y-full'
                    }`}
            >
            </div>
            <nav className='h-24 min-w-[99%] left-2 fixed z-10 top-3 rounded-lg flex justify-between items-center px-4 text-white'>
                <div className="mt-2 transition-all duration-300 " onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
                    <a href="/" className="relative inline-flex items-center ">
                        <span><img className="h-[10vh] max-w-[20vh]" src="/Name.svg" alt="Name" /></span>
                        <span className={`font-robo font-normal text-[#c3c3c3] text-xs ml-4 transition-all duration-300 ease-out transform ${isHovered ? 'opacity-100 translate-x-0 scale-100' : 'opacity-0 -translate-x-4 scale-75'}`}>
                            Hi 👋
                        </span>
                    </a>
                </div>
                <div className="inline-flex items-start justify-start gap-32 w-220 font-robo font-normal text-[#c3c3c3] text-xs">
                    <span className="w-52"><GlitchText /></span>
                    <span>umair030703@gmail.com</span>
                </div>
                <nav className="w-fit bg-linear-to-b from-black z-3 to-[#1d1d1d] py-2 rounded-md border-1 border-[#353535]">
                    <HoverCard openDelay={0}>
                        <HoverCardTrigger>
                            <a className="relative px-11 py-1 m-1 rounded-sm bg-[#353535] border-1 border-[#353535]" href="/"><Home /></a>
                        </HoverCardTrigger>
                        <HoverCardContent>
                            Home
                        </HoverCardContent>
                    </HoverCard>
                    <HoverCard openDelay={0}>
                        <HoverCardTrigger>
                            <a className="relative px-11 py-1 rounded-sm bg-[#353535] border-1 border-[#353535]" href=""><Project /></a>
                        </HoverCardTrigger>
                        <HoverCardContent>
                            Work
                        </HoverCardContent>
                    </HoverCard>
                    <HoverCard openDelay={0}>
                        <HoverCardTrigger>
                            <a className="relative px-11 py-1 m-1 rounded-sm bg-[#353535] border-1 border-[#353535]" href="/"><About /></a>
                        </HoverCardTrigger>
                        <HoverCardContent>
                            About
                        </HoverCardContent>
                    </HoverCard>
                </nav>
            </nav>
        </>
    )
}

export default Navbar