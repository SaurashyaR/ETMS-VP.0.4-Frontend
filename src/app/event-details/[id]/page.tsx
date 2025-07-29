import EventArtitst from '@/components/features/shared/EventArtitst';
import React from 'react'
import { BiSolidMedal } from 'react-icons/bi';
import { CiCalendar, CiLocationOn } from 'react-icons/ci';
import { FaHandshake } from 'react-icons/fa';
import { IoMdTime } from 'react-icons/io';
import { IoChevronBackOutline } from 'react-icons/io5'

function page() {

    const data = [
        {
            id: 3,
            organizerName: "abc org",
            locationId: 1,
            name: "App Concert",
            description: "Join us for an unforgettable night with live performances and immersive visuals.",
            eventDate: "2026-08-10T12:00:00.000Z",
            eventTime: "2026-08-10T18:30:00.000Z",
            doorOpeningTime: "2026-08-10T16:30:00.000Z",
            baseTicketPrice: "200",
            eventPhoto: "abc",
            termsAndConditions: "tc",
            status: "active",
            isActive: true,
            createdAt: "2025-07-25T06:19:18.977Z",
            location: {
                id: 1,
                name: "Pokhara",
                address: "Pokhara Metro",
                mapLink: "https://maps.example.com/location"
            },
            terms: [
                "One ticket admits one.",
                "Venue gates open at 4:30 pm. The show will start at 6:30 pm sharp.",
                "Gates will be closed at 7:00 pm. Ticket holders arriving after 7:00 pm may not be permitted to enter and will not be refunded.",
                "Refund of the ticket will only be activated in case of cancellation of the event.",
                "Ticket without valid QR code or entry stub will not be entertained.",
                "Reentry will not be allowed. Please retain the ticket throughout the event.",
                "Right to entry reserved. Intoxicated attendants may be barred from entry.",
                "Bottles, food items, tobacco, cigarettes, lighters, matches are restricted in the concert venue.",
                "Helmets, sharp objects, bags, weapons, explosives, flammable items, intoxicating agents including alcohol are strictly prohibited inside the venue.",
                "In case of accidents including those leading to death, organizers and performers will not be held liable in any way whatsoever.",
                "Unauthorized audio video recording is prohibited.",
                "Children under 5 years are not recommended.",
                "Children under 14 years must be accompanied by an adult.",
                "All tickets are standing areas, please come with comfortable footwear.",
                "Parking around concert venue will be at your own risk."
            ]
        }
    ];

    const event = data[0]; // picking the first event for now

    const formatDate = (dateStr: string) =>
        new Date(dateStr).toLocaleDateString(undefined, {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        });

    const formatTime = (dateStr: string) =>
        new Date(dateStr).toLocaleTimeString(undefined, {
            hour: '2-digit',
            minute: '2-digit',
        });

    return (
        <React.Fragment >
            <main className="w-full">

                <div className='flex  justify-between items-center mx-6 my-2'>
                    <div>
                        <h1 className='text-[32px] font-[400]'>Ticket Details</h1>
                        <p>Seamless Ticket Booking: Reserve Your Spot in Just a Few Clicks!</p>

                    </div>

                    <div className='flex gap-2'>
                        <div className='w-[37px] h-[37px] bg-[#4B91F1] text-white rounded-full flex justify-center items-center cursor-pointer'>

                            <IoChevronBackOutline />
                        </div>

                        <button className='w-[94px] h-[41px] px-[10px] py-[11px] border-[#2460B9] border rounded-[5px]
                     bg-white text-[#2460B9]
                     flex justify-center items-center
                     cursor-pointer'>Edit</button>

                    </div>

                </div>
        
                {/* Top Blue Header Full Width */}
                <div className="w-[full] h-[273px] bg-[#2B5793] text-white flex ">
                    <div className="w-full mx-auto flex  flex-col xl:flex justify-end items-end pr-6">
                        <div className=' xl:mr-[50%] xl:mt-19  '>
                            <h1 className="text-[24px]">{event.name}</h1>
                            <div className="flex flex-col text-[16px] gap-[12px]">
                                <span className="flex gap-[9px] items-center">
                                    <CiCalendar /> {formatDate(event.eventDate)}
                                </span>
                                <span className="flex gap-[9px] items-center">
                                    <IoMdTime /> {formatTime(event.eventTime)}
                                </span>
                                <span className="flex gap-[9px] items-center">
                                    <CiLocationOn /> {event.location.address}
                                </span>
                            </div>
                        </div>
                        <div className="w-[205px] xl:w-[266px] h-[54px] bg-white flex rounded-[10px] justify-around items-center
                        xl:mr-6 mb-2">
                            <span className="text-black font-[400]">Rs {event.baseTicketPrice}</span>
                            <button className="w-[117px] h-[38px] bg-[#4B91F1] text-white rounded-[5px] cursor-pointer flex items-center justify-center">
                                <span className="text-[16px]">Book Now</span>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Content Wrapper */}
                <div className="relative max-w-[1200px] mx-6 flex gap-6 mt-[50px]">
                    {/* LEFT COLUMN */}
                    <div className="w-[350px] flex flex-col gap-6">
                        {/* Poster Card overlapping top */}
                        <div className="absolute -top-[240px] left-0 w-[357px] h-[385px]">
                            <div
                                className="bg-white rounded-[10px] overflow-hidden shadow w-full h-full relative"
                                style={{
                                    backgroundImage: `url('/1.png')`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                }}
                            >
                                <div className="flex flex-col justify-end h-full bg-black/40 p-4 text-white items-center">
                                    <h2 className="text-[24px]">{event.name}</h2>
                                    <p className="text-[14px]">{formatDate(event.eventDate)}</p>
                                    <p className="text-[14px] text-blue-300">{event.location.address}</p>
                                </div>
                            </div>
                        </div>


                        {/* Push content down so organizer card is below poster */}
                        <div className="mt-[170px] bg-white p-4 rounded-[10px] shadow">
                            <p className="text-[18px] font-semibold">{event.organizerName}</p>
                            <p className="text-[14px] text-gray-500">Organizer</p>
                        </div>

                        {/* Map */}
                        <div className="bg-white rounded-[10px] overflow-hidden">

                            <div className='flex gap-[16px] flex-col pb-2'>
                                <h1>Location of the Event</h1>

                                <div className='flex gap-[16px] items-center'>
                                    <CiLocationOn />
                                    <h1>{event.location.address}</h1>
                                </div>
                            </div>
                            <iframe
                                src={event.location.mapLink}
                                className="w-[357px] h-[831px]"
                                allowFullScreen
                                loading="lazy"
                            ></iframe>
                        </div>
                    </div>

                    {/* RIGHT COLUMN */}
                    <div className="flex-1 flex flex-col gap-6">
                        {/* Event Details */}
                        <div>
                            <h1 className="text-[22px]">Event Details</h1>
                            <p className="text-gray-700 mt-2">{event.description}</p>
                            <p className="mt-4"><strong>Event Date:</strong> {formatDate(event.eventDate)}</p>
                            <p><strong>Event Time:</strong> {formatTime(event.eventTime)}</p>
                            <p><strong>Location of the event:</strong> {event.location.name} - {event.location.address}</p>
                            <a><strong>Google Map:</strong> {event.location.mapLink}</a>
                            <p><strong>Ticket Price:</strong> Rs. {event.baseTicketPrice}</p>
                        </div>

                        {/* Terms */}
                        <div>
                            <h2 className="text-[22px] font-[400]">Terms and Conditions accepted with the purchase of tickets for this event:</h2>
                            <ul className="list-disc pl-4 text-gray-700 mt-4">
                                {event.terms.map((term, index) => (
                                    <li key={index}>{term}</li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <h1 className='text-[32px] font-[400]'>Event Artist</h1>
                            <div className='mt-2'> 

                                <EventArtitst
                                    id={1}
                                    name="Ashim"
                                    role="Singer"
                                    image="/1.png"
                                />
                            </div>
                        </div>
                    </div>

                </div>

                <div className='m-6'>


                    <div>

                        <h1 className='text-[24px]'>Empowering This Event Through Their Generous Support</h1>
                        <p className='text-[#4B91F1] text-[32px] font-[400]'>Our Proud Sponsors</p>
                    </div>

                    <div>

                        <div className='flex justify-center items-center gap-[20px]'>
                            <BiSolidMedal size={32} height={32} />
                            <h1 className='text-[32px]'>Title Sponsor</h1>
                        </div>


                        <div className='flex justify-around '>

                            <div>

                                <div className='flex justify-center items-center gap-[20px]'>
                                    <BiSolidMedal size={25} height={24} />
                                    <h1 className='text-[24px]'>Gold Sponsor</h1>
                                </div>

                                <div>

                                </div>
                            </div>

                            <div className='flex justify-center items-center gap-[20px]'>
                                <BiSolidMedal size={25} height={24} />
                                <h1 className='text-[24px]'>Silver Sponsor</h1>
                            </div>


                        </div>


                        <div>
                            <div className='flex justify-center items-center gap-[20px]'>
                                <FaHandshake size={20} height={16} />
                                <h1 className='text-[20px]'>Supporting Sponsor</h1>
                            </div>

                        </div>
                    </div>
                </div>
            </main>



        </React.Fragment >
    )
}

export default page