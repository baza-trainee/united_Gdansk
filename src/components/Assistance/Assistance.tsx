import {
  AssistanceSection,
  AssistanceAside,
  AssistanceImageWrapper,
  AssistanceText,
  ButtonPosition,
  ButtonWrapper
} from "./Assistance.styled";
import "../../index.css";
import Button from "../Button/Button";
import { Content } from "../../types/contentType";
import SecTitle from "../SectionTitle/SectionTitle";

const Assistance = ({ content }: { content: Content }) => {
  return (
    <AssistanceSection>
      <AssistanceImageWrapper>
        <picture>
          <source
            srcSet={` ./images/gallery/helpmilitary.jpg 1x, ./images/gallery/helpmilitary.jpg 2x`}
            type="image/jpeg"
          />
          <img src="./images/gallery/helpmilitary.jpg" alt="military image" />
        </picture>
        <ButtonWrapper>
          <Button
            buttonTitle={content?.donationButton}
            link="https://send.monobank.ua/jar/4ZFV2rZJbe"
          />
        </ButtonWrapper>
      </AssistanceImageWrapper>
      <div>
        <AssistanceAside>
          <SecTitle title={content?.assistance.title} />

          <AssistanceText>{content?.assistance.text}</AssistanceText>
        </AssistanceAside>
        <ButtonPosition>
          <Button
            buttonTitle={content?.donationButton}
            link="https://send.monobank.ua/jar/4ZFV2rZJbe"
          />
        </ButtonPosition>
      </div>
    </AssistanceSection>
  );
};

export default Assistance;
