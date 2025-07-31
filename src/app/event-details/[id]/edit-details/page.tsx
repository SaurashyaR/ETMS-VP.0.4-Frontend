"use client"

import React, { useState } from 'react'
import { useFieldArray, useForm } from 'react-hook-form'
import Input from './input'
import ImageUploaderController from './file-upload'
import EditArtistField from './editArtistField'
import Link from 'next/link'

function Page() {
    const eventDetails = [{
        "id": 1,
        "organizerId": 1,
        "organizer": {
            "id": 1,
            "organizerName": "Music Festivals Inc",
            "accountId": "ORG123456",
            "logo": "https://example.com/logos/music-fest.png",
            "user": {
                "id": 2,
                "email": "organizer@example.com",
                "firstName": "Jane",
                "lastName": "Smith"
            }
        },
        "locationId": 1,
        "location": {
            "id": 1,
            "name": "Central Park",
            "address": "123 Park Ave, New York, NY"
        },
        "name": "Summer Music Festival",
        "description": "Annual summer music festival featuring top artists",
        "eventDate": "2023-07-15T00:00:00.000Z",
        "eventTime": "2023-07-15T12:00:00.000Z",
        "doorOpeningTime": "2023-07-15T10:00:00.000Z",
        "baseTicketPrice": 99.99,
        "eventPhoto": "https://example.com/events/summer-fest.jpg",
        "termsAndConditions": [
            "No refunds",
            "Age limit: 18+"
        ],
        "status": "UPCOMING",
        "createdAt": "2023-01-10T00:00:00.000Z",
        "updatedAt": "2023-01-10T00:00:00.000Z",
        "createdBy": 2,
        "createdByUser": {
            "id": 2,
            "email": "organizer@example.com",
            "firstName": "Jane",
            "lastName": "Smith"
        },
        "updatedBy": 2,
        "updatedByUser": {
            "id": 2,
            "email": "organizer@example.com",
            "firstName": "Jane",
            "lastName": "Smith"
        },
        "isActive": true,
        "artists": [
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
            {
                "id": 2,
                "name": "The Elements Band",
                "biography": "Award winning rock band from California",
                "photoUrl": "https://example.com/artists/rock-band.jpg",
                "createdAt": "2023-01-05T00:00:00.000Z",
                "updatedAt": "2023-01-05T00:00:00.000Z",
                "createdBy": 2,
                "updatedBy": 2,
                "isActive": true
            }
        ]
    }
    ]


    const artists = [
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
        {
            "id": 2,
            "name": "The Elements Band",
            "biography": "Award winning rock band from California",
            "photoUrl": "https://example.com/artists/rock-band.jpg",
            "createdAt": "2023-01-05T00:00:00.000Z",
            "updatedAt": "2023-01-05T00:00:00.000Z",
            "createdBy": 2,
            "updatedBy": 2,
            "isActive": true
        }
    ]


    // React Hook Form setup
    const { register, handleSubmit, formState: { errors }, control } = useForm({
        defaultValues: {
            name: eventDetails[0]?.name || "",
            EventDate: eventDetails[0]?.eventDate?.split("T")[0] || "",
            EventTime: eventDetails[0]?.eventTime?.split("T")[1]?.slice(0, 5) || "",
            eventPhoto: eventDetails[0]?.eventPhoto || "",
            location: eventDetails[0]?.location?.name || "",
            OpeningTime: eventDetails[0]?.doorOpeningTime?.split("T")[1]?.slice(0, 5) || "",
            price: eventDetails[0]?.baseTicketPrice || "",
            EventDetails: eventDetails[0]?.description || "",
            terms: eventDetails[0]?.termsAndConditions?.join(", ") || "",
            artistname: artists[0]?.name || "",
            biography: artists[0]?.biography || "",
            artistPhoto: null,
            event: null,
            role: "Vocalist",
            newartistname: "",
            newbiography: "",
            newartistPhoto: "",
            newrole: "",
            organizer: eventDetails[0]?.organizer?.organizerName || "",
            artists: eventDetails[0].artists.map(a => ({
                name: a.name,
                biography: a.biography,
                role: "",
                artistPhoto: a.photoUrl || null
            }))

        }
    })


    const { fields, append, remove } = useFieldArray({
        control,
        name: "artists"
    });


    // Handle submit
    function onSubmit(data: any) {
        console.log("Updated Event Data:", data)
    }

    return (
        <React.Fragment>
            <main className="w-full">
                <div className='flex justify-between items-center mx-6 my-2'>
                    <div>
                        <h1 className='text-[32px] font-[400]'>Edit Event Detail</h1>
                        <p>Stay in Control: Edit Your Event Without the Hassle!</p>
                    </div>
                </div>

                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className=' shadow-lg border border-none rounded-[10px] p-9 space-y-4 mx-6 bg-white
                    grid grid-cols-2 gap-16
                    '
                >
                    <h1 className='text-[#4B91F1] font-[400] text-[20px] col-span-2 border-b-2 border-[#0000004D] pb-6'>Event Details</h1>
                    <div className='grid col-span-2'>
                        <label className=' text-[16px] font-medium font-sans'>Upload Event Photo</label>

                        <ImageUploaderController control={control} defaultValue={eventDetails[0]?.eventPhoto || ""} name="eventPhoto" multiple={false} />
                    </div>


                    <Input
                        required={true}
                        label='Event Name'
                        name='name'
                        register={register}
                        error={errors?.name?.message}
                        placeholder="Enter event name"
                    />

                    <Input
                        type="date"
                        required={true}
                        label='Event Date'
                        name='EventDate'
                        register={register}
                        error={errors?.EventDate?.message}
                    />

                    <Input
                        type="time"
                        required={true}
                        label='Event Time'
                        name='EventTime'
                        register={register}
                        error={errors?.EventTime?.message}
                    />

                    <Input
                        required={true}
                        label='Location'
                        name='location'
                        register={register}
                        error={errors?.location?.message}
                    />

                    <Input
                        type="time"
                        required={true}
                        label='Opening Time'
                        name='OpeningTime'
                        register={register}
                        error={errors?.OpeningTime?.message}
                    />

                    <Input
                        type="number"
                        required={true}
                        label='Ticket Price'
                        name='price'
                        register={register}
                        error={errors?.price?.message}
                    />

                    <div className='col-span-2 space-y-6'>


                        <Input
                            required={true}
                            label='Event Details'
                            name='EventDetails'
                            register={register}
                            multiline={true}

                            error={errors?.EventDetails?.message}
                        />

                        <Input
                            required={true}
                            label='Terms and Conditions'
                            name='terms'
                            register={register}
                            multiline={true}
                            error={errors?.terms?.message}
                        />
                    </div>

                    {/* event artist details */}
                    <div className=' col-span-2'>

                        <div className='flex justify-between space-y-6'>

                            <h1 className='text-[#4B91F1] text-[20px]'>Event Artist Details</h1>

                            <button
                                className="p-[10px] cursor-pointer flex justify-center items-center w-[71px] h-[42px] text-[#4B91F1] border rounded-[10px] border-[#4B91F1]"
                                type="button"
                                onClick={() =>
                                    append({
                                        name: "",
                                        role: "",
                                        biography: "",
                                        artistPhoto: null,
                                    })
                                }
                            >
                                + Add
                            </button>
                        </div>

                        <div className='grid grid-cols-2 gap-9'>

                            {fields.map((field, index) => (
                                <EditArtistField
                                    key={field.id}
                                    register={register}
                                    errors={errors?.artists?.[index] || {}}
                                    control={control}
                                    prefix={`artists.${index}`}
                                    defaultImageUrl={eventDetails[0].artists[index]?.photoUrl || ""}
                                    onRemove={() => remove(index)}
                                />
                            ))}

                            <Input
                                type="string"
                                required={true}
                                label='Location of the event '
                                name='location'
                                register={register}
                                error={errors?.location?.message}
                            />
                            <Input
                                type="string"
                                required={true}
                                label='Organizer '
                                name='organizer'
                                register={register}
                                error={errors?.organizer?.message}
                            />

                          
                        </div>


                    </div>

                    <div className='flex gap-x-[10px]'>
                        <button className='w-[71px] h-[42px] p-[10px] text-white bg-[#1EBBD7] border rounded-[5px] cursor-pointer
                            flex flex-col justify-center items-center' >Submit</button>
                        <Link href={`/event-details/:id`} className='w-[71px] h-[42px] p-[10px] text-white bg-[#F53F3F] border rounded-[5px] cursor-pointer
                            flex flex-col justify-center items-center' type='button'>Cancel</Link>
                    </div>
                </form>
            </main>
        </React.Fragment>
    )
}

export default Page
