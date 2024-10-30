"use client";

import React from "react";

interface Props {
    className?: string;
    learnMoreClassName?: string;
    text?: string;
}

export const ButtonSecondary: React.FC<Props> = ({
                                                     text="",
                                                     className = "",
                                                     learnMoreClassName = "",
                                                 }) => {
    return (
        <button
            className={`all-[unset] box-border inline-flex items-center gap-2.5 px-7 py-4 border-[2px] border-solid border-primary ${className}`}
        >
            <div
                className={`relative w-fit -mt-1 font-primary font-buttons font-[var(--buttons-font-weight)] text-primary text-[var(--buttons-font-size)] tracking-[var(--buttons-letter-spacing)] leading-[var(--buttons-line-height)] whitespace-nowrap ${learnMoreClassName}`}
            >
                {text}
            </div>
        </button>
    );
};
