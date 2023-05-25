import React from 'react';

function SectionTitle({ subTitle, title, color }) {
    return (
        <div className="w-[400px] mx-auto text-center mb-10">
            <p className="text-xl text-yellowOchre ">--- {subTitle} ---</p>
            {/* <h1 className="border-y-4 text-cinder text-[40px] uppercase mt-4">{title}</h1> */}
            <h1 className={`border-y-4  text-[40px] uppercase mt-4 ${color || 'text-cinder'}`}>
                {title}
            </h1>
        </div>
    );
}

export default SectionTitle;
