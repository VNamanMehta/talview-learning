import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav className="bg-[#1A3C34] text-[#FFF8E7] shadow-lg border-b border-[#E6D2A2]/20 fixed w-full">
            <div className="max-w-7xl mx-auto px-6 py-4">
                <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                        <Link 
                            to="/" 
                            className="text-2xl font-serif font-bold text-[#D4A017] hover:text-[#E6D2A2] transition-colors duration-300"
                        >
                            BlogSphere
                        </Link>
                    </div>
                    <div className="flex items-center space-x-6">
                        <Link 
                            to="/" 
                            className="flex items-center px-4 py-2 text-sm font-serif text-[#FFF8E7] hover:bg-[#15312A] hover:text-[#D4A017] rounded-md transition-all duration-300"
                        >
                            <svg 
                                className="w-4 h-4 mr-2" 
                                fill="none" 
                                stroke="currentColor" 
                                viewBox="0 0 24 24"
                            >
                                <path 
                                    strokeLinecap="round" 
                                    strokeLinejoin="round" 
                                    strokeWidth="2" 
                                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                                />
                            </svg>
                            Home
                        </Link>
                        <Link 
                            to="/dashboard" 
                            className="flex items-center px-4 py-2 text-sm font-serif text-[#FFF8E7] hover:bg-[#15312A] hover:text-[#D4A017] rounded-md transition-all duration-300"
                        >
                            <svg 
                                className="w-4 h-4 mr-2" 
                                fill="none" 
                                stroke="currentColor" 
                                viewBox="0 0 24 24"
                            >
                                <path 
                                    strokeLinecap="round" 
                                    strokeLinejoin="round" 
                                    strokeWidth="2" 
                                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                                />
                            </svg>
                            Dashboard
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;