import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

export default function Navbar() {
    const [theme, setTheme] = useState(() => {
        if (typeof window === "undefined") return "dark";
        return window.localStorage.getItem("moses-portfolio-theme") || "dark";
    });
    const logoAsset = theme === "light" ? "moses_mandraju_light.png" : "moses_mandraju_dark.png";

    useEffect(() => {
        document.documentElement.classList.toggle("theme-light", theme === "light");
        window.localStorage.setItem("moses-portfolio-theme", theme);
    }, [theme]);

    return (
        <nav
            id="top"
            className="site-nav fixed top-0 left-0 w-full z-50 px-2 sm:px-4 pt-2"
        >
            <div className="max-w-7xl mx-auto h-16 px-3 sm:px-5 flex items-center justify-between rounded-2xl navbar-surface backdrop-blur-md">
                <a
                    href="#top"
                    aria-label="Moses Mandraju - Software Engineer"
                    className="flex items-center gap-2 sm:gap-3 shrink-0"
                >
                    <img
                        src={`${import.meta.env.BASE_URL}${logoAsset}`}
                        alt="Moses Mandraju icon"
                        className="navbar-logo h-9 w-auto object-contain"
                    />
                    <span className="navbar-brand-name text-sm sm:text-base font-semibold tracking-[0.18em] whitespace-nowrap">
                        MOSES MANDRAJU
                    </span>
                </a>

                <div className="flex items-center gap-2 sm:gap-3">
                    <div className="hidden lg:flex items-center gap-7 text-sm navbar-links">
                        <a href="#top" className="nav-active font-medium">Home</a>
                        <a href="#projects">Projects</a>
                        <a href="#about">About</a>
                        <a href="#contact">Contact</a>
                    </div>

                    <button
                        type="button"
                        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
                        className="theme-toggle"
                        aria-label={theme === "light" ? "Switch to dark theme" : "Switch to light theme"}
                        title={theme === "light" ? "Switch to dark theme" : "Switch to light theme"}
                    >
                        {theme === "light" ? <Sun size={19} aria-hidden="true" /> : <Moon size={19} aria-hidden="true" />}
                    </button>

                    <a
                        href="#contact"
                        className="hidden sm:inline-flex items-center justify-center rounded-xl navbar-cta px-5 py-3 text-sm font-semibold"
                    >
                        Get in Touch
                    </a>
                </div>
            </div>
        </nav>
    );
}
