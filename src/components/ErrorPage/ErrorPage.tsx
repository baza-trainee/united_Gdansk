import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { ErrorSection, ErrorTitle, Error404, Btn } from "./ErrorPage.styled";
import { Content } from "../../types/contentType";
import { Lang } from "../../types/langTypes";
import { loadData } from "../../helpers/dataLoader";
import { useEffect, useState } from "react";
import useLanguage from "../../hooks/useLanguage";

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
          <ErrorTitle> {content?.errorPage.errorPageTitle} </ErrorTitle>
          <Btn onClick={() => (window.location.href = "/")}>На Головну</Btn>
          <Error404> {content?.errorPage.errorPage404} </Error404>
        </ErrorSection>
        <Footer content={content} />
      </>
    )
  );
};

export default ErrorPage;
