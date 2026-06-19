export default function Navbar() {

    return (

        <nav className="fixed top-0 left-0 w-full overflow-x-hidden z-50 bg-gradient-to-b from-[#090909]/55 via-[#090909]/25 to-transparent backdrop-blur-md border-b border-cyan-400/10">

            <div className="max-w-7xl mx-auto px-6 sm:px-8 py-6">

                <div className="flex justify-between items-center">

                    {/* <a href="#">
                        <img
                            src="/engineer/Moses_M-logo.png"
                            alt="Moses Logo"
                            className="h-12 w-auto"
                        />
                    </a> */}

                    <div className="hidden md:flex gap-10 text-gray-400">

                        <a
                            href="#about"
                            className="nav-link"
                        >
                            About
                        </a>

                        <a href="#experience" className="nav-link">Experience</a>

                        <a href="#projects" className="nav-link">Projects</a>

                        <a href="#contact" className="nav-link">Contact</a>

                    </div>

                </div>

            </div>

        </nav>

    );

}
