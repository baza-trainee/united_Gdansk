import SecTitle from "../SectionTitle/SectionTitle";
import {
  RalliesSection,
  RalliesText,
  RalliesWrapper,
} from "./AboutRallies.styled";
import { Content } from "../../types/contentType";

const AboutRallies = ({ content }: { content: Content }) => {
  return (
    <RalliesSection>
      <picture>
        <source
          srcSet={` ./images/aboutRallies/aboutRallies.jpg 1x, ./images/aboutRallies/aboutRallies2x.jpg 2x`}
          type="image/jpeg"
        />
        <img src="./images/aboutRallies.jpg" alt="rallies image" />
      </picture>
      <RalliesWrapper>
        <SecTitle title={content?.aboutRollies.title} />
        <RalliesText>{content?.aboutRollies.text}</RalliesText>
      </RalliesWrapper>
    </RalliesSection>
  );
};

export default AboutRallies;
