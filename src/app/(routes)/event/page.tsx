import EventForm from '@/components/features/booking/EventForm'
import HeaderSection from '@/components/features/booking/HeaderSection'
import React from 'react'

const page = () => {
  return (
    <div className='ms-90'>
        <HeaderSection/>
        <EventForm/>
    </div>
  )
}

export default page