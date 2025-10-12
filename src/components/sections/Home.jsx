import { Linkedin, Github, Facebook, Instagram } from 'lucide-react';
import PortfolioImage from "../../assets/portfolio-image.jpg"

export const Home = () => {
    return (
        <section
            id="home"
            className="min-h-screen flex items-center justify-center relative px-4 py-20"
        >
            {/* Animated background elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-700"></div>
            </div>

            <div className="max-w-6xl mx-auto w-full relative z-10 px-8">
                <div className="grid md:grid-cols-2 gap-16 items-center">
                    {/* Left Content */}
                    <div className="space-y-8">
                        <div className="space-y-4">
                            <h1 className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-blue-400 via-blue-500 to-purple-600 bg-clip-text text-transparent leading-tight">
                                Hi, I'm
                            </h1>
                            <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">
                                Umesha Mahipala
                            </h1>
                            <div className="flex items-center gap-3">
                                <div className="h-1 w-12 bg-gradient-to-r from-blue-500 to-purple-600"></div>
                                <p className="text-xl text-blue-400 font-medium">Software Engineer</p>
                            </div>
                        </div>

                        <p className="text-gray-400 text-lg leading-relaxed max-w-lg">
                            I'm a Software Engineer specializing in full-stack development, with a strong focus on building efficient, scalable, and user-centered applications. I enjoy turning ideas into reality through clean code, modern design, and creative problem-solving that drives meaningful impact.
                        </p>

                        <div className="flex flex-wrap gap-4">
                            <a
                                href="#projects"
                                className="group bg-gradient-to-r from-blue-500 to-blue-600 text-white py-3 px-8 rounded-lg font-medium transition-all duration-300 hover:shadow-[0_0_30px_rgba(59,130,246,0.5)] hover:scale-105 active:scale-100"
                            >
                                <span className="flex items-center gap-2">
                                    View Projects
                                    <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                                </span>
                            </a>
                            <a
                                href="#contact"
                                className="border-2 border-blue-500/50 text-blue-400 py-3 px-8 rounded-lg font-medium transition-all duration-300 hover:bg-blue-500/10 hover:border-blue-500 hover:shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:scale-105 active:scale-100"
                            >
                                Contact Me
                            </a>
                        </div>

                        {/* Social Links */}
                        <div className="pt-4">
                            <p className="text-gray-500 text-sm mb-3">Connect with me</p>
                            <div className="flex gap-4">
                                <a
                                    href="https://www.linkedin.com/in/tharushi-umesha-mahipala-4b4b84280/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group p-3 rounded-lg border border-blue-500/30 text-blue-400 transition-all duration-300 hover:bg-blue-500 hover:text-white hover:border-blue-500 hover:scale-110 hover:shadow-[0_0_20px_rgba(59,130,246,0.4)]"
                                    aria-label="LinkedIn"
                                >
                                    <Linkedin size={22} className="group-hover:scale-110 transition-transform duration-300" />
                                </a>
                                <a
                                    href="https://github.com/Tharushi-Umesha"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group p-3 rounded-lg border border-blue-500/30 text-blue-400 transition-all duration-300 hover:bg-blue-500 hover:text-white hover:border-blue-500 hover:scale-110 hover:shadow-[0_0_20px_rgba(59,130,246,0.4)]"
                                    aria-label="GitHub"
                                >
                                    <Github size={22} className="group-hover:scale-110 transition-transform duration-300" />
                                </a>
                                <a
                                    href="https://web.facebook.com/profile.php?id=61557085353033"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group p-3 rounded-lg border border-blue-500/30 text-blue-400 transition-all duration-300 hover:bg-blue-500 hover:text-white hover:border-blue-500 hover:scale-110 hover:shadow-[0_0_20px_rgba(59,130,246,0.4)]"
                                    aria-label="Facebook"
                                >
                                    <Facebook size={22} className="group-hover:scale-110 transition-transform duration-300" />
                                </a>
                                <a
                                    href="https://www.instagram.com/tharushiumesha_/?hl=en"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group p-3 rounded-lg border border-blue-500/30 text-blue-400 transition-all duration-300 hover:bg-blue-500 hover:text-white hover:border-blue-500 hover:scale-110 hover:shadow-[0_0_20px_rgba(59,130,246,0.4)]"
                                    aria-label="Instagram"
                                >
                                    <Instagram size={22} className="group-hover:scale-110 transition-transform duration-300" />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Right Image */}
                    <div className="flex justify-center md:justify-end">
                        <div className="relative">
                            {/* Glowing rings */}
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="w-80 h-80 md:w-[450px] md:h-[450px] rounded-full border border-blue-500/20 animate-ping-slow"></div>
                            </div>
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="w-72 h-72 md:w-[420px] md:h-[420px] rounded-full border border-purple-500/20 animate-ping-slower"></div>
                            </div>

                            {/* Main image container */}
                            <div className="relative group">
                                <div className="absolute -inset-6 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 rounded-full opacity-20 blur-3xl group-hover:opacity-40 transition-all duration-700"></div>
                                <div className="relative w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-blue-500/40 group-hover:border-blue-400/60 transition-all duration-500 shadow-[0_0_60px_rgba(59,130,246,0.3)] group-hover:shadow-[0_0_80px_rgba(59,130,246,0.5)] group-hover:scale-105">
                                    <img
                                        src={PortfolioImage}
                                        alt="Umesha Mahipala"
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <style>{`
                @keyframes ping-slow {
                    0%, 100% {
                        transform: scale(1);
                        opacity: 0.3;
                    }
                    50% {
                        transform: scale(1.1);
                        opacity: 0.1;
                    }
                }
                @keyframes ping-slower {
                    0%, 100% {
                        transform: scale(1);
                        opacity: 0.2;
                    }
                    50% {
                        transform: scale(1.15);
                        opacity: 0.05;
                    }
                }
                .animate-ping-slow {
                    animation: ping-slow 4s cubic-bezier(0, 0, 0.2, 1) infinite;
                }
                .animate-ping-slower {
                    animation: ping-slower 6s cubic-bezier(0, 0, 0.2, 1) infinite;
                }
                .delay-700 {
                    animation-delay: 700ms;
                }
            `}</style>
        </section>
    );
}