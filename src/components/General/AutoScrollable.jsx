import styled, {css, keyframes} from "styled-components";
import PropTypes from "prop-types";
import {useIsMobile} from "../../hooks/useSizeChange";

const scroll = keyframes`
    0%{
        transform: translateX(0);
    }
    100%{
        transform: translateX(-50%);
    }
`

const GalleryWrapper = styled.div`
    width: 90%;
    align-self: center;
    overflow: hidden;
    box-sizing: border-box;
`;

const Content = styled.div`
    display: flex;
    gap: 3.5rem;
    width: 200%;
    animation: ${({$mobile}) => $mobile ? css`${scroll} 15s linear infinite` : css`${scroll} 35s linear infinite`};
    will-change: transform;
`;

const ImageItem = styled.img`
    height: ${({$mobile}) => $mobile ? "5rem" : "6rem"};
    border-radius: 0.5rem;
    object-fit: cover;
    /* filter: grayscale(100%); */
`;

export default function AutoScrollable ({images}) {
    const breakpoint = 720;
    const isMobile = useIsMobile(breakpoint);
    const scrollingImages = [...images, ...images, ...images];

    return(
        <GalleryWrapper>
            <Content $mobile = {isMobile}>
                {scrollingImages.map((src, index) => (
                    <ImageItem key={index} src={src} alt={`image-${src}`} $mobile = {isMobile} loading="eager"/>
                ))}
            </Content>
        </GalleryWrapper>
    )
}

AutoScrollable.propTypes = {
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
}