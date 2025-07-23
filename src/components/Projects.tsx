import { Button } from './ui/button'
import Github from '@/icons/Github-icon'
import LinkIcon from '@/icons/Link-icon'
import { Element } from 'react-scroll';
import { useEffect, useRef, useState } from 'react';

interface ProjectType {
    image: string;
    title: string;
    description: string;
    tech: string;
    repo: string;
    link: string;
}

function Projects() {
    const [isVisible, setIsVisible] = useState(false);
    const [visibleProjects, setVisibleProjects] = useState<number[]>([]);
    const projectsRef = useRef<HTMLDivElement>(null);
    const projectRefs = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px'
            }
        );

        if (projectsRef.current) {
            observer.observe(projectsRef.current);
        }

        return () => {
            if (projectsRef.current) {
                observer.unobserve(projectsRef.current);
            }
        };
    }, []);

    useEffect(() => {
        const projectObserver = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const index = projectRefs.current.indexOf(entry.target as HTMLDivElement);
                        if (index !== -1 && !visibleProjects.includes(index)) {
                            setVisibleProjects(prev => [...prev, index]);
                        }
                    }
                });
            },
            {
                threshold: 0.2,
                rootMargin: '0px 0px -100px 0px'
            }
        );

        projectRefs.current.forEach((ref) => {
            if (ref) {
                projectObserver.observe(ref);
            }
        });

        return () => {
            projectRefs.current.forEach((ref) => {
                if (ref) {
                    projectObserver.unobserve(ref);
                }
            });
        };
    }, [visibleProjects]);

    const Projects: ProjectType[] = [
        {
            image: "/Projects/Rohit-Negi-chatbot.png",
            title: "AI Mentor (Hackathon Project)",
            description: "A personalized AI chatbot designed to be a friendly, bilingual mentor for students learning Data Structures & Algorithms (DSA) and System Design based on the persona of Rohit Negi (Youtuber).",
            tech: "React,Node,Express,Gemini API",
            repo: "https://github.com/Syed373/Rohit-Negi-AI-Mentor",
            link: "https://rohit-negi-ai-mentor.netlify.app/"
        },
    ]

    return (
        <Element name="Projects">
            <div 
                className="max-w-3xl text-background font-robo pb-20 mx-auto border-1 border-white/30 shadow-sm shadow-white/50 h-fit my-2 rounded-xl backdrop-blur-sm"
                ref={projectsRef}
            >
            <div 
                className={`max-w-2xl text-4xl text-foreground font-medium bg-background rounded-lg m-4 md:ml-12 md:my-8 p-1 text-center transform transition-all duration-1000 ease-out ${
                    isVisible 
                        ? 'translate-y-0 opacity-100' 
                        : 'translate-y-8 opacity-0'
                }`}
                style={{ transitionDelay: '200ms' }}
            >
                Projects
            </div>
            
            <div 
                className={`w-full p-4 md:py-0 md:px-16 text-background/60 transform transition-all duration-1000 ease-out ${
                    isVisible 
                        ? 'translate-y-0 opacity-100' 
                        : 'translate-y-8 opacity-0'
                }`}
                style={{ transitionDelay: '400ms' }}
            >
                A selection of my recent projects, focused on Frontend, Backend, and Fullstack. Each project represents a step in my journey as a builder.
            </div>
            
            <div className='m-10 px-2 space-y-4'>
                {Projects.map((item, index) => {
                    const Tech = item.tech;
                    return (
                        <div 
                            key={index} 
                            className={`flex ${(index % 2) ? "justify-end" : "justify-start"} h-fit p-1`}
                            ref={el => { projectRefs.current[index] = el; }}
                        >
                            <div 
                                className={`border-1 pb-10 h-full p-2 rounded-md w-sm transform transition-all duration-1000 ease-out ${
                                    visibleProjects.includes(index)
                                        ? 'translate-y-0 opacity-100 scale-100'
                                        : 'translate-y-12 opacity-0 scale-95'
                                }`}
                                style={{ 
                                    transitionDelay: `${600 + (index * 200)}ms`,
                                }}
                            >
                                <div className='h-fit overflow-hidden rounded-md transform transition-transform duration-500 hover:scale-105'>
                                    <img src={item.image} alt={item.title} />
                                </div>
                                
                                <div className='p-2 text-lg'>{item.title}</div>
                                
                                <div className='px-3 w-fit text-background/50 text-xs'>{item.description}</div>
                                
                                <div className='p-3 space-x-1'>
                                    {Tech.split(',').map((TechUsed, keys) => {
                                        return (
                                            <button 
                                                key={keys} 
                                                className='text-sm bg-background hover:bg-foreground hover:text-background hover:border-1 hover:border-background transition-all duration-300 ease-in-out border-1 text-foreground rounded-full px-2 font-bold transform hover:scale-105'
                                            >
                                                {TechUsed}
                                            </button>
                                        )
                                    })}
                                </div>
                                
                                <div className='px-2 space-x-4'>
                                    <Button 
                                        variant="link" 
                                        className='rounded-full transform transition-transform duration-300 hover:scale-110'
                                        onClick={() => {
                                            window.open(`${item.repo}`, '_blank')
                                        }}
                                    >
                                        <Github className='size-4' />Repo
                                    </Button>
                                    <Button 
                                        variant="link" 
                                        className='rounded-full text-center transform transition-transform duration-300 hover:scale-110'
                                        onClick={() => {
                                            window.open(`${item.link}`, '_blank')
                                        }}
                                    >
                                        <LinkIcon />Live
                                    </Button>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
            </div>
        </Element>
    )
}

export default Projects