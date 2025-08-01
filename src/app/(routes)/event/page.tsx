import EventForm from '@/components/features/booking/EventForm'
import HeaderSection from '@/components/features/booking/HeaderSection'
import React from 'react'
import Sidebar from '@/components/features/shared/SideBar'

const page = () => {
  return (
    <>
      <div className="flex">
        <Sidebar />
        <div className="ml-[290px] mr-4 flex-1">
          <HeaderSection />
          <EventForm />
        </div>
      </div>
    </>
  )
}

export default page
