import React from 'react'
import { Button } from './ui/button'
import Github from '@/icons/Github-icon'
import LinkIcon from '@/icons/Link-icon'

function Projects() {
    return (
        <div className="max-w-3xl text-background font-robo pb-20 mx-auto border-1 border-white/30 shadow-sm shadow-white/50 h-fit my-2 rounded-xl backdrop-blur-sm">
            <div className='max-w-2xl text-4xl text-foreground font-medium bg-background rounded-lg m-4 md:ml-12 md:my-8 p-1 text-center'>Projects</div>
            <div className='w-full p-4 md:py-0 md:px-16 text-background/60'>A selection of my recent projects, focused on Frontend, Backend, and Fullstack. Each project represents a step in my journey as a builder.</div>
            <div className=' m-10 px-2 space-y-4'>
                <div className='flex justify-start h-fit p-1'>
                    <div className='border-1 pb-10 h-full p-2 rounded-md w-sm'>
                        <div className='h-50 overflow-hidden rounded-md bg-amber-100'><img src="" alt="" /></div>
                        <div className='p-2 text-lg'> Title</div>
                        <div className='px-3 w-fit text-background/50'>Description</div>
                        <div className='p-3 space-x-1'>
                            <button className='text-sm bg-background text-foreground rounded-full px-2 font-bold'>Tech</button>
                        </div>
                        <div className='px-2 space-x-4'>
                            <Button variant="link" className='rounded-full '><Github className='size-4'/>Repo</Button>
                            <Button variant="link" className='rounded-full text-center'><LinkIcon />Live</Button>
                        </div>
                    </div>
                </div>
                <div className='flex justify-end h-fit p-1'>
                    <div className='border-1 pb-10 h-full p-2 rounded-md w-sm'>
                        <div className='h-50 overflow-hidden rounded-md bg-amber-100'><img src="" alt="" /></div>
                        <div className='p-2 text-lg'> Title</div>
                        <div className='px-3 w-fit text-background/50'>Description</div>
                        <div className='p-3 space-x-1'>
                            <button className='text-sm bg-background text-foreground rounded-full px-2 font-bold'>Tech</button>
                        </div>
                        <div className='px-2 space-x-4'>
                            <Button variant="link" className='rounded-full '><Github className='size-4'/>Repo</Button>
                            <Button variant="link" className='rounded-full text-center'><LinkIcon />Live</Button>
                        </div>
                    </div>
                </div>
                <div className='flex justify-start h-fit p-1'>
                    <div className='border-1 pb-10 h-full p-2 rounded-md w-sm'>
                        <div className='h-50 overflow-hidden rounded-md bg-amber-100'><img src="" alt="" /></div>
                        <div className='p-2 text-lg'> Title</div>
                        <div className='px-3 w-fit text-background/50'>Description</div>
                        <div className='p-3 space-x-1'>
                            <button className='text-sm bg-background text-foreground rounded-full px-2 font-bold'>Tech</button>
                        </div>
                        <div className='px-2 space-x-4'>
                            <Button variant="link" className='rounded-full '><Github className='size-4'/>Repo</Button>
                            <Button variant="link" className='rounded-full text-center'><LinkIcon />Live</Button>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default Projects