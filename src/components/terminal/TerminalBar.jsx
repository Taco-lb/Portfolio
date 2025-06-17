import styled from "styled-components";
import {IconUserSquareRounded, IconBriefcase, IconFileCv, IconSend} from "@tabler/icons-react";
import TerminalOption from "./TerminalOptions";
import {useIsMobile} from "../../hooks/useSizeChange";

const BarContainer = styled.nav`
    width: 100%;
    height: 3.5rem;
    background-color: var(--terminal-bar);
    border-radius: 1rem 1rem 0 0;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    position: relative;
    flex-shrink: 0;
    padding: 0.75rem;
    z-index: 100;
    overflow-x: scroll;
    overflow-y: hidden;
    
    &::-webkit-scrollbar {
        height: 0;
    }
    &::-webkit-scrollbar-track {
        background: transparent;
        margin-bottom: 0;
    }
    &::-webkit-scrollbar-thumb {
        background: var(--terminal-scroll);
        border-radius: 1rem;
    }
    
`;

const TabContainer = styled.div`
    display: flex;
    gap: 0.25rem;
`;

const CirclesContiner = styled.div`
    display: flex;
    align-items: center;
    gap: 0.75rem;
    flex-shrink: 0;
    margin-left: 1rem;
`;

const Circle = styled.div`
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    background-color: ${props => props.color};
`;


export default function TerminalBar () {
    const breakpoint =1200;
    const isMobile = useIsMobile(breakpoint);

    const tabs = [
        {icon: <IconUserSquareRounded color="var(--font-white)" size={24}/>, text: "About", url: "/"},
        {icon: <IconFileCv color="var(--font-white)" size={24}/>, text: "Experience", url: "/experience"},
        {icon: <IconBriefcase color="var(--font-white)" size={24}/>, text: "Projects", url: "/projects"},
        {icon: <IconSend color="var(--font-white)" size={24}/>, text: "Contact", url: "/contact"},
    ]
    
    return(
        <BarContainer>
            <TabContainer>  
                {tabs.map((tab, index) => (

                    <TerminalOption 
                        key = {index}
                        icon = {tab.icon}
                        text = {isMobile ? "" : tab.text}
                        url = {tab.url}
                    />
                ))}
            </TabContainer>
            <CirclesContiner>
                <Circle color="#1FF43F" />
                <Circle color="#E7CF32" />
                <Circle color="#F63C3C" />
            </CirclesContiner>
        </BarContainer>
    )
}