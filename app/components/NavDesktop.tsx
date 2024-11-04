"use client";

import React from "react";
import {ButtonSecondary} from "@/app/components/ButtonSecondary";
import Image from "next/image";


export const NavDesktop: React.FC = () => {
    return (
        <div className="fixed top-0 left-0 w-full h-16 px-8 flex items-center justify-between bg-white shadow-md z-50">
            <div>
                <Image
                    src={"/EcoQ.png"}
                    alt={"logo"}
                    width={100}
                    height={100}
                />
            </div>

            <div className="flex-grow mx-8 ml-96">
                <SearchForm/>
            </div>

            <div className="flex items-center gap-10">
                <NavItem text="HOME"/>
                <NavItem text="KATALOG"/>
                <NavItem text="KEGIATAN"/>
                <ButtonSecondary text="LOGIN"/>
            </div>
        </div>
    );
};

interface NavItemProps {
    text: string;
}

const SearchForm: React.FC = () => (
    <form className="relative w-full max-w-lg">
        <input
            type="text"
            placeholder="Search..."
            className="w-full px-4 py-2 border border-gray-300 bg-gray-50 rounded-md focus:outline-none focus:ring-2 focus:ring-primary font-sans"
        />
        <button
            type="submit"
            className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 hover:text-primary"
        >
            🔍
        </button>
    </form>
);

const NavItem: React.FC<NavItemProps> = ({ text }) => (
    <div className="relative w-fit font-bold text-sm tracking-[1px] leading-normal whitespace-nowrap text-[#475f45]">
        {text}
    </div>
);
