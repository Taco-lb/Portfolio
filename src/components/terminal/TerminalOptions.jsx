import styled from "styled-components";
import PropTypes from "prop-types";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import {useIsMobile} from "../../hooks/useSizeChange";

const Option = styled.div`
    display: flex;
    gap: 0.5rem;
    width: ${({$size}) => $size};
    height: 2.75rem;
    color: var(--font-white);
    font-size: 18px;
    font-weight: 500;
    box-sizing: border-box;
    padding: 0.5rem 1rem;
    cursor: pointer;
    align-items: center;
    border-radius: 1rem 1rem 0 0;
    transition: background-color 0.3s ease;
    background-color: ${props => {
        if (props.$isActive) return "var(--terminal-color)";  
        if (!props.$isActive && props.$isHovered) return "var(--terminal-hover)"; 
        return "var(--terminal-bar)";                      
    }};
    
    &:hover {
        background-color: "var(--terminal-hover)";
    }
`;

const StyledLink = styled(Link)`
    text-decoration: none; 
    color: var(--text-white);
`;

export default function TerminalOption({ icon, text, url }) {
    const [isHovered, setIsHovered] = useState(false);
    const location = useLocation();
    const isActive = location.pathname === url;
    const breakpoint = 1200;
    const isMobile = useIsMobile(breakpoint);

    return (
        <StyledLink to={url}>
            <Option
                $size = {isMobile ? "3.5rem" : "12rem"} 
                $isActive={isActive}
                $isHovered={isHovered}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                {icon}
                {text}
            </Option>
        </StyledLink>
    );
}

TerminalOption.propTypes = {
    icon: PropTypes.any.isRequired,
    text: PropTypes.string,
    url: PropTypes.string.isRequired,
};