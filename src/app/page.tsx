import RecentBookings from '@/components/features/dashboard/RecentBookings'
import TopSellingEvents from '@/components/features/dashboard/TopSellingEvents'
import UpcomingEvents from '@/components/features/dashboard/UpcomingEvents'
import Sidebar from '@/components/features/shared/SideBar'
import React from 'react'

const page = () => {
  return (
    <>
    <Sidebar />
      <div className="flex">
        <UpcomingEvents />
      <RecentBookings />
      </div>
        <TopSellingEvents />
    </>
  )
}

export default page