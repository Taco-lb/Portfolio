import styled from "styled-components";
import * as motion from "motion/react-client";
import PropTypes from "prop-types";
import {TOP_TEXT, TOP_TEXT_2, PATH_TEXT} from "../components/utils/utils"
import TypewriterComponent from "typewriter-effect";
import { useEffect, useState } from "react";
import { useIsLarge } from "../hooks/useSizeChange";

const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    font-weight: 300;
    font-size: ${({$isLarge}) => $isLarge ? "22px" : "16px"};
    padding: 1rem 0.75rem;
    color: var(--font-white);
`;

const TopTextContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

const ContentContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

const PathContainer = styled.div`
    display: flex;
    gap: 0.25rem;    
`;

const ChildrenContainer = styled(motion.div)`
    display: flex;
    flex-direction: column;
`;

export default function ContentLayout ({page, children}) {
    const [typingDone, setTypingDone] = useState(false);
    const breakpointX = 1200; 
    const breakpointY = 760;
    const isLarge = useIsLarge(breakpointX, breakpointY);

    useEffect(() => {
        const delay = 175;
        const chars = `cd ${page}`.length;
        const estimatedDuration = delay * chars;

        const timer = setTimeout(() => {
            setTypingDone(true);
        }, estimatedDuration)

        return () => clearTimeout(timer);
    },[page]);

    return(
        <MainContainer $isLarge = {isLarge}>
            <TopTextContainer>
                {TOP_TEXT}<br/>{TOP_TEXT_2}
            </TopTextContainer>
            <ContentContainer>
                <PathContainer>
                    {PATH_TEXT}
                    <TypewriterComponent options={{
                        strings: `cd ${page}`,
                        autoStart: true,
                        delay: 100,
                        loop: false,
                    }}
                    />
                </PathContainer>
                {typingDone && (
                    <ChildrenContainer
                        initial={{opacity: 0, scale: 1}}
                        animate={{opacity: 1, scale: 1}}
                        transition={{duration: 1}}
                    >
                        {children}
                    </ChildrenContainer>
                )}
            </ContentContainer>
        </MainContainer>
    );
}

ContentLayout.propTypes = {
    page: PropTypes.string.isRequired,
    children: PropTypes.node,
}