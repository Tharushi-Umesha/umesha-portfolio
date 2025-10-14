import { useEffect, useState, useRef } from "react";
import { Volume2, VolumeX } from "lucide-react";
import Music from "../music/music1.mp3"

export const Navbar = ({ menuOpen, setMenuOpen, startMusic }) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef(null);

    useEffect(() => {
        document.body.style.overflow = menuOpen ? "hidden" : "";
    }, [menuOpen]);

    // Start music when startMusic prop becomes true
    useEffect(() => {
        if (startMusic && audioRef.current) {
            audioRef.current.play().then(() => {
                setIsPlaying(true);
            }).catch(err => {
                console.log("Failed to play music:", err);
                setIsPlaying(false);
            });
        }
    }, [startMusic]);

    const toggleMusic = () => {
        if (audioRef.current) {
            if (isPlaying) {
                audioRef.current.pause();
            } else {
                audioRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    return (
        <>
            {/* Hidden audio element */}
            <audio
                ref={audioRef}
                loop
                src={Music}
            />

            <nav className="fixed top-0 w-full z-50 bg-[rgba(10,10,10,0.8)] backdrop-blur-lg border-b border-white/10 shadow-lg">
                <div className="max-w-5xl mx-auto px-4">
                    <div className="flex justify-between items-center h-16">
                        <a href="#home" className="font-mono text-xl font-bold text-white">
                            Umesha<span className="text-blue-500">Mahipala</span>
                        </a>

                        {/* Mobile menu button */}
                        <div
                            className="w-7 h-5 relative cursor-pointer z-40 md:hidden text-white text-2xl"
                            onClick={() => setMenuOpen(prev => !prev)}
                        >
                            &#9776;
                        </div>

                        {/* Desktop menu */}
                        <div className="hidden md:flex items-center space-x-8">
                            <a href="#home" className="text-gray-300 hover:text-white transition-colors">
                                Home
                            </a>
                            <a href="#about" className="text-gray-300 hover:text-white transition-colors">
                                About
                            </a>
                            <a href="#projects" className="text-gray-300 hover:text-white transition-colors">
                                Projects
                            </a>
                            <a href="#contact" className="text-gray-300 hover:text-white transition-colors">
                                Contact
                            </a>

                            {/* Music Toggle Button */}
                            <button
                                onClick={toggleMusic}
                                className="p-2 rounded-full border border-blue-500/30 text-blue-400 transition-all duration-300 hover:bg-blue-500 hover:text-white hover:scale-110 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
                                aria-label={isPlaying ? "Pause Music" : "Play Music"}
                            >
                                {isPlaying ? <Volume2 size={20} /> : <VolumeX size={20} />}
                            </button>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
}