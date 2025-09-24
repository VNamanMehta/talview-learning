import { useContext, useState } from "react";
import AuthContext from "../contexts/AuthContext";
import { Link, Outlet, useNavigate } from "react-router-dom";
function DashboardLayout() {
    const { user, logout } = useContext(AuthContext);
    const navigate = useNavigate();
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const handleLogout = () => {
        logout();
        navigate('/', { replace: true });
    };

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <div className="min-h-screen bg-[#FFF8E7]">
            <div className="flex min-h-[calc(100vh-72px)] bg-[#FFF8E7] pt-5">
                <div className="fixed top-[72px] bottom-0 left-0 w-12 bg-[#8B2635] flex flex-col items-center pt-6 z-20 border-r border-[#6B1F2A]">
                    <button
                        className="text-[#FFF8E7] focus:outline-none"
                        onClick={toggleSidebar}
                    >
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            {isSidebarOpen ? (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M15 19l-7-7 7-7"
                                />
                            ) : (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            )}
                        </svg>
                    </button>
                </div>
                <aside
                    className={`fixed top-[72px] bottom-0 left-12 w-52 bg-[#1A3C34] text-[#FFF8E7] flex flex-col shadow-xl transform transition-transform duration-300 ease-in-out z-10 ${
                        isSidebarOpen ? "translate-x-0" : "-translate-x-full"
                    }`}
                >
                    <div className="pl-6 pr-6 pt-6 pb-4 border-b border-[#E6D2A2]/20">
                        <div>
                            <h2 className="text-2xl font-serif font-bold">Dashboard</h2>
                            <p className="mt-1 text-sm font-serif text-[#E6D2A2]">
                                Welcome, {user?.name || "User"}
                            </p>
                        </div>
                    </div>
                    <nav className="flex-grow px-6 py-4 space-y-2">
                        <Link
                            to="my-post"
                            className="block px-4 py-2 text-sm font-serif text-[#FFF8E7] rounded-md hover:bg-[#15312A] hover:text-[#D4A017] transition-all duration-300"
                            onClick={() => setIsSidebarOpen(false)}
                        >
                            My Posts
                        </Link>
                        <Link
                            to="my-profile"
                            className="block px-4 py-2 text-sm font-serif text-[#FFF8E7] rounded-md hover:bg-[#15312A] hover:text-[#D4A017] transition-all duration-300"
                            onClick={() => setIsSidebarOpen(false)}
                        >
                            Profile
                        </Link>
                        <Link
                            to="create"
                            className="block px-4 py-2 text-sm font-serif text-[#FFF8E7] rounded-md hover:bg-[#15312A] hover:text-[#D4A017] transition-all duration-300"
                            onClick={() => setIsSidebarOpen(false)}
                        >
                            Create Post
                        </Link>
                    </nav>
                    <div className="px-6 py-4 border-t border-[#E6D2A2]/20">
                        <button
                            onClick={handleLogout}
                            className="w-full text-left px-4 py-2 text-sm font-serif bg-[#8B2635] text-[#FFF8E7] rounded-md hover:bg-[#6B1F2A] focus:outline-none focus:ring-2 focus:ring-[#D4A017] focus:ring-offset-2 focus:ring-offset-[#1A3C34] transition-all duration-300"
                        >
                            Logout
                        </button>
                    </div>
                </aside>
                <main
                    className={`flex-1 p-6 overflow-y-auto bg-[#FDF6E3] transition-all duration-300 ease-in-out ${
                        isSidebarOpen ? "ml-64" : "ml-12"
                    }`}
                >
                    <Outlet />
                </main>
                {isSidebarOpen && (
                    <div
                        className="fixed inset-0 top-[72px] bg-black bg-opacity-50 z-5 md:hidden"
                        onClick={toggleSidebar}
                    ></div>
                )}
            </div>
        </div>
    );
}

export default DashboardLayout;