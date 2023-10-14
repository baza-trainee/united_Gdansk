import Button from "../Button/Button";
import {
  DonationSection,
  DonationText,
  DonationTitle,
  DonationInner,
} from "./Donation.styled";
import { Content } from "../../types/contentType";

const Donation = ({ content }: { content: Content }) => {
  return (
    <DonationSection>
      <DonationTitle>{content?.donation.title}</DonationTitle>
      <DonationInner>
        <DonationText>{content?.donation.text}</DonationText>

        <Button
          content={content}
          buttonTitle={content?.donationButton}
          link="https://send.monobank.ua/jar/4ZFV2rZJbe"
        />
      </DonationInner>
    </DonationSection>
  );
};

export default Donation;
