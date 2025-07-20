import GlitchText from './ui/GlitchText'

function About() {
    const customAbout = [
        "Hey there! I’m Umair, a Full Stack Developer who loves building fast, responsive frontends with React and robust backends with Node.js & PostgreSQL.",
        "Full Stack Developer specializing in React, Node.js, and modern backend architectures. I build scalable, clean, and efficient web apps end-to-end.",
        "Turning ideas into scalable products with React, Node, and TypeScript. Full Stack Developer. Problem Solver. Builder.",
        "Building performant, scalable, and beautiful web apps with modern technologies. From design systems to backend APIs - I handle it all.",
        "Coding pixels to perfection on the frontend, and engineering reliable APIs on the backend. I turn ideas into reality with React, Node, and TypeScript.",
        "“Code. Build. Deploy.” - Full Stack Developer crafting interactive frontends with React and scalable backends with Node, Prisma, and PostgreSQL."
    ]
    return (
        <div className="max-w-3xl py-4 px-4 mx-auto border-1 font-robo text-background border-white/30 shadow-sm shadow-white/50 h-fit my-2 rounded-xl backdrop-blur-sm bg-[#c2c2c20e]">
            <div className='bg-amber-500 h-12'>

            </div>
            <div className='flex'>
                <div className='bg-cyan-600 w-20 '></div>
                <div className='px-10'>
                    <div className='flex justify-center items-center text-foreground my-8 h-9 '>
                        <h1 className='bg-background px-2 md:px-10 py-1 font-bold rounded-lg text-4xl'>About Me</h1>
                    </div>
                    <div className='text-center text-lg max-w-lg py-4 mb-4 min-h-40'>
                        <GlitchText
                            Sentences={customAbout}
                            time={5000}
                        />
                    </div>
                </div>
                <div className='bg-cyan-600 w-20'></div>
            </div>
            <div className='bg-amber-500 h-12'>

            </div>
        </div>
    )
}

export default About