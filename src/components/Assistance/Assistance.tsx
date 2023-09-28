import {
  AssistanceSection,
  AssistanceLeft,
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
        <AssistanceImage
          src="./images/gallery/helpmilitary.jpg"
          alt="military image"
        />
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
