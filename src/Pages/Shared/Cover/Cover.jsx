import React from 'react';
import { Parallax } from 'react-parallax';

function Cover({ bgImg, title, subTitle }) {
    return (
        <Parallax blur={{ min: -15, max: 15 }} bgImage={bgImg} bgImageAlt="the dog" strength={-200}>
            <div className="hero h-[700px]">
                <div className="hero-overlay bg-opacity-60" />
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold uppercase">{title}</h1>
                        <p className="mb-5">{subTitle}</p>
                    </div>
                </div>
            </div>
        </Parallax>
    );
}

export default Cover;
