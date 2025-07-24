// src/components/Navbar.tsx

import { useEffect, useState } from 'react'
import HomeIcon from '../icons/Home-icon'
import ProjectIcon from '../icons/Projects-icon'
import { Link } from 'react-scroll';
import AboutIcon from '../icons/About-icon';
import ContactIcon from '@/icons/Contact-icon';

// MODIFIED: Simplified style variables for clarity
const linkStyle = 'flex flex-col justify-center items-center cursor-pointer'
const listItemStyle = 'flex flex-col justify-center items-center transition-all duration-300 ease-out transform hover:-translate-y-1 hover:scale-105'

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // CHANGED: Adjusted scroll threshold to be a bit more standard
      const scrollHeight = window.scrollY
      if (scrollHeight >= 50) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    // MODIFIED: Added px-4 for padding on mobile, changed max-w-sm to max-w-xs for a tighter look when scrolled
    <div className={`fixed inset-x-0 top-0 z-20 transform transition-all duration-300 ease-in-out ${isScrolled ? 'max-w-xs rounded-full bg-black' : 'max-w-3xl rounded-xl'} flex justify-center items-center mx-auto border border-white/30 shadow-sm shadow-white/50 h-14 my-2 backdrop-blur-2xl px-4`}>
      <div className='w-full flex justify-center items-center'>
        {/* MODIFIED: Adjusted gap for mobile vs desktop */}
        <ul className='h-12 w-full list-none flex justify-around sm:justify-center items-center sm:gap-8 text-primary-foreground'>
          
          <li className={listItemStyle}>
            <Link className={linkStyle} to="Home" smooth={true} duration={500}>
              <HomeIcon />
              {/* CHANGED: Text is hidden on extra-small screens, appears on sm+ */}
              <span className="hidden sm:inline text-xs mt-1">Home</span>
            </Link>
          </li>
          
          <li className={listItemStyle}>
            <Link className={linkStyle} to="About" smooth={true} duration={500}>
              <AboutIcon />
              {/* CHANGED: Text is hidden on extra-small screens, appears on sm+ */}
              <span className="hidden sm:inline text-xs mt-1">About</span>
            </Link>
          </li>

          <li className={listItemStyle}>
            <Link className={linkStyle} to="Projects" smooth={true} duration={500}>
              <ProjectIcon />
              {/* CHANGED: Text is hidden on extra-small screens, appears on sm+ */}
              <span className="hidden sm:inline text-xs mt-1">Work</span>
            </Link>
          </li>

          <li className={listItemStyle}>
            <Link className={linkStyle} to="Contact" smooth={true} duration={500}>
              <ContactIcon />
              {/* CHANGED: Text is hidden on extra-small screens, appears on sm+ */}
              <span className="hidden sm:inline text-xs mt-1">Connect</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar