export default function Navbar() {

    return (

        <nav className="fixed top-0 left-0 w-full z-50">

            <div className="max-w-7xl mx-auto px-8 py-6">

                <div className="flex justify-between items-center">

                    <h1 className="text-xl font-bold text-cyan-400">

                        M

                    </h1>

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