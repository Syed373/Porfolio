import React, { useState, useEffect } from 'react';
import Github from '../icons/Github-icon';
import LinkedIn from '../icons/LinkedIn-icon';
import X from '../icons/X-icon';
import GlitchText from './ui/GlitchText';
import { Link, Element } from 'react-scroll';

interface SocialLink {
  name: string;
  icon: React.ComponentType<any>;
  href: string;
  label: string;
}

interface HomeProps {
  src?: string;
  name?: string;
  customSentences?: string[];
}

const Home: React.FC<HomeProps> = ({
  src = '/Profile_img.png',
  name = "Syed Umair",
  customSentences = ["Frontend", "Backend", "Fullstack"],
}) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [isLoaded, setIsLoaded] = useState(false);

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
      href: 'https://x.com/syeed373',
      label: 'X (Twitter) Profile'
    },
    {
      name: 'linkedin',
      icon: LinkedIn,
      href: 'https://linkedin.com/in/syed373',
      label: 'LinkedIn Profile'
    }
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  const handleSocialClick = (link: SocialLink): void => {
    window.open(link.href, '_blank', 'noopener,noreferrer');
  };

  return (
    <Element name="Home" className="max-w-3xl pb-20 mx-auto font-robo border border-white/30 shadow-sm shadow-white/50 h-fit mt-24 sm:mt-18 rounded-xl backdrop-blur-sm">
      <main className="relative z-10 min-h-130 flex items-center mt-0 justify-center px-4 sm:px-6 lg:px-8">
        <div className={`
          max-w-2xl mx-auto w-full
          transform transition-all duration-1000 ease-out
          ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}
        `}>

          <div className="flex justify-end items-center mb-8 lg:mb-10 w-full lg:mt-12">
            <nav
              className="flex items-center space-x-2 sm:space-x-4 lg:space-x-6"
              aria-label="Social media links"
            >
              {socialLinks.map((link, index) => {
                const IconComponent = link.icon;
                return (
                  <button
                    key={link.name}
                    onClick={() => handleSocialClick(link)}
                    className={`
                      p-2 sm:p-3 rounded-full transition-all duration-300 ease-out
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
                    <IconComponent className="w-5 sm:w-6 h-5 sm:h-6 lg:w-7 lg:h-7 text-gray-300 hover:text-white transition-colors duration-300" />
                  </button>
                );
              })}
            </nav>
          </div>

          <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-16">

            <div className="relative group flex-shrink-0">
              <div className="absolute -inset-2 sm:-inset-4 rounded-full opacity-75 group-hover:opacity-100 blur-lg group-hover:blur-xl transition-all duration-500 animate-pulse bg-gradient-to-r from-white via-gray-300 to-white"></div>
              <div className="absolute -inset-1 sm:-inset-2 rounded-full opacity-50 group-hover:opacity-75 blur transition-all duration-300 bg-gradient-to-r from-gray-200 to-white"></div>

              <div className="relative">
                <div className="w-40 h-40 sm:w-48 sm:h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 backdrop-blur-sm shadow-2xl transform group-hover:scale-105 transition-all duration-500 ease-out border-white/20 shadow-white/10">
                  <img
                    src={src}
                    alt="Profile Image"
                    className={`w-full h-full object-cover transition-all duration-700 ${isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-110'
                      } group-hover:brightness-110 group-hover:contrast-105`}
                    onLoad={() => setIsLoaded(true)}
                  />
                </div>

                <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 delay-100 animate-bounce bg-white"></div>
                <div className="absolute -bottom-2 -left-2 w-4 h-4 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 delay-200 animate-bounce bg-gray-300"></div>
                <div className="absolute top-4 -left-4 w-3 h-3 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 delay-300 animate-bounce bg-gray-100"></div>
              </div>
            </div>

            <div className={`
              flex-1 text-center lg:text-left
              transform transition-all duration-1000 ease-out
              ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}
            `}>

              <h1 className="font-robo text-[#d9d9d9] text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-light mb-4 sm:mb-6 lg:mb-8">
                <span className="inline-block animate-fade-in-up">Hi, I'm</span>
                <span className="block text-4xl sm:text-5xl font-bold bg-gradient-to-r from-primary-foreground to-chart-2 hover:bg-gradient-to-r hover:from-chart-2 hover:to-primary-foreground bg-clip-text text-transparent mt-1 sm:mt-2 py-1 transition-all duration-300">
                  {name}
                </span>
              </h1>

              <div className="text-lg sm:text-xl xl:text-2xl text-[#d9d9d9] font-robo">
                <span className="inline-block">A</span>
                <span className="mx-2 text-2xl sm:text-3xl lg:mx-3 inline-block">
                  <GlitchText
                    Sentences={customSentences}
                    time={3000}
                  />
                </span>
                <span className="inline-block">Developer</span>
              </div>

              <p className={`
                mt-6 lg:mt-8 text-gray-400 text-base lg:text-lg max-w-2xl
                transform transition-all duration-1000 ease-out
                ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}
              `} style={{ transitionDelay: '0.6s' }}>
                Hey there! I'm Umair, a Full Stack Developer who loves building fast, responsive frontends with React and robust backends with Node.js & PostgreSQL.
              </p>

              <div className={`
                mt-8 lg:mt-10 flex flex-col sm:flex-row lg:justify-start justify-center gap-4 sm:gap-6
                transform transition-all duration-1000 ease-out
                ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'}
              `} style={{ transitionDelay: '0.8s' }}>
                <Link
                  to="Projects"
                  smooth={true}
                  duration={500}
                  className="text-center px-8 py-3 text-foreground hover:text-background hover:bg-foreground bg-background rounded-full font-semibold hover:shadow-lg hover:shadow-foreground/10 transition-all duration-300 hover:-translate-y-1 hover:border-2 hover:border-background cursor-pointer"
                >
                  View My Work
                </Link>
                <Link
                  to="Contact"
                  smooth={true}
                  duration={500}
                  className="text-center px-8 py-3 text-background hover:text-foreground border-2 border-background rounded-full font-semibold hover:bg-background transition-all duration-300 hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-background cursor-pointer"
                >
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