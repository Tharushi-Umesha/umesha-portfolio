import { useState, useEffect } from "react"
import { Sparkles, Code, Rocket } from "lucide-react"

export const LoadingScreen = ({ onComplete }) => {
    const [text, setText] = useState("");
    const [showButton, setShowButton] = useState(false);
    const [particles, setParticles] = useState([]);
    const fullText = "<Hello World />"

    useEffect(() => {
        // Generate random particles
        const newParticles = Array.from({ length: 20 }, (_, i) => ({
            id: i,
            x: Math.random() * 100,
            y: Math.random() * 100,
            size: Math.random() * 4 + 2,
            duration: Math.random() * 3 + 2,
            delay: Math.random() * 2
        }));
        setParticles(newParticles);
    }, []);

    useEffect(() => {
        let index = 0;
        const interval = setInterval(() => {
            setText(fullText.substring(0, index));
            index++;

            if (index > fullText.length) {
                clearInterval(interval);
                setTimeout(() => {
                    setShowButton(true);
                }, 500);
            }
        }, 100);
        return () => clearInterval(interval);
    }, [onComplete])

    return (
        <div className="fixed inset-0 z-50 bg-gradient-to-br from-gray-900 via-black to-gray-900 text-gray-100 flex flex-col items-center justify-center overflow-hidden">
            {/* Animated particles */}
            {particles.map((particle) => (
                <div
                    key={particle.id}
                    className="absolute rounded-full bg-blue-500 opacity-20"
                    style={{
                        left: `${particle.x}%`,
                        top: `${particle.y}%`,
                        width: `${particle.size}px`,
                        height: `${particle.size}px`,
                        animation: `float ${particle.duration}s ease-in-out infinite`,
                        animationDelay: `${particle.delay}s`
                    }}
                />
            ))}

            {/* Glowing orb effect */}
            <div className="absolute w-96 h-96 bg-blue-500 rounded-full blur-[120px] opacity-20 animate-pulse" />
            <div className="absolute w-72 h-72 bg-purple-600 rounded-full blur-[100px] opacity-15 animate-pulse" style={{ animationDelay: '1s' }} />

            {/* Main content */}
            <div className="relative z-10 text-center">
                {/* Icon animation */}
                <div className="mb-8 flex justify-center gap-4">
                    <Code className="w-12 h-12 text-blue-400 animate-bounce" style={{ animationDelay: '0s' }} />
                    <Sparkles className="w-12 h-12 text-blue-500 animate-bounce" style={{ animationDelay: '0.2s' }} />
                    <Rocket className="w-12 h-12 text-purple-500 animate-bounce" style={{ animationDelay: '0.4s' }} />
                </div>

                {/* Typing text with gradient */}
                <div className="mb-8 text-5xl md:text-6xl font-mono font-bold">
                    <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                        {text}
                    </span>
                    <span className="animate-blink ml-1 text-blue-500">|</span>
                </div>

                {/* Progress bar with glow */}
                <div className="w-[250px] mx-auto h-1 bg-gray-800 rounded-full relative overflow-hidden shadow-lg">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 animate-loading-bar shadow-[0_0_20px_rgba(59,130,246,0.8)]" />
                </div>

                {/* Subtitle */}
                <p className="mt-6 text-gray-400 text-sm animate-pulse">
                    Initializing portfolio experience...
                </p>
            </div>

            {/* Explore button */}
            {showButton && (
                <button
                    onClick={onComplete}
                    className="relative z-10 mt-12 group px-10 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold rounded-full transition-all duration-500 hover:scale-110 hover:shadow-[0_0_40px_rgba(59,130,246,0.8)] animate-fade-in overflow-hidden"
                >
                    <span className="relative z-10 flex items-center gap-2">
                        <Rocket className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        Explore Portfolio
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </button>
            )}

            <style>{`
                @keyframes float {
                    0%, 100% {
                        transform: translateY(0) translateX(0);
                    }
                    50% {
                        transform: translateY(-20px) translateX(10px);
                    }
                }
                @keyframes blink {
                    0%, 100% {
                        opacity: 1;
                    }
                    50% {
                        opacity: 0;
                    }
                }
                @keyframes loading-bar {
                    0% {
                        transform: translateX(-100%);
                    }
                    100% {
                        transform: translateX(100%);
                    }
                }
                @keyframes fade-in {
                    from {
                        opacity: 0;
                        transform: translateY(20px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                .animate-fade-in {
                    animation: fade-in 0.6s ease-out forwards;
                }
                .animate-blink {
                    animation: blink 1s infinite;
                }
                .animate-loading-bar {
                    animation: loading-bar 2s ease-in-out infinite;
                }
            `}</style>
        </div>
    )
}