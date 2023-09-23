import SecTitle from "../SectionTitle/SectionTitle";
import {
  RalliesSection,
  RalliesText,
  RalliesWrapper,
  ImageRalliesWrapper,
} from "./AboutRallies.styled";
import { Content } from "../../types/contentType";

const AboutRallies = ({ content }: { content: Content }) => {
  return (
    <RalliesSection>
      <ImageRalliesWrapper>
        <picture>
          <source
            srcSet={` ./images/aboutRallies/aboutRallies.jpg 1x, ./images/aboutRallies/aboutRallies2x.jpg 2x`}
            type="image/jpeg"
          />
          <img src="./images/aboutRallies.jpg" alt="rallies image" />
        </picture>
      </ImageRalliesWrapper>
      <RalliesWrapper>
        <SecTitle title={content?.aboutRollies.title} />
        <RalliesText>{content?.aboutRollies.text}</RalliesText>
      </RalliesWrapper>
    </RalliesSection>
  );
};

export default AboutRallies;
