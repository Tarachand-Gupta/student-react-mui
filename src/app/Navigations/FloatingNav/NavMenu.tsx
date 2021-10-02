import React from 'react'
import { useSelector } from 'react-redux';
import FloatingNav from '.';
import DashboardRoundedIcon from '@mui/icons-material/DashboardRounded';
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
            pathName: "/"
        },
        {
            value: "Notice",
            pathName: "/noticeboard"
        },
        {
            value: "Chats",
            pathName: "/chats"
        },
        {
            value: "Notes",
            pathName: "/notes"
        },
        {
            value: "Attendance",
            pathName: "/attendance"
        },
        {
            value: "Events",
            pathName: "/event"
        },
        {
            value: "Profile",
            pathName: "/profile"
        },
        {
            value: "Current Affairs",
            pathName: "/currentaffairs"
        },
        {
            value: "Account",
            pathName: "/account"
        },
    ]
    return (
        <>
            <div className={`w-full h-full fixed block top-0 left-0 bg-white z-50 overflow-hidden animate-fade ${!navbarOpen && "hidden"}`}>
                <FloatingNav show={true} />
                <div className="mt-14 grid gap-4 grid-cols-3 justify-items-center">
                    {
                        menuItems.map(({ value, pathName }) => (
                            <MenuItem iconComp={<DashboardRoundedIcon />} value={value} pathName={pathName} />
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default NavMenu;
