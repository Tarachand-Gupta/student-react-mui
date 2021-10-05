import React from 'react'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { setCurrentNavigation, setNavbarOpen } from '../../Store/App/navigation/slice';

interface CompProps {
    icon?: React.ReactNode;
    value: string;
    pathName: string;
}

function MenuItem({ icon, value, pathName }: CompProps) {
    const dispatch = useDispatch()

    const handleOpenMenu = (value: string, pathName: string) => {
        dispatch(setNavbarOpen(false))
        if(pathName === "/")
            dispatch(setCurrentNavigation("Student."))
        else
            dispatch(setCurrentNavigation(value))

    }

    return (
        <div className="mt-8">
            <Link to={pathName} 
            onClick={()=>handleOpenMenu(value, pathName)}
            >
                <div className="center sm:p-0 p-3" key={value}>
                    {icon}
                </div>
                <div className="text-center">
                    {value}
                </div>
            </Link>
        </div>
    )
}

export default MenuItem
