"use client";

import Image from "next/image";
import { ButtonSecondary } from "./ButtonSecondary";
import React from "react";
import {ButtonPrimary} from "@/app/components/ButtonPrimary";

export const HeroSection: React.FC = () => {
    return (
        <section className="flex items-center justify-between min-h-screen px-20 bg-white">
            <div className="max-w-lg">
                <h1 className="text-5xl md:text-7xl font-libre text-[#324D38] leading-tight tracking-wider max-w-full">
                    A Beautiful <br/> Adventure&nbsp;Awaits
                </h1>


                <p className="mt-4 text-2xl text-[#324D38] font-primary ">
                    Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Tincidunt Facilisis Nunc
                </p>

                {/* Buttons */}
                <div className="mt-8 flex gap-4">
                    <a href="/katalog">
                        <ButtonPrimary text="KATALOG"/>
                    </a>

                    <a href="/learn-more">
                        <ButtonSecondary text="LEARN MORE"/>
                    </a>
                </div>
            </div>

            {/* Right Side: Image */}
            <div className="relative w-[500px] h-[700px] overflow-hidden rounded-tr-[200px] rounded-tl-[200px] border-2 border-gray-300">
                <Image
                    src="/garden.jpg"
                    alt="Beautiful Adventure"
                    fill
                    className="object-cover"
                />
            </div>
        </section>
    );
};
