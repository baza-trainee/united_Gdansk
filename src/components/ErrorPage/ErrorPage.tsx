import Header from "../Header/Header.tsx";
import Footer from "../Footer/Footer.tsx";
import Button from '../Button/Button';
import { ErrorSection, ImgBackground, ErrorTitle, Error404, ButtonError } from './ErrorPage.styled';
import { Content } from '../../types/contentType';

const ErrorPage = ({content}: {content: Content}) => {

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
        <>
        <Header
            languageChange={languageChange}
            contentBtn={content.headerButton}
            activeLanguage={lang}
        />

        <ErrorSection>

            <ImgBackground
            src="./images/hero/firstSlide.jpg" alt="error background image" >
            </ImgBackground>

            <ErrorTitle> {content?.errorPage.errorPageTitle} </ErrorTitle> 

            <ButtonError>
            <Button 
                buttonTitle={content?.errorPage.errorPageBtn}
                link={#} >
            </Button>
            </ButtonError>

            <Error404> {content?.errorPage.errorPage404} </Error404>

        </ErrorSection>
        
        <Footer content={content} />
        </>
    )
}

export default ErrorPage