import React from 'react'
import ButtonUnstyled, { ButtonUnstyledProps} from '@mui/core/ButtonUnstyled';
import AppsRoundedIcon from '@mui/icons-material/AppsRounded';
import { styled } from '@mui/system';

export type NavProps = {
    show: boolean;
}

function FloatingNav( { show }: NavProps) {

    const CustomButtonRoot = styled('span')(`
        background-color: #007fff;
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
        background-color: #0059b2;
        }
    `);
    function CustomButton(props: ButtonUnstyledProps) {
        return <ButtonUnstyled {...props} component={CustomButtonRoot} />;
      }

    return (
        <div className={`sticky top-6 left-5 max-w-max ${!show && "hidden"} `}>
            <CustomButton>
                <AppsRoundedIcon /> Student.
            </CustomButton>
      </div>
    )
}

export default FloatingNav
