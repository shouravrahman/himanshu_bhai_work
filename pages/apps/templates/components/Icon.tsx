import Image from 'next/image';
import React from 'react';

const Icon = ({ src, width, height, alt, className }: { src: string; width: number; height: number; alt: string; className: string }) => {
    return (
        <div className={`max-w-full hidden md:block dark:invert ${className} transition-all duration-300`}>
            <Image src={src} width={width} height={height} className="object-cover" alt={alt} />
        </div>
    );
};

export default Icon;
