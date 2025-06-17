import styled from "styled-components";
import ContentLayout from "../layout/ContentLayout";
import { IconBrandGithub, IconMail, IconBrandLinkedin, IconFilePencil } from "@tabler/icons-react";

const IconsContainer = styled.div`
    display: flex;
    gap: 1rem;
    align-items: center;
    padding-left: 0.5rem;
`;

const Icons = styled.a`
    cursor: pointer;
    transition: transform 0.2s ease, box-shadow 0.2s ease;
    color: var(--font-white);

    &:hover {
        transform: translateY(-5px) scale(1.25);
    }

    &:active {
        transform: translateY(0px) scale(0.98);
    }
`;

const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0 0 2rem 0.5rem;
    margin: 0;
`;


export default function Contact () {

    return(
        <ContentLayout page={"contact"}>
            <TextContainer>
                <h4>
                    Got a project in mind, a question to ask, or just want to say hello? 
                    I&apos;m always happy to connect and collaborate.
                </h4>
                    Reach out on any of the links below:
            </TextContainer>
            <IconsContainer>
                <Icons href="mailto:antoinemharb@outlook.com">
                    <IconMail size={55}/>
                </Icons>
                <Icons href="https://github.com/Taco-lb" target="_blank" rel="noopener noreferrer">
                    <IconBrandGithub size={55}/>
                </Icons>
                <Icons href="https://www.linkedin.com/in/antoinemharb/" target="_blank" rel="noopener noreferrer">
                    <IconBrandLinkedin size={55}/>
                </Icons>
                <Icons href="https://forms.cloud.microsoft/r/2JUkszh3Jb" target="_blank" rel="noopener noreferrer">
                    <IconFilePencil size={55} title="Submit Request / Inquiry"/>
                </Icons>
            </IconsContainer>
            <br/>
        </ContentLayout>
    );
}