import React from 'react'
import { useSelector } from 'react-redux';
import FloatingNav from '.';
import { selectNavbarOpen } from '../../Store/App/common/selectors';
import DashboardRoundedIcon from '@mui/icons-material/DashboardRounded';
import MenuItem from './MenuItem';
export type NavMenuProps = {
    show: boolean;
}

function NavMenu( { show }: NavMenuProps) {

    const navbarOpen = useSelector(selectNavbarOpen)
    const menuCount = [1,2,3,4,5,6,7,8,9]
    return (
        <>
            <div className={`w-full h-full fixed block top-0 left-0 bg-white z-50 overflow-hidden ${!navbarOpen && "hidden"}`}>
                <FloatingNav show={true}/>
                <div className="mt-14 grid gap-4 grid-cols-3 justify-items-center">
                    {
                        menuCount.map((value)=>(
                            <MenuItem childComp={<DashboardRoundedIcon />} value={value} />       
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default NavMenu;
