"use client"
import React from 'react';
import { FaHome, FaBook, FaGraduationCap, FaSignOutAlt } from 'react-icons/fa';
import {useRouter} from "next/navigation";

type SidebarProps = {
    setSelectedComponent: (component: string) => void;
    selectedComponent: string;
};

const Sidenav: React.FC<SidebarProps> = ({setSelectedComponent, selectedComponent}) => {
    const router = useRouter();

    const handleLogoClick = () => {
        router.push('/'); // Navigate to the root ('/') page
    };

    const isActive = (component: string) => selectedComponent === component;

    return (
        <div className="flex h-screen w-72 bg-green-500 flex-col justify-between py-6 px-4 text-black">
            {/* Logo Section */}
            <button onClick={handleLogoClick}>
                <h1 className="text-4xl font-sans font-bold mb-8">EcoQ</h1>
            </button>

            {/* Navigation Section */}
            <div className="absolute ml-5 text-lg top-28 flex-col space-y-8 font-sans font-medium">
                <button onClick={() => setSelectedComponent('Home')} className={`hover:w-52 hover:bg-green-600 hover:border-green-600 flex items-center space-x-2 px-4 py-2 rounded-lg border-2 ${
                    isActive('Home')
                        ? 'w-52 border-green-700 bg-green-700 text-white'
                        : 'border-transparent text-black'
                } transition-all duration-300 ease-in-out`}>
                    <FaHome />
                    <span>Home</span>
                </button>
                <button onClick={() => setSelectedComponent('KatalogTanaman')} className={`hover:w-52 hover:bg-green-600 hover:border-green-600 flex items-center space-x-2 px-4 py-2 rounded-lg border-2 ${
                    isActive('KatalogTanaman')
                        ? 'w-52 border-green-700 bg-green-700 text-white'
                        : 'border-transparent text-black'
                } transition-all duration-300 ease-in-out`}>
                    <FaBook />
                    <span>Katalog Tanaman</span>
                </button>
                <button onClick={() => setSelectedComponent('Kegiatan')} className={`hover:w-52 hover:bg-green-600 hover:border-green-600 flex items-center space-x-2 px-4 py-2 rounded-lg border-2 ${
                    isActive('Kegiatan')
                        ? 'w-52 border-green-700 bg-green-700 text-white'
                        : 'border-transparent text-black'
                } transition-all duration-300 ease-in-out`}>
                    <FaGraduationCap />
                    <span>Kegiatan</span>
                </button>
            </div>

            {/* Logout Section */}
            <div className="flex px-5 items-center font-sans space-x-2">
                <span>Logout</span>
                <FaSignOutAlt />
            </div>
        </div>
    );
};

export default Sidenav;

