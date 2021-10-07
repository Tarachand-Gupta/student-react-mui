import { CircularProgress } from "@mui/material";
import styled from "styled-components";

function Loading() {
    return (
        <StyledWrapper>
            <CircularProgress />
        </StyledWrapper>
    );
};

const StyledWrapper = styled.div`
    position: absolute;
    height: 100%;
    width: 100%;
    z-index: 2;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
  `;

export default Loading;
