import styled, { keyframes } from 'styled-components';
import { useIsMobile } from '../../hooks/useSizeChange';
import PropTypes from 'prop-types';

const scroll = keyframes`
    0% {
        transform: translateX(0);
    }
    100% {
        transform: translateX(-50%);
    }
`;

const ScrollContainer = styled.div`
    width: 90%;
    overflow: hidden;
    position: relative;
    align-self: center;
    background: transparent;
    will-change: transform;
`;

const ScrollTrack = styled.div`
    display: flex;
    width: fit-content;
    animation: ${scroll} ${({$mobile,$duration}) => $mobile ? $duration - 10 : $duration}s linear infinite;
    align-items: center;
    gap: ${props => props.$gap}rem;
`;

const LogoContainer = styled.div`
    flex-shrink: 0;
    width: ${({$mobile, $width}) => $mobile ? $width - 1 : $width}rem;
    height: ${({$mobile, $height}) => $mobile ? $height - 1 : $height}rem;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Logo = styled.img`
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
    transition: all 0.3s ease;

`;

export default function AutoScrollable({ images, width = 7, height = 7, duration = 50, gap = 3.5 }){
    const breakpoint = 720;
    const isMobile = useIsMobile(breakpoint);
    const logos = [...images, ...images];
    
    return (
        <ScrollContainer>
            <ScrollTrack $duration={duration} $gap={gap} $mobile={isMobile}>
                {logos.map((src, index) => (
                <LogoContainer key={`${index}-${src}`} $mobile={isMobile} $width={width} $height={height}>
                    <Logo
                    src={src}
                    alt={`Logo-${src.substring(src.lastIndexOf('/')+1).replace('.png','')}`}
                    loading="eager"
                    />
                </LogoContainer>
                ))}
            </ScrollTrack>
        </ScrollContainer>
    );
};

AutoScrollable.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
  width: PropTypes.number,
  height: PropTypes.number,
  duration: PropTypes.number,
  gap: PropTypes.number
};