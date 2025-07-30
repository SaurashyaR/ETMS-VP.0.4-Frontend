import RecentBookings from '@/components/features/dashboard/RecentBookings'
import UpcomingEvents from '@/components/features/dashboard/UpcomingEvents'
import React from 'react'

const page = () => {
  return (
    <>
      <div className="flex">
        <UpcomingEvents />
      <RecentBookings />
      </div>
    </>
  )
}

export default page