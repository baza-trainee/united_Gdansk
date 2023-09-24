
import { useEffect, useState } from 'react';
import { loadData } from '../helpers/dataLoader';
import { Lang } from '../types/langTypes';
import { Content } from '../types/contentType';
import Header from '../components/Header/Header.tsx';
import Hero from '../components/Hero/Hero.tsx';
import useLanguage from '../hooks/useLanguage';
import Gallery from '../components/Gallery/Gallery';
import Footer from "../components/Footer/Footer.tsx"
import AboutRallies from '../components/AboutRallies/AboutRallies.tsx';
import Donation from '../components/Donation/Donation.tsx';
import Assistance from '../components/Assistance/Assistance.tsx';
import Nets from '../components/Nets/Nets.tsx';
import AboutUs from '../components/AboutUs/AboutUs.tsx';

function App() {
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
        />
        <Hero contentHero={content.heroSection} />
        <AboutUs content={content}/>
        <Nets content={content} />
        <Donation content={content} />
        <AboutRallies content={content} /
        <Gallery
          content={content}
          lang={lang}
        />
        <Assistance content={content} />
        <Footer content={content} />
      </>
    )
  );
}

export default App;
