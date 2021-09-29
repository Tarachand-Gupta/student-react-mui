import React from 'react'
import { useSelector } from 'react-redux';
import FloatingNav from '.';
import { selectNavbarOpen } from '../../Store/App/common/selectors';

export type NavMenuProps = {
    show: boolean;
}

function NavMenu( { show }: NavMenuProps) {

    const navbarOpen = useSelector(selectNavbarOpen)

    return (
        <>
            <div className={`w-full h-full fixed block top-0 left-0 bg-white opacity-95 z-50 ${!navbarOpen && "hidden"}`}>
                <FloatingNav show={true}/>
                <div className="mt-14 grid gap-4 grid-cols-3">
                
                </div>
            </div>
        </>
    )
}

export default NavMenu;
