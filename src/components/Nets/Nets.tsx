import SecTitle from "../SectionTitle/SectionTitle";
import {
    NetsSection,
    NetsPicWrapper,
    NetsWrapper,
    NetsContent
} from "./Nets.styled";
import { Content } from '../../types/contentType';

const Nets = ({ content }: { content: Content }) => {
    return (
        <NetsSection>
            <NetsPicWrapper>
                <picture>
                    <source
                        srcSet={` ./images/nets/nets1x.jpg 1x, ./images/nets/nets2x.jpg 2x`}
                        type="image/jpeg"
                    />
                    <img
                        src="./images/nets/nets1x.jpg"
                        alt="Плетіння сіток"
                    />
                </picture>
            </NetsPicWrapper>
            <NetsWrapper>
                <SecTitle title={content?.nets.title} />
                <NetsContent>{content?.nets.text}</NetsContent>
            </NetsWrapper>
        </NetsSection>
    )
}

export default Nets;