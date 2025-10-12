import { useEffect } from "react";

export const MobileMenu = ({ menuOpen, setMenuOpen }) => {
    const menuItems = ["Home", "About", "Projects", "Contact"];

    // Prevent background scroll when the menu is open
    useEffect(() => {
        document.body.style.overflow = menuOpen ? "hidden" : "auto";
    }, [menuOpen]);

    return (
        <div
            className={`fixed top-0 left-0 w-full bg-[rgba(10,10,10,0.9)] z-40 flex flex-col items-center justify-center
                  transition-all duration-500 ease-in-out
                  ${menuOpen ? "h-screen opacity-100 pointer-events-auto" : "h-0 opacity-0 pointer-events-none"}`}
        >
            {/* Close button */}
            <button
                onClick={() => setMenuOpen(false)}
                className="absolute top-6 right-6 text-white text-4xl focus:outline-none cursor-pointer"
                aria-label="Close Menu"
            >
                &times;
            </button>

            {/* Menu links */}
            {menuItems.map((item, i) => (
                <a
                    key={i}
                    href={`#${item.toLowerCase()}`}
                    onClick={() => setMenuOpen(false)}
                    className={`text-2xl font-semibold text-white my-4 transition-all duration-300 transform
                      ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
                    style={{ transitionDelay: `${i * 100}ms` }}
                >
                    {item}
                </a>
            ))}
        </div>
    );
};
