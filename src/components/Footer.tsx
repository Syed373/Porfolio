import { Link } from "react-scroll"

function Footer() {
  return (
    <div className='w-full max-w-3xl pb-4  mx-auto border border-white/30 shadow-sm shadow-white/50 my-2 rounded-xl backdrop-blur-sm px-4 sm:px-6 lg:px-8 font-robo text-background sm:flex items-center justify-center'>
      <div className='sm:w-1/2'>
        <div className='text-start p-4 text-xl underline underline-offset-8'>Quick Links</div>
        <div className='space-x-8 flex flex-col justify-center items-start px-4'>
          <Link to="Home" smooth={true} duration={500} className='text-background/50 hover:text-background transition-all duration-300 ease-in-out'>Home</Link>
          <Link to="About" smooth={true} duration={500} className='text-background/50 hover:text-background transition-all duration-300 ease-in-out'>About</Link>
          <Link to="Projects" smooth={true} duration={500} className='text-background/50 hover:text-background transition-all duration-300 ease-in-out'>Projects</Link>
          <Link to="Contact" smooth={true} duration={500} className='text-background/50 hover:text-background transition-all duration-300 ease-in-out'>Contact</Link>
        </div>
      </div>
        <div className='bg-background/20 mt-8 mb-2 sm:h-40 h-0.25 max-w-lg ml-4 mr-2 sm:w-0.25' />
        <div className='text-center text-sm text-background/50 space-y-4 mx-4 mt-6'>
          <h1 className='flex justify-center items-center'>© {new Date().getFullYear()} Syed Umair. All rights reserved.</h1>
          <h1>Built with React, Typescript, TailwindCSS, shadcn/ui and Web3forms</h1>
        </div>
    </div>
  )
}

export default Footer