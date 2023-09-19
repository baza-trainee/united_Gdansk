import {
  AssistanceAside,
  AssistanceImage,
  AssistanceImg,
  AssistanceLeft,
  AssistanceSection,
  AssistanceText,
  AssistanceTitle,
} from './Assistance.styled';

import '../../index.css';
import Button from '../Button/Button';

const Assistance = () => {
  return (
    <AssistanceSection>
      <AssistanceLeft>
        <AssistanceImg>
          <AssistanceImage
            src="../../../public/images/gallery/helpmilitary.jpg"
            alt="military image"
          />
        </AssistanceImg>
        <Button
          buttonTitle={'Задонатити'}
          link={'#'}
          className={'button assistance__link'}
        />
      </AssistanceLeft>
      <AssistanceAside>
        <AssistanceTitle>Допомога ЗСУ</AssistanceTitle>
        <AssistanceText>
          Як каже сучасний український поет Сергій Жадан, ми звертаємось до вас, дорогі брати і
          сестри! Батько найближчої подруги нашої Оленки в даний момент служить у 46-му
          Десантно-Штурмовому батальйоні Збройних Сил України, і зараз він разом із своїми
          товаришами перебуває на передовій, на бахмутському напрямку. Ми всі розуміємо, що там
          зараз дуже важка ситуація, і ці хлопці дійсно потребують нашої допомоги. Його бригада
          потребує допомоги, необхідно придбати тепловізор. Відкрито збір коштів - мета купівля
          тепловізора. Частину коштів вже зібрано, але потрібна ваша допомога! Замовляти тепловізор
          плануємо в Польщі. Будемо вдячні за будь-який донат і репост. Звітність по нашим витратам
          можна знайти у наших соцмережах. Більш детальна інформація про збір на сторінці Оленки,
          щоб зберегти не наражати родину подруги на небезпеку.
        </AssistanceText>
      </AssistanceAside>
    </AssistanceSection>
  );
};

export default Assistance;
