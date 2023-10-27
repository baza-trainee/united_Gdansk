import { useEffect, useState, lazy, Suspense } from "react";
import { Puff } from "react-loader-spinner";
import { loadData } from "../helpers/dataLoader";
import { Lang } from "../types/langTypes";
import { Content } from "../types/contentType";
import useLanguage from "../hooks/useLanguage";
import GoUp from "../components/GoUp/GoUp.tsx";
import ErrorPage from "../components/ErrorPage/ErrorPage.tsx";

const Header = lazy(() => import("../components/Header/Header.tsx"));
const Hero = lazy(() => import("../components/Hero/Hero.tsx"));
const Gallery = lazy(() => import("../components/Gallery/Gallery"));
const Footer = lazy(() => import("../components/Footer/Footer.tsx"));
const AboutRallies = lazy(
  () => import("../components/AboutRallies/AboutRallies.tsx")
);
const Donation = lazy(() => import("../components/Donation/Donation.tsx"));
const Assistance = lazy(
  () => import("../components/Assistance/Assistance.tsx")
);
const Nets = lazy(() => import("../components/Nets/Nets.tsx"));
const AboutUs = lazy(() => import("../components/AboutUs/AboutUs.tsx"));

const links = ["#aboutUs", "#activities", "#gallery", "#contacts", ""];

function App() {
  const [lang, setLang] = useLanguage();
  const [content, setContent] = useState<Content | null>(null);
  const path = window.location.hash;
  console.log("🚀 : path",path );

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
    content &&
    (!links.includes(path) || !(window.location.pathname === "/") ? (
      <ErrorPage />
    ) : (
      <>
        <Suspense
          fallback={
            <Puff
              height="80"
              width="80"
              radius={1}
              color="#FFFF2E"
              ariaLabel="puff-loading"
              wrapperStyle={{}}
              wrapperClass="spinner"
              visible={true}
            />
          }
        >
          <Header
            languageChange={languageChange}
            contentBtn={content.headerButton}
            activeLanguage={lang}
          />

          <Hero contentHero={content.heroSection} />
          <AboutUs content={content} />
          <Nets content={content} />
          <Donation content={content} />
          <AboutRallies content={content} />
          <Gallery content={content} lang={lang} />
          <Assistance content={content} />
          <Footer content={content} />
          <GoUp />
        </Suspense>
      </>
    ))
  );
}

export default App;
