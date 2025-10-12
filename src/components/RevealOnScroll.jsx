import { useEffect, useRef, useState } from 'react';

export const RevealOnScroll = ({ children, className = '' }) => {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            {
                threshold: 0.1, // Trigger when 10% of the element is visible
                rootMargin: '0px 0px -100px 0px' // Start animation slightly before element enters viewport
            }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, []);

    return (
        <div
            ref={ref}
            className={`transition-all duration-1000 ease-out ${isVisible
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-20'
                } ${className}`}
        >
            {children}
        </div>
    );
};