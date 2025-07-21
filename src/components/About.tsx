import { Code, Database, Globe, Palette, Server, Zap } from 'lucide-react';
import GlitchText from './ui/GlitchText';
import { Element } from 'react-scroll';

interface SkillsType {
    name: string;
    icon: string;            //React.ComponentType<any> |
    category: string;
    color: string;
    bgColor: string;
}

function About() {
    const customAbout = [
        "Hey there! I'm Umair, a Full Stack Developer who loves building fast, responsive frontends with React and robust backends with Node.js & PostgreSQL.",
        "Full Stack Developer specializing in React, Node.js, and modern backend architectures. I build scalable, clean, and efficient web apps end-to-end.",
        "Turning ideas into scalable products with React, Node, and TypeScript. Full Stack Developer. Problem Solver. Builder.",
        "Building performant, scalable, and beautiful web apps with modern technologies. From design systems to backend APIs - I handle it all.",
        "Coding pixels to perfection on the frontend, and engineering reliable APIs on the backend. I turn ideas into reality with React, Node, and TypeScript.",
        '"Code. Build. Deploy." - Full Stack Developer crafting interactive frontends with React and scalable backends with Node, Prisma, and PostgreSQL.'
    ];

    // Skills configuration - easily extensible
    const skillsConfig: SkillsType[] = [
        {
            name: "HTML5",
            icon: "🌐",
            category: "frontend",
            color: "text-orange-500",
            bgColor: "bg-orange-500/10 hover:bg-orange-500/20"
        },
        {
            name: "CSS3",
            icon: "🎨",
            category: "frontend",
            color: "text-blue-500",
            bgColor: "bg-blue-500/10 hover:bg-blue-500/20"
        },
        {
            name: "JavaScript",
            icon: "⚡",
            category: "frontend",
            color: "text-yellow-500",
            bgColor: "bg-yellow-500/10 hover:bg-yellow-500/20"
        },
        {
            name: "TypeScript",
            icon: "📘",
            category: "frontend",
            color: "text-blue-600",
            bgColor: "bg-blue-600/10 hover:bg-blue-600/20"
        },
        {
            name: "React",
            icon: "⚛️",
            category: "frontend",
            color: "text-cyan-500",
            bgColor: "bg-cyan-500/10 hover:bg-cyan-500/20"
        },
        {
            name: "Node.js",
            icon: "🟢",
            category: "backend",
            color: "text-green-500",
            bgColor: "bg-green-500/10 hover:bg-green-500/20"
        },
        {
            name: "Express.js",
            icon: "🚀",
            category: "backend",
            color: "text-gray-400",
            bgColor: "bg-gray-400/10 hover:bg-gray-400/20"
        },
        {
            name: "MongoDB",
            icon: "🍃",
            category: "database",
            color: "text-green-600",
            bgColor: "bg-green-600/10 hover:bg-green-600/20"
        },
        {
            name: "Tailwind CSS",
            icon: "🎯",
            category: "styling",
            color: "text-teal-500",
            bgColor: "bg-teal-500/10 hover:bg-teal-500/20"
        },
        {
            name: "Bootstrap",
            icon: "🟣",
            category: "styling",
            color: "text-purple-500",
            bgColor: "bg-purple-500/10 hover:bg-purple-500/20"
        }
    ];

    // Group skills by category for organized display
    // const groupedSkills = skillsConfig.reduce((acc, skill) => {
    //     if (!acc[skill.category]) {
    //         acc[skill.category] = [];
    //     }
    //     acc[skill.category].push(skill);
    //     return acc;
    // }, {});

    // const categoryLabels = {
    //     frontend: "Frontend",
    //     backend: "Backend",
    //     database: "Database",
    //     styling: "Styling"
    // };

    return (
        <Element name="About" className="max-w-3xl py-6 px-4 mx-auto border font-robo text-background border-white/30 shadow-sm shadow-white/50 h-fit my-2 rounded-xl backdrop-blur-sm bg-[#c2c2c20e]">
            <div className='p-2 flex flex-col items-center'>
                {/* About Me Section */}
                <h1 className="text-4xl text-foreground w-full font-medium bg-background py-2 rounded-lg mx-8 text-center mb-8">
                    About Me
                </h1>
                
                <div className='text-center text-lg max-w-xl pt-4 min-h-40'>
                    <GlitchText
                        Sentences={customAbout}
                        time={5000}
                    />
                </div>

                {/* Skills Section */}
                <div className="mt-8">
                    <h2 className="text-3xl text-foreground font-medium text-center mb-8 bg-background/50 py-2 rounded-lg backdrop-blur-sm">
                        Tech Stack
                    </h2>
                    
                    {/* Skills Grid - Organized by Category */}
                    {/* <div className="space-y-8">
                        {Object.entries(groupedSkills).map(([category, skills]) => (
                            <div key={category} className="space-y-4">
                                <h3 className="text-xl font-medium text-foreground/80 text-center capitalize">
                                    {categoryLabels[category]}
                                </h3>
                                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                                    {skills.map((skill) => (
                                        <div
                                            key={skill.name}
                                            className={`
                                                ${skill.bgColor} 
                                                border border-white/20 
                                                rounded-lg p-4 
                                                text-center 
                                                transition-all duration-300 
                                                hover:scale-105 
                                                hover:shadow-lg 
                                                hover:shadow-white/20
                                                cursor-pointer
                                                group
                                            `}
                                        >
                                            <div className="text-3xl mb-2 group-hover:scale-110 transition-transform duration-300">
                                                {skill.icon}
                                            </div>
                                            <div className={`${skill.color} font-medium text-sm group-hover:text-white transition-colors duration-300`}>
                                                {skill.name}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div> */}

                    {/* Alternative: All Skills in One Grid (uncomment if preferred) */}
                    
                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 mt-8">
                        {skillsConfig.map((skill) => (
                            <div
                                key={skill.name}
                                className={`
                                    ${skill.bgColor} 
                                    border border-white/20 
                                    rounded-lg p-4 
                                    text-center 
                                    transition-all duration-300 
                                    hover:scale-105 
                                    hover:shadow-lg 
                                    hover:shadow-white/20
                                    cursor-pointer
                                    group
                                `}
                            >
                                <div className="text-3xl mb-2 group-hover:scale-110 transition-transform duration-300">
                                    {skill.icon}
                                </div>
                                <div className={`${skill.color} font-medium text-sm group-hover:text-white transition-colors duration-300`}>
                                    {skill.name}
                                </div>
                            </div>
                        ))}
                    </div>
                   
                </div>

                {/* Quick Stats or Additional Info */}
                <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="text-center p-4 bg-white/5 rounded-lg border border-white/10">
                        <div className="text-2xl font-bold text-foreground">Full Stack</div>
                        <div className="text-sm text-foreground/70">End-to-End Development</div>
                    </div>
                    <div className="text-center p-4 bg-white/5 rounded-lg border border-white/10">
                        <div className="text-2xl font-bold text-foreground">Modern Tech</div>
                        <div className="text-sm text-foreground/70">Latest Technologies</div>
                    </div>
                    <div className="text-center p-4 bg-white/5 rounded-lg border border-white/10">
                        <div className="text-2xl font-bold text-foreground">Scalable</div>
                        <div className="text-sm text-foreground/70">Production Ready</div>
                    </div>
                </div>
            </div>
        </Element>
    )
}

export default About;