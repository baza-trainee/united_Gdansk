import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Button from '../Button/Button';
import { ErrorSection, ImgBackground, ErrorTitle, Error404, ButtonError } from './ErrorPage.styled';
import { Content } from '../../types/contentType';
import {Lang} from '../../types/langTypes'; 
import { loadData } from "@/helpers/dataLoader";
import {useEffect, useState} from 'react'; 
import useLanguage from "@/hooks/useLanguage";

const ErrorPage = () => {

    const [lang, setLang] = useLanguage();
    const [content, setContent] = useState<Content | null>(null);
  
    useEffect(() => {
      const fetchData = async () => {
        const data = await loadData(lang);
        setContent(data);
      };
      fetchData();
    }, [lang]);
  
    const languageChange = (selectedLanguage: Lang) => {
      return setLang(selectedLanguage);
    };

    return (
      content && (
        <>
        <Header
            languageChange={languageChange}
            contentBtn={content.headerButton}
            activeLanguage={lang}
        />

        <ErrorSection>

            <ImgBackground
            src="./images/hero/firstSlide.jpg" alt="error background image" />

            <ErrorTitle> {content?.errorPage.errorPageTitle} </ErrorTitle> 

            <ButtonError>
            <Button 
                buttonTitle={content?.errorPage.errorPageBtn}
                link={'#'} >
            </Button>
            </ButtonError>

            <Error404> {content?.errorPage.errorPage404} </Error404>

        </ErrorSection>
        
        <Footer content={content} />
        </>
    )
    )
}

export default ErrorPage