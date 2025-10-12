export const About = () => {
    return (
        <section
            id="about"
            className="min-h-screen flex items-center justify-center relative px-4 py-20 bg-gradient-to-b from-transparent to-blue-500/5"
        >
            <div className="max-w-6xl mx-auto w-full">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                        About Me
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto"></div>
                </div>

                <div className="grid md:grid-cols-2 gap-12 items-start">
                    {/* Left Column - Profile Info */}
                    <div className="space-y-6">
                        <div className="bg-gradient-to-br from-blue-500/10 to-purple-600/10 rounded-lg p-8 border border-blue-500/20 transition-all duration-300 hover:border-blue-500/40 hover:shadow-[0_0_30px_rgba(59,130,246,0.2)]">
                            <h3 className="text-2xl font-bold text-white mb-4">Profile</h3>
                            <p className="text-gray-300 leading-relaxed">
                                Dedicated Computer Science graduate with 6 months of professional experience in full-stack development.
                                Strong foundation in programming, data analysis, and software development with hands-on experience in real-world client projects.
                                Passionate about building innovative technology solutions and continuously expanding technical expertise.
                            </p>
                        </div>

                        <div className="bg-gradient-to-br from-blue-500/10 to-purple-600/10 rounded-lg p-8 border border-blue-500/20 transition-all duration-300 hover:border-blue-500/40 hover:shadow-[0_0_30px_rgba(59,130,246,0.2)]">
                            <h3 className="text-2xl font-bold text-white mb-6">Education</h3>
                            <div className="space-y-4">
                                <div className="border-l-2 border-blue-500 pl-4 transition-all duration-300 hover:border-purple-500">
                                    <h4 className="text-lg font-semibold text-blue-400">Bachelor of Computer Science</h4>
                                    <p className="text-gray-400">Edith Cowan University (2025)</p>
                                    <p className="text-gray-500 text-sm">Major in Software Engineering | GPA: 3.125/4.0</p>
                                </div>
                                <div className="border-l-2 border-blue-500 pl-4 transition-all duration-300 hover:border-purple-500">
                                    <h4 className="text-lg font-semibold text-blue-400">Diploma of Science (Computing/IT)</h4>
                                    <p className="text-gray-400">Edith Cowan College</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gradient-to-br from-blue-500/10 to-purple-600/10 rounded-lg p-8 border border-blue-500/20 transition-all duration-300 hover:border-blue-500/40 hover:shadow-[0_0_30px_rgba(59,130,246,0.2)]">
                            <h3 className="text-2xl font-bold text-white mb-6">Work Experience</h3>
                            <div className="border-l-2 border-blue-500 pl-4 transition-all duration-300 hover:border-purple-500">
                                <h4 className="text-lg font-semibold text-blue-400">Software Engineer Intern</h4>
                                <p className="text-gray-400">OneZerro (Pvt) Ltd</p>
                                <p className="text-gray-500 text-sm mb-3">October 2024 - April 2025</p>
                                <p className="text-gray-300 text-sm leading-relaxed">
                                    Developed web applications (FindYourFare, IzeInvoice) using Next.js, React, and NestJS.
                                    Collaborated on responsive UI implementation, performance optimization, and applied agile methodologies with code reviews.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Skills */}
                    <div className="space-y-6">
                        <div className="bg-gradient-to-br from-blue-500/10 to-purple-600/10 rounded-lg p-8 border border-blue-500/20 transition-all duration-300 hover:border-blue-500/40 hover:shadow-[0_0_30px_rgba(59,130,246,0.2)]">
                            <h3 className="text-2xl font-bold text-white mb-6">Technical Skills</h3>
                            <div className="space-y-4">
                                <div>
                                    <h4 className="text-blue-400 font-semibold mb-2">Programming Languages</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {['C#', 'Python', 'JavaScript', 'TypeScript', 'Go', 'Dart'].map((skill) => (
                                            <span
                                                key={skill}
                                                className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm border border-blue-500/30 transition-all duration-300 hover:bg-blue-500/30 hover:scale-105 hover:shadow-[0_0_10px_rgba(59,130,246,0.3)]"
                                            >
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div>
                                    <h4 className="text-blue-400 font-semibold mb-2">Web & Frameworks</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {['ASP.NET Core', 'React', 'Next.js', 'Django', 'Angular', 'Flutter'].map((skill) => (
                                            <span
                                                key={skill}
                                                className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm border border-purple-500/30 transition-all duration-300 hover:bg-purple-500/30 hover:scale-105 hover:shadow-[0_0_10px_rgba(147,51,234,0.3)]"
                                            >
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div>
                                    <h4 className="text-blue-400 font-semibold mb-2">Databases</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {['SQL Server', 'MySQL', 'PostgreSQL'].map((skill) => (
                                            <span
                                                key={skill}
                                                className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm border border-blue-500/30 transition-all duration-300 hover:bg-blue-500/30 hover:scale-105 hover:shadow-[0_0_10px_rgba(59,130,246,0.3)]"
                                            >
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div>
                                    <h4 className="text-blue-400 font-semibold mb-2">Tools & Platforms</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {['Visual Studio', 'Git', 'Power BI', 'Excel'].map((skill) => (
                                            <span
                                                key={skill}
                                                className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm border border-purple-500/30 transition-all duration-300 hover:bg-purple-500/30 hover:scale-105 hover:shadow-[0_0_10px_rgba(147,51,234,0.3)]"
                                            >
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gradient-to-br from-blue-500/10 to-purple-600/10 rounded-lg p-8 border border-blue-500/20 transition-all duration-300 hover:border-blue-500/40 hover:shadow-[0_0_30px_rgba(59,130,246,0.2)]">
                            <h3 className="text-2xl font-bold text-white mb-6">Soft Skills</h3>
                            <div className="grid grid-cols-2 gap-3">
                                {['Project Management', 'Problem-Solving', 'Critical Thinking', 'Team Collaboration', 'Communication', 'Agile Methodologies'].map((skill) => (
                                    <div
                                        key={skill}
                                        className="flex items-center space-x-2 text-gray-300 transition-all duration-300 hover:text-blue-400 hover:translate-x-1"
                                    >
                                        <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                                        <span className="text-sm">{skill}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="bg-gradient-to-br from-blue-500/10 to-purple-600/10 rounded-lg p-8 border border-blue-500/20 transition-all duration-300 hover:border-blue-500/40 hover:shadow-[0_0_30px_rgba(59,130,246,0.2)]">
                            <h3 className="text-2xl font-bold text-white mb-6">Certifications</h3>
                            <div className="space-y-3">
                                <div className="transition-all duration-300 hover:translate-x-2">
                                    <h4 className="text-blue-400 font-semibold text-sm">Google Data Analytics Professional Certificate</h4>
                                    <p className="text-gray-500 text-xs">Coursera | September 2024</p>
                                </div>
                                <div className="transition-all duration-300 hover:translate-x-2">
                                    <h4 className="text-blue-400 font-semibold text-sm">Introduction to Career Skills in Data Analytics</h4>
                                    <p className="text-gray-500 text-xs">LinkedIn Learning | August 2024</p>
                                </div>
                                <div className="transition-all duration-300 hover:translate-x-2">
                                    <h4 className="text-blue-400 font-semibold text-sm">Learning Microsoft SQL Server 2022</h4>
                                    <p className="text-gray-500 text-xs">LinkedIn Learning | July 2025</p>
                                </div>
                                <div className="transition-all duration-300 hover:translate-x-2">
                                    <h4 className="text-blue-400 font-semibold text-sm">Learning C#</h4>
                                    <p className="text-gray-500 text-xs">LinkedIn Learning | July 2025</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}