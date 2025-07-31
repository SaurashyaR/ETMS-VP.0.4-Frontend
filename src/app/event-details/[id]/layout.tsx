'use client'

import SideBar from "@/components/features/shared/SideBar"
import { ReactNode } from "react"

const Layout = ({ children }: { children: ReactNode }) => {

    return (
        <>
            <main className="flex">

                <SideBar />
                {children}
            </main>
        </>

    )
}

export default Layout