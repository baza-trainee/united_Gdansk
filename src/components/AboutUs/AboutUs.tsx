import SecTitle from "../SectionTitle/SectionTitle";
import {
    AboutUsSection,
    AboutUsContent,
    AboutUsWrapper,
    ImageAboutUsWrapper
} from "./AboutUs.styled";
import { Content } from '../../types/contentType';

const AboutUs = ({ content }: { content: Content }) => {
    return (
        <AboutUsSection id="aboutUs">
            <ImageAboutUsWrapper>
                <picture>
                    <source
                        srcSet={` ./images/aboutUs/aboutUs1x.jpg 1x, ./images/aboutUs/aboutUs2x.jpg 2x`}
                        type="image/jpeg"
                    />
                    <img
                        src="./images/aboutUs/aboutUs1x.jpg"
                        alt="Ми"
                    />
                </picture>
            </ImageAboutUsWrapper>
            <AboutUsWrapper>
                <SecTitle title={content?.aboutUs.title} />
                <AboutUsContent>{content?.aboutUs.text}</AboutUsContent>
            </AboutUsWrapper>
        </AboutUsSection>
    )
}

export default AboutUs;