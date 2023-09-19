import { Btn } from './Button.styled';

type IPropsBtn = {
  buttonTitle: string;
  link: string;
  className: string;
};

const Button = ({ buttonTitle, link, className }: IPropsBtn) => {
  return (
    <Btn
      type="button"
      className={className}>
      <a href={link}>{buttonTitle}</a>
    </Btn>
  );
};

export default Button;
