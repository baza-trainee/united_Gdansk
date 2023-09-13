import { SectionTitle } from "./SectionTitle.styled"

type SectionTitleProps = {
    title: string;
}

const SecTitle = ({title} : SectionTitleProps) => {
    return (
    <SectionTitle>{title}</SectionTitle>
  );
};

export default SecTitle;