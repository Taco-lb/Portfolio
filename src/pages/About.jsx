import AutoScrollable from "../components/General/AutoScrollable";
import ContentLayout from "../layout/ContentLayout";
import styled from "styled-components";
import ProfilePic from "../assets/images/Professional.jpg"
import { useIsMobile } from "../hooks/useSizeChange";

//Age calculation
var currentAge;
if((new Date().getDate() < 2) && (new Date().getMonth() == 1)){
    currentAge = new Date().getFullYear() - 2003;
}
else{
    currentAge = new Date().getFullYear() - 2002;
}

//Get Images
const imagesModule = import.meta.glob('../assets/images/Scrollable/*.png', {
    eager: true,
    import: 'default',
});
const images = Object.values(imagesModule);

const TextSideImageContainer = styled.div`
    display: flex;
    gap: 1.25rem;
    justify-content: center;
    align-items: center;
`;

const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

const ProfilePicture = styled.img`
    height: 15rem;
    margin: 0 2rem 1.5rem 0;
    border-radius: 1rem;
    object-fit: cover;
    /* filter: grayscale(100%); */
`;


export default function About () {
    const breakpoint = 720;
    const isMobile = useIsMobile(breakpoint);
    return(
        <ContentLayout page={"about"}>
        {isMobile ? (
           <ul>
                <TextContainer>
                    <ProfilePicture src={ProfilePic} $isMobile={isMobile}></ProfilePicture>
                    <li>
                        <p style={{margin: "0"}}>
                            My name is Antoine and I am a <b>{currentAge} year old</b> Ecuadorian/Lebanese 
                            Bachelor of <b>Computer Science</b>. With a strong foundation 
                            in both theoretical principles and practical applications in various areas such as:
                        </p>
                        <p style={{fontWeight: "600"}}>
                        Web Development, Programming, Databases, Design, Software Development Life Cycle (SDLC), and Networks.
                        </p>
                    </li>
                </TextContainer>
                <br/>
                <li>
                    Proficient in the following technologies:
                </li>
           </ul>
           ) :
           (
            <ul>
                <li>
                    <TextSideImageContainer>
                        <TextContainer>
                            <p style={{margin: "0"}}>
                                My name is Antoine and I am a <b>{currentAge} year old</b> Ecuadorian/Lebanese 
                                Bachelor of <b>Computer Science</b>. With a strong foundation 
                                in both theoretical principles and practical applications in various areas such as:
                            </p>
                            <p style={{fontWeight: "600"}}>
                            Web Development, Programming, Databases, Design, Software Development Life Cycle (SDLC), and Networks.
                            </p>
                        </TextContainer>
                        <ProfilePicture src={ProfilePic}></ProfilePicture>
                    </TextSideImageContainer>
                </li>
                <li>
                    Proficient in the following technologies:
                </li>
            </ul>
           )}
           <br/>
           <AutoScrollable images={images} />
           <br/>
        </ContentLayout>
    );
}