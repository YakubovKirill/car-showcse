'use client';

import Image from 'next/image';
import { CustomButton } from '.';
import { HERO_PAGE } from '@/text';

const Hero = () => {
    const handleScroll = () => {};
    return (
        <div className="hero">
            <div className="flex-1 pt-36 padding-x">
                <h1 className="hero__title">{HERO_PAGE.header}</h1>
                <p className="hero__subtitle">{HERO_PAGE.subHeader}</p>

                <CustomButton
                    title={HERO_PAGE.exploreButton}
                    containerStyles={'bg-primary-blue text-white rounded-full mt-10'}
                    handleClick={handleScroll}
                />
            </div>

            <div className="her__image-container">
                <div className="hero__image">
                    <Image src='/hero.png' alt="hero car" fill className="object-contain" />
                </div>
            </div>
        </div>
    );
};

export default Hero;
