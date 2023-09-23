import SecTitle from "../SectionTitle/SectionTitle";
import {
    
} from "./Nets.styled";
import { Content } from '../../types/contentType';

const Nets = ({ content }: { content: Content }) => {
    return (
        <NetsSection>
            <NetsPicWrapper>
                <picture>
                    <source
                        srcSet={` ./images/nets/nets1x.jpg 1x, ./images/aboutUs/aboutUs2x.jpg 2x`}
                        type="image/jpeg"
                    />
                    <img
                        src="./images/aboutUs/aboutUs1x.jpg"
                        alt="Ми"
                    />
                </picture>
            </NetsPicWrapper>
            <NetsWrapper>
                <SecTitle title={content?.aboutUs.title} />
                <NetsContent>{content?.aboutUs.text}</AboutUsContent>
            </NetsWrapper>
        </NetsSection>
    )
}

export default Nets;