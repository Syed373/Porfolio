import React, { useState, useEffect } from 'react';
import Github from '../icons/Github-icon';
import LinkedIn from '../icons/LinkedIn-icon';
import X from '../icons/X-icon';
import GlitchText from './ui/GlitchText';
import { Link, Element } from 'react-scroll';

// Types
interface SocialLink {
  name: string;
  icon: React.ComponentType<any>;
  href: string;
  label: string;
}

interface HomeProps {
  profileImage?: string;
  name?: string;
  customSentences?: string[];
}

const Home: React.FC<HomeProps> = ({
  profileImage = '/SU.png',
  name = "Syed Umair",
  customSentences = ["Frontend", "Backend", "Fullstack"],
  
}) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [imageLoaded, setImageLoaded] = useState<boolean>(false);

  // Social links configuration
  const socialLinks: SocialLink[] = [
    {
      name: 'github',
      icon: Github,
      href: 'https://github.com/syed373',
      label: 'GitHub Profile'
    },
    {
      name: 'x',
      icon: X,
      href: 'https://x.com/syed373',
      label: 'X (Twitter) Profile'
    },
    {
      name: 'linkedin',
      icon: LinkedIn,
      href: 'https://linkedin.com/in/syeedumair',
      label: 'LinkedIn Profile'
    }
  ];

  // Animation on component mount
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  // Handle image load
  const handleImageLoad = (): void => {
    setImageLoaded(true);
  };

  // Handle image error
  const handleImageError = (): void => {
    console.warn('Profile image failed to load');
  };

  // Handle social link clicks
  const handleSocialClick = (link: SocialLink): void => {
    window.open(link.href, '_blank', 'noopener,noreferrer');
  };

  return (
    <Element name="Home" className="max-w-3xl pb-20 mx-auto font-robo border-1 border-white/30 shadow-sm shadow-white/50 h-fit mt-18 rounded-xl backdrop-blur-sm ">
      <main className="relative z-10 min-h-130 flex items-center mt-10 lg:mt-0 justify-center px-4 sm:px-6 lg:px-8">
        <div className={`
        max-w-2xl mx-auto w-full
        transform transition-all duration-1000 ease-out
        ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}
      `}>

          {/* Social Links */}
          <div className="flex justify-end items-center mb-10 w-full lg:mt-12">
            <nav
              className="flex items-center space-x-4 lg:space-x-6"
              aria-label="Social media links"
            >
              {socialLinks.map((link, index) => {
                const IconComponent = link.icon;
                return (
                  <button
                    key={link.name}
                    onClick={() => handleSocialClick(link)}
                    className={`
                    p-3 rounded-full transition-all duration-300 ease-out
                    hover:scale-110 hover:bg-white/10 hover:shadow-lg
                    focus:outline-none focus:ring-2 focus:ring-white/20
                    transform hover:-translate-y-1 cursor-pointer
                    ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}
                  `}
                    style={{
                      transitionDelay: `${index * 0.1}s`
                    }}
                    aria-label={link.label}
                  >
                    <IconComponent className="w-6 h-6 lg:w-7 lg:h-7 text-gray-300 hover:text-white transition-colors duration-300" />
                  </button>
                );
              })}
            </nav>
          </div>

          {/* Main Content */}
          <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-16">
            {/* Profile Image */}
            <div className={`
            relative flex-shrink-0 mb-4
            transform transition-all duration-1000 ease-out
            ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}
          `}>
              <div className="relative">
                {/* Image container with loading state */}
                <div className={`
                w-48 h-48 lg:w-56 lg:h-56 rounded-full overflow-hidden
                bg-gradient-to-br from-white via-[#c2c2c2] to-[#b1b1b1]
                p-1 shadow-2xl shadow-indigo-500/25
                transform transition-all duration-500
                ${imageLoaded ? 'scale-100' : 'scale-95'}
              `}>
                  <div className="w-full h-full bg-gray-800 rounded-full overflow-hidden">
                    <img
                      src={profileImage}
                      alt={`${name}'s profile picture`}
                      className={`
                      w-full h-full object-cover
                      transition-all duration-500
                      ${imageLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-105'}
                    `}
                      onLoad={handleImageLoad}
                      onError={handleImageError}
                    />
                    {/* Loading skeleton */}
                    {!imageLoaded && (
                      <div className="absolute inset-0 bg-gray-700 animate-pulse rounded-full" />
                    )}
                  </div>
                </div>

                {/* Decorative elements */}
                <div className="absolute -inset-4 bg-gradient-to-r from-white via-[#c2c2c2] to-[#b1b1b1] rounded-full opacity-20 animate-pulse" />
                <div className="absolute -inset-8 bg-gradient-to-r from-white via-[#c2c2c2] to-[#b1b1b1] rounded-full opacity-10 animate-pulse" style={{ animationDelay: '1s' }} />
              </div>


            </div>

            {/* Text Content */}

            <div className={`
            flex-1 text-center lg:text-left
            transform transition-all duration-1000 ease-out
            ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}
          `}>
              {/* Greeting */}
              <h1 className="font-robo text-[#d9d9d9] text-2xl lg:text-3xl xl:text-4xl font-light mb-6 lg:mb-8">
                <span className="inline-block animate-fade-in-up">Hi, I’m</span>
                <span className="block text-5xl font-bold bg-gradient-to-r from-primary-foreground to-chart-2 hover:bg-gradient-to-r hover:from-chart-2 hover:to-primary-foreground bg-clip-text text-transparent mt-2 py-1 transition-all duration-300 ">
                  {name}
                </span>
              </h1>

              {/* Role with GlitchText */}
              <div className="text-lg lg:text-xl xl:text-2xl text-[#d9d9d9] font-robo">
                <span className="inline-block">A</span>
                <span className="mx-2 text-3xl lg:mx-3 inline-block">
                  <GlitchText
                    Sentences={customSentences}
                    time = {3000}
                  />
                </span>
                <span className="inline-block">Developer</span>
              </div>

              {/* Subtitle/Description */}
              <p className={`
              mt-6 h-32 lg:mt-8 text-gray-400 text-base lg:text-lg max-w-2xl
              transform transition-all duration-1000 ease-out
              ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}
            `} style={{ transitionDelay: '0.6s' }}>
                Hey there! I’m Umair, a Full Stack Developer who loves building fast, responsive frontends with React and robust backends with Node.js & PostgreSQL.
              </p>

              {/* CTA Buttons */}
              <div className={`
              mt-8 lg:mt-10 flex flex-col sm:flex-row sm:justify-center gap-4 sm:gap-6
              transform transition-all duration-1000 ease-out
              ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'}
            `} style={{ transitionDelay: '0.8s' }}>
                <Link to="Projects" smooth={true} duration={500} className="text-center px-8 py-3 text-foreground hover:text-background hover:bg-foreground bg-background rounded-full font-semibold hover:shadow-lg hover:shadow-foreground/10 transition-all duration-300 hover:-translate-y-1 focus:outline-none focus:ring-2">
                  View My Work
                </Link>
                <Link to="Contact" smooth={true} duration={500} className="text-center px-8 py-3 border-2 text-background hover:text-foreground border-background rounded-full font-semibold hover:bg-background transition-all duration-300 hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-background">
                  Get In Touch
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Element>
  );
};

export default Home;