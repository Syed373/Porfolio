import { useState, useEffect } from 'react';

type GlitchTextProps = {
  Sentences: string[];
  time: number;
};

function GlitchText({Sentences, time}: GlitchTextProps) {

    const [currentIndex, setCurrentIndex] = useState(0);
    const [, setIsGlitching] = useState(false);
    const [displayText, setDisplayText] = useState(Sentences[0]);

    useEffect(() => {
        const interval = setInterval(() => {
            // Start glitch effect
            setIsGlitching(true);

            // Generate robotic glitch text
            const roboticChars = '!@#$%^&*FBASDGHJKLOPIYTREWQZXCVNM';
            const originalText = Sentences[currentIndex];

            // Multi-phase robotic glitch animation
            let glitchStep = 0;
            const glitchInterval = setInterval(() => {
                if (glitchStep < 12) {
                    let glitchedText;

                    if (glitchStep < 4) {
                        // Phase 1: Convert to binary-like characters
                        glitchedText = originalText
                            .split('')
                            .map((char) => {
                                if (Math.random() < 0.7 && char !== ' ') {
                                    return roboticChars[Math.floor(Math.random() * roboticChars.length)];
                                }
                                return char === ' ' ? ' ' : roboticChars[Math.floor(Math.random() * roboticChars.length)];
                            })
                            .join('');
                    } else if (glitchStep < 8) {
                        // Phase 2: Mix of original and binary
                        glitchedText = originalText
                            .split('')
                            .map((char) => {
                                if (Math.random() < 0.4 && char !== ' ') {
                                    return roboticChars[Math.floor(Math.random() * roboticChars.length)];
                                }
                                return char;
                            })
                            .join('');
                    } else {
                        // Phase 3: Mostly original with occasional glitches
                        glitchedText = originalText
                            .split('')
                            .map((char) => {
                                if (Math.random() < 0.1 && char !== ' ') {
                                    return roboticChars[Math.floor(Math.random() * roboticChars.length)];
                                }
                                return char;
                            })
                            .join('');
                    }

                    setDisplayText(glitchedText);
                    glitchStep++;
                } else {
                    // End glitch, show new text
                    clearInterval(glitchInterval);
                    const nextIndex = (currentIndex + 1) % Sentences.length;
                    setCurrentIndex(nextIndex);
                    setDisplayText(Sentences[nextIndex]);
                    setIsGlitching(false);
                }
            }, 80); // Slightly faster for more robotic feel

        }, time);

        return () => clearInterval(interval);
    }, [currentIndex, Sentences]);


    return (

        <div className="relative">
            <p className="transition-all duration-300 ease-linear">
                {displayText}
            </p>
        </div>

    );
}

export default GlitchText