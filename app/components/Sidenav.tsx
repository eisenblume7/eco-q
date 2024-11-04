import React from 'react';
import { FaHome, FaBook, FaGraduationCap, FaSignOutAlt } from 'react-icons/fa';

const Sidebar: React.FC = () => {
    return (
        <div className="flex h-screen w-72 bg-green-500 flex-col justify-between py-6 px-4 text-black">
            {/* Logo Section */}
            <link href="/" className="px-5">
                <h1 className="text-4xl font-sans font-bold mb-8">EcoQ</h1>
            </link>

            {/* Navigation Section */}
            <div className="absolute ml-5 text-lg top-28 flex-col space-y-8 font-sans font-medium">
                <a href="#" className="flex items-center space-x-2">
                    <FaHome />
                    <span>Home</span>
                </a>
                <a href="#" className="flex items-center space-x-2">
                    <FaBook />
                    <span>Katalog Tanaman</span>
                </a>
                <a href="#" className="flex items-center space-x-2">
                    <FaGraduationCap />
                    <span>Kegiataan</span>
                </a>
            </div>

            {/* Logout Section */}
            <div className="flex px-5 items-center font-sans space-x-2">
                <span>Logout</span>
                <FaSignOutAlt />
            </div>
        </div>
    );
};

export default Sidebar;
