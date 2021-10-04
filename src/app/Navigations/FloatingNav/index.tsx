import React from 'react'
import ButtonUnstyled, { ButtonUnstyledProps } from '@mui/core/ButtonUnstyled';
import AppsRoundedIcon from '@mui/icons-material/AppsRounded';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import { styled } from '@mui/system';
import { useDispatch, useSelector } from 'react-redux';
import { selectCurrentNavigation, selectNavbarOpen } from '../../Store/App/navigation/selectors';
import { setNavbarOpen } from '../../Store/App/navigation/slice';

export type NavProps = {
    show: boolean;
}

function FloatingNav({ show }: NavProps) {

    const navbarOpen = useSelector(selectNavbarOpen)
    const currentNavigation = useSelector(selectCurrentNavigation)
    const dispatch = useDispatch()
    const CustomButtonRoot = styled('span')(`
        background-color: ${!navbarOpen ? "#007fff" : "#ef5350"};
        padding: 15px 15px;
        border-radius: 10px;
        color: #fff;
        font-weight: 600;
        font-family: Helvetica, Arial, sans-serif;
        font-size: 14px;
        transition: all 200ms ease;
        cursor: pointer;
        box-shadow: 0 4px 20px 0 ${!navbarOpen ? "rgb(0,127,255, 0.3)" : "rgb(239,83,80, 0.35)"}, 0 0 0 0 rgb(0,127,255);
        border: none;
    
        &:hover {
            background-color: ${!navbarOpen ? "#0059b2" : "#e57373"};
        }
    `);
    function CustomButton(props: ButtonUnstyledProps) {
        return <ButtonUnstyled {...props} component={CustomButtonRoot} />;
    }

    return (
        <div className={`sticky top-6 left-5 max-w-max ${!show && "hidden"} `}>
            <CustomButton onClick={() => dispatch(setNavbarOpen(!navbarOpen))}>
                {
                    navbarOpen 
                    ? <CloseRoundedIcon /> 
                    : <AppsRoundedIcon />
                } {"  "}
                {navbarOpen ? "Student." : currentNavigation}
            </CustomButton>
        </div>
    )
}

export default FloatingNav
