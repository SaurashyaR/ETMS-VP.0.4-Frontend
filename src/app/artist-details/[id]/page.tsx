import Link from 'next/link'
import React from 'react'
import { IoChevronBackOutline } from 'react-icons/io5'

function page() {

    const artistDetails = [
        {
            "id": 1,
            "name": "The Rock Band",
            "biography": "Award winning rock band from California",
            "photoUrl": "https://example.com/artists/rock-band.jpg",
            "createdAt": "2023-01-05T00:00:00.000Z",
            "updatedAt": "2023-01-05T00:00:00.000Z",
            "createdBy": 2,
            "updatedBy": 2,
            "isActive": true
        },
    ]

    return (
        <React.Fragment>


            <main className="w-full">

                <div className='flex  justify-between items-center mx-6 my-2'>
                    <div>
                        <h1 className='text-[32px] font-[400]'>Artist Details</h1>
                        <p>Bring the Spotlight: Add Artist Info Seamlessly!</p>

                    </div>

                    <div className='flex gap-2'>
                        <Link href={`/event-details/1`} className='w-[37px] h-[37px] bg-[#4B91F1] text-white rounded-full flex justify-center items-center cursor-pointer'>

                            <IoChevronBackOutline />
                        </Link>

                        <Link href={`/event-details/:id/edit-details/`} className='w-[94px] h-[41px] px-[10px] py-[11px] border-[#2460B9] border rounded-[5px]
                     bg-white text-[#2460B9]
                     flex justify-center items-center
                     cursor-pointer'>Edit</Link>

                    </div>

                </div>

                <div className="w-[full] h-[273px] bg-[#2B5793] text-white flex ">
                    <div className="w-full mx-auto flex  flex-col xl:flex justify-end items-end pr-6">
                        <div className=' xl:mr-[55%]  '>
                            <h1 className=" text-[18px] lg:text-[24px]">{artistDetails[0].name }</h1>

                        </div>

                    </div>
                </div>

                <div className="relative max-w-[1200px] mx-6 flex gap-6 mt-[50px]">
                    <div className="w-[350px] flex flex-col gap-6">
                        <div className="absolute -top-[240px] left-0 w-[357px] h-[385px]">
                            <div
                                className="bg-white rounded-[10px] overflow-hidden shadow w-full h-full relative"
                                style={{
                                    backgroundImage: `url('/1.png')`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                }}
                            >
                            </div>
                        </div>

                    </div>


                    <div className="flex-1 flex flex-col gap-6">
                        <div>
                            <h1 className="text-[16px]">{artistDetails[0].biography}</h1>
                        </div>

                        <button className='w-[206px] h-[39px] px-[10px] py-[11px] border-[#2460B9] rounded-[10px]
                     bg-[#1EBBD7] text-white
                     flex justify-center items-center
                     cursor-pointer'>View Upcoming Events</button>

                    </div>
                </div>

            </main>
        </React.Fragment>
    )
}

export default page