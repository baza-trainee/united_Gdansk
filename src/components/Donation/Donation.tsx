import Button from '../Button/Button';
import { DonationSection, DonationText, DonationTitle, DonationInner } from './Donation.styled';

const Assistance = () => {
  return (
    <DonationSection>
      <DonationTitle>Донати</DonationTitle>
      <DonationInner>
        <DonationText>
          Кожний донат важливий, та наближає нашу Перемогу. Незалежно від того, чи це маленький
          внесок або великий вклад, кожна допомога робить різницю. Це наша спільна мета, і разом ми
          досягнемо її. Дякуємо за вашу підтримку
        </DonationText>
        <Button
          buttonTitle={'Задонатити'}
          link={'#'}
          className={'button donation__link'}
        />
      </DonationInner>
    </DonationSection>
  );
};

export default Assistance;
