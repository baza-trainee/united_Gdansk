import {
  AssistanceSection,
  AssistanceLeft,
  AssistanceImg,
  AssistanceImage,
  AssistanceAside,
  AssistanceTitle,
  AssistanceText,
  ButtonPosition,
} from './Assistance.styled';
import '../../index.css';
import Button from '../Button/Button';
import { Content } from '../../types/contentType';

const Assistance = ({ content }: { content: Content }) => {
  return (
    <AssistanceSection>
      <AssistanceLeft>
        <AssistanceImg>
          <AssistanceImage
            src="./images/gallery/helpmilitary.jpg"
            alt="military image"
          />
        </AssistanceImg>
        <ButtonPosition>
          <Button
            buttonTitle={content?.donationButton}
            link={'#'}
          />
        </ButtonPosition>
      </AssistanceLeft>
      <AssistanceAside>
        <AssistanceTitle>{content?.assistance.title}</AssistanceTitle>
        <AssistanceText>{content?.assistance.text}</AssistanceText>
      </AssistanceAside>
    </AssistanceSection>
  );
};

export default Assistance;
