import { useEffect, useState } from 'react';

export const CustomCursor = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        const updatePosition = (e) => {
            setPosition({ x: e.clientX, y: e.clientY });
        };

        const handleMouseEnter = () => setIsHovering(true);
        const handleMouseLeave = () => setIsHovering(false);

        // Add mouse move listener
        window.addEventListener('mousemove', updatePosition);

        // Add hover detection for interactive elements
        const interactiveElements = document.querySelectorAll('a, button, input, textarea');
        interactiveElements.forEach(el => {
            el.addEventListener('mouseenter', handleMouseEnter);
            el.addEventListener('mouseleave', handleMouseLeave);
        });

        return () => {
            window.removeEventListener('mousemove', updatePosition);
            interactiveElements.forEach(el => {
                el.removeEventListener('mouseenter', handleMouseEnter);
                el.removeEventListener('mouseleave', handleMouseLeave);
            });
        };
    }, []);

    return (
        <>
            {/* Main cursor dot */}
            <div
                className="fixed pointer-events-none z-[9999] transition-transform duration-100"
                style={{
                    left: `${position.x}px`,
                    top: `${position.y}px`,
                    transform: 'translate(-50%, -50%)',
                }}
            >
                <div
                    className={`w-3 h-3 bg-blue-500 rounded-full transition-all duration-200 ${
                        isHovering ? 'scale-150 bg-purple-500' : ''
                    }`}
                    style={{
                        boxShadow: '0 0 20px rgba(59, 130, 246, 0.8)',
                    }}
                />
            </div>

            {/* Cursor ring */}
            <div
                className="fixed pointer-events-none z-[9998] transition-all duration-300 ease-out"
                style={{
                    left: `${position.x}px`,
                    top: `${position.y}px`,
                    transform: 'translate(-50%, -50%)',
                }}
            >
                <div
                    className={`w-8 h-8 border-2 border-blue-400/50 rounded-full transition-all duration-300 ${
                        isHovering ? 'scale-150 border-purple-400' : ''
                    }`}
                />
            </div>

            {/* Trailing particles */}
            <style>{`
                * {
                    cursor: none !important;
                }
                
                /* For mobile devices, keep default cursor */
                @media (pointer: coarse) {
                    * {
                        cursor: auto !important;
                    }
                    .custom-cursor-hide {
                        display: none;
                    }
                }
            `}</style>
        </>
    );
}