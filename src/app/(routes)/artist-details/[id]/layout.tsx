'use client'

import SideBar from "@/components/features/shared/SideBar"
import { ReactNode } from "react"

const Layout = ({ children }: { children: ReactNode }) => {
    return (
        <main className="flex min-h-screen">
            {/* Sidebar */}
            <SideBar />

            {/* Main content with padding to avoid overlap */}
            <div className="flex-1 ml-[260px] p-4">
                {children}
            </div>
        </main>
    )
}

export default Layout
