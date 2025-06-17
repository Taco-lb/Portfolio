import styled from "styled-components";
import ContentLayout from "../layout/ContentLayout";
import {useIsMobile} from "../hooks/useSizeChange";
import { IconExternalLink } from "@tabler/icons-react";

const LinkToResume = styled.a`
    display: inline-flex;
    width: fit-content;
    gap: 0.5rem;
    align-items: center;
    padding-left: 1rem;
    margin: 1rem 0 0.5rem 0;
    color: var(--font-white);
    text-decoration: none;
    font-weight: 500;
    transition: transform 0.2s ease, box-shadow 0.2s ease;
    cursor: pointer;
    text-decoration: underline;
    text-underline-offset: 0.25rem;

    &:hover {
        transform: translateY(-3px) scale(1.05);
    }

    &:active {
        transform: translateY(0px) scale(0.98);
    }
`;


export default function Experience () {
    const breakpoint = 720;
    const isMobile = useIsMobile(breakpoint);

    return(
        <ContentLayout page={"experience"}>
            {isMobile ? (
                    <>
                        <h3>Aug - Oct 2024 <br/> Frontend Developer Intern | Hiperlinx </h3>
                        <ul>
                            <li>Collaborated on intuitive UI/UX design using Figma and modern design principles.<br/></li>
                            <li>Developed original 15+ frontend features and components in React.js and Vite, reducing redundancy by 70%.<br/></li>
                            <li>Participated in agile sprints, completing over 35+ tasks tracked via Asana and Bitbucket with timely delivery.<br/></li>
                            <li>Conducted API testing using Postman to increase the frontend-backend consistency.<br/></li>
                        </ul>
                    </>     
                )   
                :
                (   
                    <>
                        <h3>Aug - Oct 2024 &nbsp;|&nbsp; Frontend Developer Intern - Hiperlinx </h3>
                        <ul>
                            <li>Collaborated on intuitive UI/UX design using Figma and modern design principles.<br/></li>
                            <li>Developed original 15+ frontend features and components in React.js and Vite, reducing redundancy by 70%.<br/></li>
                            <li>Participated in agile sprints, completing over 35+ tasks tracked via Asana and Bitbucket with timely delivery.<br/></li>
                            <li>Conducted API testing using Postman to increase the frontend-backend consistency.<br/></li>
                        </ul>
                    </>
                )
            }

            <LinkToResume href="resume.pdf" target="_blank" rel="noopener noreferrer"> 
                View Full Resume <IconExternalLink size={22} color="white"/> 
            </LinkToResume>
            <br/>
        </ContentLayout>
    );
}