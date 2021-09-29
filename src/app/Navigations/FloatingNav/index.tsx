import React from 'react'
import ButtonUnstyled, { ButtonUnstyledProps} from '@mui/core/ButtonUnstyled';
import AppsRoundedIcon from '@mui/icons-material/AppsRounded';
import { styled } from '@mui/system';
import { useDispatch, useSelector } from 'react-redux';
import { selectNavbarOpen } from '../../Store/App/common/selectors';
import { setNavbarOpen } from '../../Store/App/common/slice';

export type NavProps = {
    show: boolean;
}

function FloatingNav( { show }: NavProps) {

    const navbarOpen = useSelector(selectNavbarOpen)
    const dispatch = useDispatch()
    const CustomButtonRoot = styled('span')(`
        background-color: ${!navbarOpen ? "#007fff" : "#e57373"};
        padding: 15px 15px;
        border-radius: 10px;
        color: #fff;
        font-weight: 600;
        font-family: Helvetica, Arial, sans-serif;
        font-size: 14px;
        transition: all 200ms ease;
        cursor: pointer;
        box-shadow: 0 4px 20px 0 rgba(61, 71, 82, 0.1), 0 0 0 0 rgba(0, 127, 255, 0);
        border: none;
    
        &:hover {
        background-color: ${!navbarOpen ? "#0059b2" : "#ef5350"};
        }
    `);
    function CustomButton(props: ButtonUnstyledProps) {
        return <ButtonUnstyled {...props} component={CustomButtonRoot} />;
      }

    return (
        <div className={`sticky top-6 left-5 max-w-max ${!show && "hidden"} `}>
            <CustomButton onClick={()=>dispatch(setNavbarOpen(!navbarOpen))}>
                <AppsRoundedIcon /> Student.
            </CustomButton>
        </div>
    )
}

export default FloatingNav
