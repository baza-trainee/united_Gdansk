import { Btn } from "./Button.styled"

type IPropsBtn = {
    buttonTitle: string;
    link: string;
}

const Button = ({ buttonTitle, link } : IPropsBtn) => {
    return (
    <Btn type="button">
      <a href={link}>{buttonTitle}</a>
        
    </Btn>
  );
};

export default Button;

