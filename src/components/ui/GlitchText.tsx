import React, { useState, useEffect } from 'react';

function GlitchText() {
    const funSentences = [
        "Beep boop! I'm loading my personality...",
        "Error 404: Boring detected. Fun mode activated!",
        "BTW, Hover over the logo for lil fun :)",
        "Achievement unlocked: Maximum goofiness level! 🎮",
        "Warning: Contains 100% pure awesomeness! 🔥"
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [isGlitching, setIsGlitching] = useState(false);
    const [displayText, setDisplayText] = useState(funSentences[0]);

    useEffect(() => {
        const interval = setInterval(() => {
            // Start glitch effect
            setIsGlitching(true);

            // Generate robotic glitch text
            const roboticChars = '!@#$%10101^&*()_+-=[1010110]{}|;:,10110.<>?~`';
            const originalText = funSentences[currentIndex];

            // Multi-phase robotic glitch animation
            let glitchStep = 0;
            const glitchInterval = setInterval(() => {
                if (glitchStep < 12) {
                    let glitchedText;

                    if (glitchStep < 4) {
                        // Phase 1: Convert to binary-like characters
                        glitchedText = originalText
                            .split('')
                            .map((char, index) => {
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
                            .map((char, index) => {
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
                            .map((char, index) => {
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
                    const nextIndex = (currentIndex + 1) % funSentences.length;
                    setCurrentIndex(nextIndex);
                    setDisplayText(funSentences[nextIndex]);
                    setIsGlitching(false);
                }
            }, 80); // Slightly faster for more robotic feel

        }, 3000);

        return () => clearInterval(interval);
    }, [currentIndex, funSentences]);


    return (

        <div className="relative">
            <p className="transition-all duration-200 ease-linear">
                {displayText}
            </p>
        </div>

    );
}

export default GlitchText