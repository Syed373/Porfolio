import {useEffect, useState} from 'react'
import Home from '../icons/Home-icon'
import Project from '../icons/Projects-icon'
import Contact from '../icons/Contact-icon'

const LinkStyle = 'p- rounded-full hover:bg-white/10 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-white/20 '

const Liststyle = 'flex flex-col justify-center items-center transition-all duration-300 ease-out transform hover:translate-y-1 hover:scale-110'

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
    <div className={`fixed inset-0 z-20 transform transition-all duration-300 ease-in-out ${isScrolled ? 'max-w-sm rounded-full bg-black' : ' rounded-xl max-w-3xl bg-[#c2c2c220]'} flex justify-center items-center mx-auto border-1 border-white/30 shadow-sm shadow-white/50 h-fit my-2  backdrop-blur-2xl `}>
      <div className='w-full flex justify-center items-center'>
        <ul className='h-12 mt-4 px-2 rounded-full w-fit list-none flex justify-center items-center gap-8 text-primary-foreground'>
          <li className={Liststyle}><a className={LinkStyle} href="/"><Home /></a>Home</li>
          <li className={Liststyle}><a className={LinkStyle} href="/work"><Project /></a>Projects</li>
          <li className={Liststyle}><a className={LinkStyle} href="/contact"><Contact /></a>Connect</li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar