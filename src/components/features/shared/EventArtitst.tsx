import Image from 'next/image';
import React from 'react';

interface IProps {
    image: string;
    id: number;
    name: string;
    role: string;
}

const EventArtitst: React.FC<IProps> = ({ image, id, name, role }) => {
    return (
        <div className='flex flex-col justify-center items-center w-[140px] h-[244px] gap-[12px]' >
            <div className='relative w-[140px] h-[190px] cursor-pointer'>
                <Image
                    src={'/1.png'}
                    alt={name}
                    fill
                    className='object-cover rounded-xl bg-white'
                />
            </div>

            <h1 className='text-[#4B91F1]'>{name}</h1>
            <h1>{role}</h1>
        </div>
    );
};

export default EventArtitst;
