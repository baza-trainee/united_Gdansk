import Header from "../Header/Header.tsx";
import Footer from "../Footer/Footer.tsx";
import Button from '../Button/Button';
import { Content } from '../../types/contentType';

const ErrorPage = ({content}: {content: Content}) => {
    return (
        <Header />

        <ErrorPageSection>

            <ImgBackground>
                <picture>
                    <img src="./images/hero/firstSlide.jpg" alt="error background image" />
                </picture>
            </ImgBackground>

            <errorPageTitle>{content?.errorPage.errorPageTitle}</errorPageTitle> 

            <ButtonError>
            <Button>
                buttonTitle={content?.errorPage.errorPageBtn}
                link={#}
            </Button>
            </ButtonError>

            <errorPage404>{content?.errorPage.errorPage404}</errorPage404>

        </ErrorPageSection>
        
        <Footer />
    )
}

export default ErrorPage