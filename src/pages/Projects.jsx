import styled from "styled-components";
import ContentLayout from "../layout/ContentLayout";
import PreviewSB from "../assets/images/Preview_SignBridge.png";
import { useIsMobile } from "../hooks/useSizeChange";
import { IconExternalLink } from "@tabler/icons-react";

const ProjectContainer = styled.a`
    display: flex;
    flex-direction: ${({$isMobile}) => $isMobile ? "column" : "row"};
    margin: ${({$isMobile}) => $isMobile ? "2rem 0 0 0" : "2rem 1rem 2rem 1rem"};
    width: fit-content;
    align-items: center;
    gap: ${({$isMobile}) => $isMobile ? "0.25rem" : "2rem"};;
    color: var(--font-white);
    text-decoration: none;
    cursor: pointer;
    transition: transform 0.2s ease, box-shadow 0.2s ease;
    &:hover {
        transform: translateY(-3px) scale(1.02);

    }

    &:active {
        transform: translateY(0px) scale(0.95);
    }
`;

const Previews = styled.img`
    height: ${({$isMobile}) => $isMobile ? "8rem" : "15rem"};;
    border-radius: 1rem;
    object-fit: cover;
`;

const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

export default function Projects () {
    const breakpoint = 700;
    const isMobile = useIsMobile(breakpoint);

    return(
        <ContentLayout page={"projects"}>
            <ProjectContainer  $isMobile={isMobile} href="https://github.com/Taco-lb/Sign-Bridge" target="_blank" rel="noopener noreferrer">
                <Previews $isMobile={isMobile} src={PreviewSB}/>
                <TextContainer>
                    <h3 style={{marginBottom: "0.5rem", display: "flex", gap: "0.5rem",alignItems:"center"}}>
                        Sign Bridge <IconExternalLink size={20} color="white"/>
                    </h3>
                    A sign language recognition web application leveraged by machine learning and computer vision
                    that provides learning and transcription services for the American Sign Language (ASL) alphabet.
                </TextContainer>
            </ProjectContainer>
            <br/>
        </ContentLayout>
    );
}