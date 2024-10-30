"use client";

import React from "react";

interface Props {
    className?: string;
    learnMoreClassName?: string;
    text?: string;
}

export const ButtonPrimary: React.FC<Props> = ({
                                                     text="",
                                                     className = "",
                                                     learnMoreClassName = "",
                                                 }) => {
    return (
        <button
            className={`inline-flex items-center gap-2.5 px-10 py-4 bg-green-950 ${className}`}
        >
            <div
                className={`relative w-fit mt-[-1.00px] font-primary font-buttons font-[number:var(--buttons-font-weight)] text-white text-[length:var(--buttons-font-size)] tracking-[var(--buttons-letter-spacing)] leading-[var(--buttons-line-height)] whitespace-nowrap [font-style:var(--buttons-font-style)] ${learnMoreClassName}`}
            >
                {text}
            </div>
        </button>
    );
};
