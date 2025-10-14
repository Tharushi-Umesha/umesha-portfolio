import { useState, useEffect } from 'react';
import { Terminal } from 'lucide-react';

export const TerminalSection = () => {
    const [currentLineIndex, setCurrentLineIndex] = useState(0);
    const [currentText, setCurrentText] = useState('');
    const [isTyping, setIsTyping] = useState(true);

    const terminalLines = [
        { type: 'command', text: '$ whoami', delay: 0 },
        { type: 'output', text: 'Umesha Mahipala - Software Engineer', delay: 500 },
        { type: 'command', text: '$ cat skills.txt', delay: 1500 },
        { type: 'output', text: 'Full-Stack Development | React | Next.js | Python', delay: 500 },
        { type: 'output', text: 'ASP.NET Core | FastAPI | Flutter | Go', delay: 200 },
        { type: 'command', text: '$ ls experience/', delay: 1000 },
        { type: 'output', text: 'OneZerro_Software_Engineer_Intern.txt', delay: 500 },
        { type: 'command', text: '$ echo $PASSION', delay: 1000 },
        { type: 'output', text: 'Building innovative solutions with clean code 🚀', delay: 500 },
        { type: 'command', text: '$ status', delay: 1000 },
        { type: 'output', text: '✓ Ready for new opportunities', delay: 500 },
        { type: 'cursor', text: '$ _', delay: 1000 }
    ];

    useEffect(() => {
        if (currentLineIndex >= terminalLines.length) return;

        const currentLine = terminalLines[currentLineIndex];
        const fullText = currentLine.text;

        if (isTyping) {
            if (currentText.length < fullText.length) {
                const timeout = setTimeout(() => {
                    setCurrentText(fullText.slice(0, currentText.length + 1));
                }, 50);
                return () => clearTimeout(timeout);
            } else {
                setIsTyping(false);
                const timeout = setTimeout(() => {
                    setCurrentLineIndex(prev => prev + 1);
                    setCurrentText('');
                    setIsTyping(true);
                }, currentLine.delay);
                return () => clearTimeout(timeout);
            }
        }
    }, [currentText, currentLineIndex, isTyping]);

    const resetAnimation = () => {
        setCurrentLineIndex(0);
        setCurrentText('');
        setIsTyping(true);
    };

    return (
        <section
            id="terminal"
            className="min-h-screen flex items-center justify-center relative px-4 py-20"
        >
            <div className="max-w-4xl mx-auto w-full px-8">
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                        Terminal
                    </h2>
                    <p className="text-gray-400 text-lg">
                        A quick look at my profile through the command line
                    </p>
                    <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mt-4"></div>
                </div>

                <div className="bg-gray-900 rounded-lg overflow-hidden border border-blue-500/30 shadow-[0_0_50px_rgba(59,130,246,0.3)]">
                    {/* Terminal Header */}
                    <div className="bg-gray-800 px-4 py-3 flex items-center gap-2 border-b border-gray-700">
                        <div className="flex gap-2">
                            <div className="w-3 h-3 rounded-full bg-red-500"></div>
                            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                            <div className="w-3 h-3 rounded-full bg-green-500"></div>
                        </div>
                        <div className="flex-1 text-center">
                            <span className="text-gray-400 text-sm flex items-center justify-center gap-2">
                                <Terminal size={16} />
                                umesha@portfolio:~
                            </span>
                        </div>
                        <button
                            onClick={resetAnimation}
                            className="text-gray-400 hover:text-white text-sm transition-colors"
                        >
                            ↻ Replay
                        </button>
                    </div>

                    {/* Terminal Body */}
                    <div className="p-6 font-mono text-sm min-h-[400px]">
                        {terminalLines.slice(0, currentLineIndex).map((line, index) => (
                            <div
                                key={index}
                                className={`mb-2 ${
                                    line.type === 'command' 
                                        ? 'text-green-400' 
                                        : line.type === 'cursor'
                                        ? 'text-green-400'
                                        : 'text-gray-300 pl-4'
                                }`}
                            >
                                {line.text}
                            </div>
                        ))}
                        
                        {currentLineIndex < terminalLines.length && (
                            <div
                                className={`mb-2 ${
                                    terminalLines[currentLineIndex].type === 'command'
                                        ? 'text-green-400'
                                        : 'text-gray-300 pl-4'
                                }`}
                            >
                                {currentText}
                                <span className="inline-block w-2 h-4 bg-green-400 ml-1 animate-pulse"></span>
                            </div>
                        )}
                    </div>
                </div>

                {/* Interactive Commands */}
                <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
                    {[
                        { cmd: 'whoami', section: 'about' },
                        { cmd: 'skills', section: 'about' },
                        { cmd: 'projects', section: 'projects' },
                        { cmd: 'contact', section: 'contact' }
                    ].map((item, index) => (
                        <a
                            key={index}
                            href={`#${item.section}`}
                            className="bg-gradient-to-br from-blue-500/10 to-purple-600/10 border border-blue-500/30 rounded-lg p-4 text-center transition-all duration-300 hover:border-blue-500 hover:shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:scale-105"
                        >
                            <div className="text-green-400 font-mono text-sm mb-1">$ {item.cmd}</div>
                            <div className="text-gray-400 text-xs capitalize">{item.cmd === 'whoami' ? 'About Me' : item.cmd}</div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}