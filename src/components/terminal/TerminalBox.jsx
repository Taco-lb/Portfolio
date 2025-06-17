import styled, {keyframes} from "styled-components";
import TerminalBar from "./TerminalBar";
import PropTypes from "prop-types";
import * as motion from "motion/react-client";

const ShadowAnimation = keyframes`
    0% {
        filter: drop-shadow(0 0 0.5rem rgba(0, 0, 0, 0.6));
    }
    50% {
        filter: drop-shadow(0 0 1.25rem rgba(0, 0, 0, 1));
    }
    100% {
        filter: drop-shadow(0 0 0.5rem rgba(0, 0, 0, 0.6));
    }
`;

const MainContainer = styled(motion.div)`
    width: 100%;
    max-height: calc(100% - 3.5rem);
    margin: 0;
    padding: 0;
    animation: ${ShadowAnimation} 5s ease-in-out infinite;
    
`;

const TerminalContainer = styled(motion.div)`
    width: 100%;
    max-height: calc(100% - 3.5rem);
    display: flex;
    flex-direction: column;
    background-color: var(--terminal-color);
    border-radius: 0 0 1rem 1rem;
    overflow-x: auto;
    overflow-y: auto;
    scroll-padding-top: 1rem;
    &::-webkit-scrollbar {
        width: 0.25rem;
    }
    &::-webkit-scrollbar-track {
        background: transparent;
        margin-bottom: 1rem;
    }
    &::-webkit-scrollbar-thumb {
        background: var(--terminal-scroll);
        border-radius: 1rem;
    }
`;

export default function TerminalBox ({children}) {

    
    return(
        <MainContainer
            initial={{opacity: 0, scale: 0}}
            animate={{opacity: 1, scale: 1}}
            transition={{duration: 1, scale: {type: "spring", visualDuration: 0.7, bounce: 0.5},}}
        >
            <TerminalBar/>
            <TerminalContainer>
                {children}
            </TerminalContainer>
        </MainContainer>
        
    );
}

TerminalBox.propTypes = {
    children: PropTypes.any,
}