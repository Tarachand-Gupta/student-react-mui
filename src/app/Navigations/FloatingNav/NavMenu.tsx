import React from 'react'
import { useSelector } from 'react-redux';
import FloatingNav from '.';
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
            icon: <FcHome size={45} />
        },
        {
            value: "Noticeboard",
            pathName: "/noticeboard",
            icon: <FcTemplate size={45} />
        },
        {
            value: "Messages",
            pathName: "/messaging",
            icon: <FcSms size={45} />
        },
        {
            value: "Notes",
            pathName: "/notes",
            icon: <FcViewDetails size={45} />
        },
        {
            value: "Stats",
            pathName: "/stats",
            icon: <FcBullish size={45} />
        },
        {
            value: "Events",
            pathName: "/event",
            icon: <FcDataSheet size={45} />
        },
        {
            value: "Profile",
            pathName: "/profile",
            icon: <FcBusinessman size={45} />
        },
        {
            value: "Account",
            pathName: "/account",
            icon: <FcSettings size={45} />
        },

    ]
    return (
        <>
            <div className={`w-full h-full fixed block top-0 left-0 bg-white z-50 overflow-hidden ${!navbarOpen && "hidden"}`}>
                <FloatingNav show={true} />
                <div className="mt-14 grid gap-4 grid-cols-3 justify-items-center">
                    {
                        menuItems.map(({ value, pathName, icon }) => (
                            <MenuItem icon={icon} value={value} pathName={pathName} />
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default NavMenu;
