'use client';

// import Image from 'next/image';
import { MouseEventHandler } from 'react';

interface ICustomButtonProps {
    title: string,
    containerStyles?: string,
    handleClick?: MouseEventHandler<HTMLButtonElement>,
}

const CustomButton = ({ title, containerStyles, handleClick }: ICustomButtonProps) => {
    return (
        <button
            disabled={false}
            type="button"
            className={`custom-btn ${containerStyles}`}
            onClick={handleClick}
        >
            <span className="flex-1">{title}</span>
        </button>
    );
};

export default CustomButton;
