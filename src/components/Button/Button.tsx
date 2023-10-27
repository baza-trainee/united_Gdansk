import { Content } from '@/types/contentType';
import { DonateBtnsSection, BlickBtn, Btn, BlickNameWrapper } from './Button.styled';
import { useState, useEffect, useRef } from 'react';
import Blick from '../Blick/Blick';

type IPropsBtn = {
  buttonTitle: string;
  link: string;
  content?: Content;
};

const Button = ({ buttonTitle, link, content }: IPropsBtn) => {
  const [blickModal, setBlickModal] = useState(false);
  const modalRef = useRef<HTMLDivElement | null>(null);

  const closeBlickModal = () => {
    setBlickModal(false);
  };

  useEffect(() => {
    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closeBlickModal();
      }
    };

    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        closeBlickModal();
      }
    };

    if (blickModal) {
      document.addEventListener('keydown', handleEscapeKey);
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('keydown', handleEscapeKey);
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('keydown', handleEscapeKey);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [blickModal]);

  return (
    <DonateBtnsSection>
      {blickModal && (
        <BlickNameWrapper ref={modalRef}>
          <Blick content={content} />
        </BlickNameWrapper>
      )}
      <BlickBtn onClick={() => setBlickModal(true)}>
        <img
          style={{ borderRadius: 5, cursor: 'pointer' }}
          src="./blick.jpg"
          alt="blick"
        />
      </BlickBtn>
      <div>
        <Btn type="button">
          <a
            rel="noreferrer noopener nofollow"
            href={link}>
            {buttonTitle}
          </a>
        </Btn>
      </div>
    </DonateBtnsSection>
  );
};

export default Button;
