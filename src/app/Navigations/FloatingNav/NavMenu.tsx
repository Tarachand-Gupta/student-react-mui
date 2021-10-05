import React from 'react'
import { useSelector } from 'react-redux';
import { FcHome, FcSms, FcViewDetails, FcTemplate, FcBullish, FcDataSheet, FcBusinessman, FcSettings } from "react-icons/fc";


import MenuItem from './MenuItem';
import { selectNavbarOpen } from '../../Store/App/navigation/selectors';
export type NavMenuProps = {
    show: boolean;
}

function NavMenu({ show }: NavMenuProps) {

    const navbarOpen = useSelector(selectNavbarOpen)
    const menuItems = [
        {
            value: "Home",
            pathName: "/",
            icon: <FcHome size={"40%"} />
        },
        {
            value: "Noticeboard",
            pathName: "/noticeboard",
            icon: <FcTemplate size={"40%"} />
        },
        {
            value: "Messages",
            pathName: "/messaging",
            icon: <FcSms size={"40%"} />
        },
        {
            value: "Notes",
            pathName: "/notes",
            icon: <FcViewDetails size={"40%"} />
        },
        {
            value: "Stats",
            pathName: "/stats",
            icon: <FcBullish size={"40%"} />
        },
        {
            value: "Events",
            pathName: "/event",
            icon: <FcDataSheet size={"40%"} />
        },
        {
            value: "Profile",
            pathName: "/profile",
            icon: <FcBusinessman size={"40%"} />
        },
        {
            value: "Account",
            pathName: "/account",
            icon: <FcSettings size={"40%"} />
        },

    ]
    return (
        <>
            <div className={`w-full h-full fixed block top-0 left-0 bg-white z-10 overflow-scroll ${!navbarOpen && "hidden"}`} style={{fontSize: '3vmax'}}>
                {/* <FloatingNav show={true} /> */}
                <div className="mt-14 grid gap-3 grid-cols-2 sm:grid-cols-3 justify-items-center pb-8">
                    {
                        menuItems.map(({ value, pathName, icon }) => (
                            <MenuItem key={value} icon={icon} value={value} pathName={pathName} />
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default NavMenu;
