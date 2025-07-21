import {useEffect, useState} from 'react'
import Home from '../icons/Home-icon'
import Project from '../icons/Projects-icon'
import { Link } from 'react-scroll';
import About from '../icons/About-icon';
import Contact from '@/icons/Contact-icon';

const LinkStyle = 'flex flex-col justify-center items-center'

const Liststyle = 'flex flex-col justify-center items-center transition-all duration-300 ease-out transform hover:translate-y-1 hover:scale-105'

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  
  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = window.scrollY
      if (scrollHeight >= 56) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    
    // Cleanup function to remove event listener
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])
  
  return (
    <div className={`fixed inset-0 z-20 transform transition-all duration-300 ease-in-out ${isScrolled ? 'max-w-sm rounded-full bg-black' : ' rounded-xl max-w-3xl'} flex justify-center items-center mx-auto border-1 border-white/30 shadow-sm shadow-white/50 max-h-14 my-2 backdrop-blur-2xl `}>
      <div className='w-full flex justify-center items-center'>
        <ul className='h-12 mt-1 rounded-full w-fit list-none flex justify-center items-center gap-8 text-primary-foreground'>
          <li className={Liststyle}><Link className={LinkStyle} to="Home" smooth={true} duration={500}><Home />Home</Link></li>
          <li className={Liststyle}><Link className={LinkStyle} to="About" smooth={true} duration={500}><About />About</Link></li>
          <li className={Liststyle}><Link className={LinkStyle} to="Projects" smooth={true} duration={500}><Project />Work</Link></li>
          <li className={Liststyle}><Link className={LinkStyle} to="Contact" smooth={true} duration={500}><Contact />Connect</Link></li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar