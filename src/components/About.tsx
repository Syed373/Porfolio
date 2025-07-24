import GlitchText from './ui/GlitchText';
import { Element } from 'react-scroll';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { useEffect, useRef, useState } from 'react';

interface SkillsType {
    name: string;
    icon: string;
    category: string;
    Level: string;
    color: string;
    bgColor: string;
}

function About() {
    const [isVisible, setIsVisible] = useState(false);
    const aboutRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            {
                threshold: 0.1,
                rootMargin: '-50px 0px',
            }
        );

        if (aboutRef.current) {
            observer.observe(aboutRef.current);
        }

        return () => {
            if (aboutRef.current) {
                observer.unobserve(aboutRef.current);
            }
        };
    }, []);

    const customAbout = [
        "Hey there! I'm Umair, a Full Stack Developer who loves building fast, responsive frontends with React and robust backends with Node.js & PostgreSQL.",
        "Full Stack Developer specializing in React, Node.js, and modern backend architectures. I build scalable, clean, and efficient web apps end-to-end.",
        "Turning ideas into scalable products with React, Node, and TypeScript. Full Stack Developer. Problem Solver. Builder.",
        "Building performant, scalable, and beautiful web apps with modern technologies. From design systems to backend APIs - I handle it all.",
        "Coding pixels to perfection on the frontend, and engineering reliable APIs on the backend. I turn ideas into reality with React, Node, and TypeScript.",
        '"Code. Build. Deploy." - Full Stack Developer crafting interactive frontends with React and scalable backends with Node, Prisma, and PostgreSQL.'
    ];

    const skillsConfig: SkillsType[] = [
        {
            name: "HTML5",
            icon: '/Html.svg',
            category: "Frontend",
            Level: "Expert",
            color: "text-green-500",
            bgColor: "hover:bg-green-500/20"
        },
        {
            name: "CSS3",
            icon: "/Css.svg",
            category: "Frontend",
            Level: "Expert",
            color: "text-green-500",
            bgColor: "hover:bg-green-500/20"
        },
        {
            name: "JavaScript",
            icon: "/JS.svg",
            category: "Frontend",
            Level: "Expert",
            color: "text-green-500",
            bgColor: "hover:bg-green-500/20"
        },
        {
            name: "TypeScript",
            icon: "/TS.svg",
            category: "Frontend",
            Level: "proficient",
            color: "text-chart-1",
            bgColor: "hover:bg-chart-1/20"
        },
        {
            name: "React",
            icon: "/React.svg",
            category: "Frontend",
            Level: "Expert",
            color: "text-green-500",
            bgColor: "hover:bg-green-500/20"
        },
        {
            name: "Node.js",
            icon: "/Node.svg",
            category: "Backend",
            Level: "Expert",
            color: "text-green-500",
            bgColor: "hover:bg-green-500/20"
        },
        {
            name: "Express.js",
            icon: "/Express.svg",
            category: "Backend",
            Level: "Expert",
            color: "text-green-500",
            bgColor: "hover:bg-green-500/20"
        },
        {
            name: "MongoDB",
            icon: "/Mongo.svg",
            category: "Database",
            Level: "Expert",
            color: "text-green-500",
            bgColor: "hover:bg-green-500/20"
        },
        {
            name: "Tailwind CSS",
            icon: "/Tailwind.svg",
            category: "Frontend",
            Level: "Expert",
            color: "text-green-500",
            bgColor: "hover:bg-green-500/20"
        },
        {
            name: "Bootstrap",
            icon: "/Bootstrap.svg",
            category: "Frontend",
            Level: "Expert",
            color: "text-green-500",
            bgColor: "hover:bg-green-500/20"
        },
        {
            name: "Git",
            icon: "/Git.svg",
            category: "Tools",
            Level: "Proficient",
            color: "text-chart-1",
            bgColor: "hover:bg-chart-1/20"
        },
        {
            name: "Github",
            icon: "/Github.svg",
            category: "Tools",
            Level: "Expert",
            color: "text-green-500",
            bgColor: "hover:bg-green-500/20"
        },
        {
            name: "ShadCN UI",
            icon: "/ShadCN.svg",
            category: "Frontend",
            Level: "Proficient",
            color: "text-chart-1",
            bgColor: "hover:bg-chart-1/20"
        },
        {
            name: "Figma",
            icon: "/Figma.svg",
            category: "Tools",
            Level: "Proficient",
            color: "text-chart-1",
            bgColor: "hover:bg-chart-1/20"
        },
        {
            name: "Gemini API",
            icon: "/GeminiAPI.svg",
            category: "Tools",
            Level: "Proficient",
            color: "text-chart-1",
            bgColor: "hover:bg-chart-1/20"
        },
        {
            name: "Trpc",
            icon: "/Trpc.svg",
            category: "Backend",
            Level: "Familier",
            color: "text-chart-5",
            bgColor: "hover:bg-chart-4/20"
        },
        {
            name: "PostgresSQL",
            icon: "/Postgress.svg",
            category: "Database",
            Level: "Familier",
            color: "text-chart-5",
            bgColor: "hover:bg-chart-4/20"
        },
        {
            name: "Postman",
            icon: "/Postman.svg",
            category: "Tools",
            Level: "Expert",
            color: "text-green-500",
            bgColor: "hover:bg-green-500/20"
        },
        {
            name: "WebSockets",
            icon: "/websocket.svg",
            category: "Backend",
            Level: "Familier",
            color: "text-chart-5",
            bgColor: "hover:bg-chart-4/20"
        },
    ];

    const categoryLabels: string = "Frontend,Backend,Database,Tools"

    return (
        <div ref={aboutRef}>
            <Element
                name="About"
                className={`max-w-3xl py-6 px-2 sm:px-4 mx-auto border font-robo text-background border-white/30 shadow-sm shadow-white/50 h-fit my-2 rounded-xl backdrop-blur-sm transform transition-all duration-1000 ease-out ${isVisible
                    ? 'opacity-100 translate-y-0 scale-100'
                    : 'opacity-0 translate-y-12 scale-95'
                    }`}
            >
                <div className='p-2 flex flex-col items-center'>

                    <h1 className={`text-3xl sm:text-4xl text-foreground w-full font-bold bg-background py-2 rounded-lg mx-4 sm:mx-8 text-center mb-6 sm:mb-8 transform transition-all duration-1000 ease-out delay-200 ${isVisible
                        ? 'opacity-100 translate-y-0'
                        : 'opacity-0 translate-y-8'
                        }`}>
                        About Me
                    </h1>

                    <img
                        src="/Profile_img.png"
                        alt="Profile image"
                        className={`h-40 sm:h-48 my-6 sm:my-8 rounded-lg transform transition-all duration-1000 ease-out delay-400 ${isVisible
                            ? 'opacity-100 translate-y-0 scale-100'
                            : 'opacity-0 translate-y-8 scale-90'
                            }`}
                    />

                    <div className={`text-center text-lg sm:text-2xl max-w-xl pt-4 min-h-[12rem] sm:min-h-40 transform transition-all duration-1000 ease-out delay-600 ${isVisible
                        ? 'opacity-100 translate-y-0'
                        : 'opacity-0 translate-y-8'
                        }`}>
                        <GlitchText
                            Sentences={customAbout}
                            time={5000}
                        />
                    </div>

                    <div className={`my-12 w-full transform transition-all duration-1000 ease-out delay-800 ${isVisible
                        ? 'opacity-100 translate-y-0'
                        : 'opacity-0 translate-y-8'
                        }`}>
                        <h2 className="text-2xl sm:text-3xl text-foreground font-medium text-center mb-8 bg-background w-full p-2 rounded-lg">
                            Tech Stack
                        </h2>
                        <div className='w-full font-robo flex justify-center'>
                            <Tabs defaultValue="Frontend" className="w-full">
                                <div className="flex justify-center mb-6">
                                    <TabsList className="w-full max-w-2xl flex-wrap h-auto sm:h-10">
                                        {categoryLabels.split(",").map((item, index) => {
                                            return (
                                                <TabsTrigger key={index} value={item.trim()} className="flex-1min-w-[90px]">
                                                    {item.trim()}
                                                </TabsTrigger>
                                            )
                                        })}
                                    </TabsList>
                                </div>

                                {categoryLabels.split(",").map((item, index) => {
                                    const category = item.trim();
                                    return (
                                        <TabsContent key={index} value={category} className="w-full max-w-2xl mx-auto">
                                            <div className='grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 px-2 sm:px-4'>
                                                {skillsConfig.filter(skill => skill.category === category).map((skill, skillIndex) => {
                                                    return (
                                                        <div
                                                            key={skillIndex}
                                                            className={`flex flex-row items-center p-3 sm:px-4 sm:py-4 rounded-lg transition-all duration-300 cursor-default ${skill.bgColor} border border-white/10 hover:border-white/20 hover:scale-105 transform ${isVisible
                                                                ? 'opacity-100 translate-y-0'
                                                                : 'opacity-0 translate-y-4'
                                                                }`}
                                                            style={{
                                                                transitionDelay: isVisible ? `${1000 + skillIndex * 100}ms` : '0ms'
                                                            }}
                                                        >
                                                            <div className="text-2xl ">
                                                                <img src={skill.icon} alt="Skill-Icon" className='h-8 w-8 sm:h-10 sm:w-10 bg-background rounded p-1 m-4' />
                                                            </div>
                                                            <div className='flex flex-col justify-center ml:3 sm:ml-4'>
                                                                <div className={`text-sm font-medium`}>
                                                                    {skill.name}
                                                                </div>
                                                                <div className={`mt-2 text-xs text ${skill.color}`}>
                                                                    {skill.Level}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    )
                                                })}
                                            </div>
                                        </TabsContent>
                                    )
                                })}
                            </Tabs>
                        </div>
                    </div>
                </div>
            </Element>
        </div>
    )
}

export default About;