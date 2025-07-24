import { Link } from "react-scroll"
import { useState, useEffect, useRef } from "react"

function Footer() {
  const [isVisible, setIsVisible] = useState(false)
  const footerRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    )

    if (footerRef.current) {
      observer.observe(footerRef.current)
    }

    return () => {
      if (footerRef.current) {
        observer.unobserve(footerRef.current)
      }
    }
  }, [])

  return (
    <div
      ref={footerRef}
      className={`w-full max-w-3xl pb-4 mx-auto border border-white/30 shadow-sm shadow-white/50 my-2 rounded-xl backdrop-blur-sm px-4 sm:px-6 lg:px-8 font-robo text-background sm:flex items-center justify-center transform transition-all duration-1000 ease-out ${isVisible
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-8'
        }`}
    >
      <div className={`sm:w-1/2 flex flex-col items-center sm:items-start transform transition-all duration-1000 delay-200 ease-out ${isVisible
          ? 'opacity-100 translate-x-0'
          : 'opacity-0 -translate-x-4'
        }`}>
        <div className='text-start p-4 text-xl underline underline-offset-8'>Quick Links</div>
        <div className='space-y-3 sm:space-y-0 sm:space-x-8 flex flex-col justify-center items-center sm:items-start px-4'>
          <Link
            to="Home"
            smooth={true}
            duration={500}
            className={`text-background/50 hover:text-background transition-all duration-300 ease-in-out transform ${isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-2'
              }`}
            style={{ transitionDelay: isVisible ? '400ms' : '0ms' }}
          >
            Home
          </Link>
          <Link
            to="About"
            smooth={true}
            duration={500}
            className={`text-background/50 hover:text-background transition-all duration-300 ease-in-out transform ${isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-2'
              }`}
            style={{ transitionDelay: isVisible ? '500ms' : '0ms' }}
          >
            About
          </Link>
          <Link
            to="Projects"
            smooth={true}
            duration={500}
            className={`text-background/50 hover:text-background transition-all duration-300 ease-in-out transform ${isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-2'
              }`}
            style={{ transitionDelay: isVisible ? '600ms' : '0ms' }}
          >
            Projects
          </Link>
          <Link
            to="Contact"
            smooth={true}
            duration={500}
            className={`text-background/50 hover:text-background transition-all duration-300 ease-in-out transform ${isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-2'
              }`}
            style={{ transitionDelay: isVisible ? '700ms' : '0ms' }}
          >
            Contact
          </Link>
        </div>
      </div>
      <div className={`bg-background/20 mt-8 mb-2 sm:h-40 h-[1px] w-full sm:w-[1px] sm:ml-4 sm:mr-2 transform transition-all duration-1000 delay-300 ease-out ${isVisible
          ? 'opacity-100 scale-y-100'
          : 'opacity-0 scale-y-0'
        }`} />
      <div className={`sm:w-1/2 text-center sm:text-left text-sm text-background/50 space-y-4 mx-4 mt-6 transform transition-all duration-1000 delay-400 ease-out ${isVisible
          ? 'opacity-100 translate-x-0'
          : 'opacity-0 translate-x-4'
        }`}>
        <h1 className='flex justify-center sm:justify-start items-center'>© {new Date().getFullYear()} Syed Umair. All rights reserved.</h1>
        <h1>Built with React, Typescript, TailwindCSS, shadcn/ui and Web3forms</h1>
      </div>
    </div>
  )
}

export default Footer