import styled from "styled-components";
import BackgroundImage from "../assets/images/Background.png";
import { Outlet } from "react-router-dom";
import TerminalBox from "../components/terminal/TerminalBox";
import {useIsMobile} from "../hooks/useSizeChange";

const MainContainer = styled.div`
    width: 100vw;
    height: 100vh;
    background-image: url(${BackgroundImage});
    background-size: cover;
    background-repeat: no-repeat;
    box-sizing: border-box;
    padding: ${({$size}) => $size ? "0 1.25rem" : "0 8rem"};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export default function MainLayout() {
    const breakpoint = 1200;
    const isMobile = useIsMobile(breakpoint);

    return (
        <MainContainer $size={isMobile}>
            <TerminalBox >
                <Outlet/>
            </TerminalBox>
        </MainContainer>
    );
}