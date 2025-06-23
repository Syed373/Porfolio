// import React from 'react'
// bg-linear-to-b from-[#282828ef] to-[#1c1c1c82] backdrop-blur-sm

import Home from "../assets/Home"
import Project from "../assets/Projects"
import About from "../assets/About"
import { HoverCard, HoverCardTrigger, HoverCardContent } from "./ui/hover-card"

function Navbar() {
    return (
        <nav className='h-24 min-w-[99%] bg-black fixed top-3 rounded-lg flex justify-between items-center px-4 text-white'>
            <div>
                <img className="h-[10vh] max-w-[20vh]" src="/Name.svg" alt="" />
            </div>
            <div className="font-robo font-normal text-[#c3c3c3] text-xs">
                umair030703@gmail.com
            </div>
            <nav className="w-fit bg-linear-to-b from-black to-[#1d1d1d] py-2 rounded-md border-1 border-[#353535]">
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
    )
}

export default Navbar