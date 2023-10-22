import {
  AssistanceSection,
  AssistanceWrapper,
  AssistanceAside,
  AssistanceImageWrapper,
  AssistanceText,
  ButtonWrapper,
} from './Assistance.styled';
import '../../index.css';
import Button from '../Button/Button';
import { Content } from '../../types/contentType';
import SecTitle from '../SectionTitle/SectionTitle';

const Assistance = ({ content }: { content: Content }) => {
  return (
    <AssistanceSection>
      <AssistanceWrapper>
        <AssistanceImageWrapper>
          <picture>
            <source
              srcSet={` ./images/gallery/helpmilitary.jpg 1x, ./images/gallery/helpmilitary.jpg 2x`}
              type="image/jpeg"
            />
            <img
              src="./images/gallery/helpmilitary.jpg"
              alt="military image"
            />
          </picture>
        </AssistanceImageWrapper>
        <AssistanceAside>
          <SecTitle title={content?.assistance.title} />
          <AssistanceText>{content?.assistance.text}</AssistanceText>
          <ButtonWrapper>
            <Button
              buttonTitle={content?.donationButton}
              link="https://send.monobank.ua/jar/4ZFV2rZJbe"
              content={content}
            />
          </ButtonWrapper>
        </AssistanceAside>
      </AssistanceWrapper>
    </AssistanceSection>
  );
};

export default Assistance;
