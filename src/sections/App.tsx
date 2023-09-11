import {useEffect, useState} from 'react'
import { loadData } from '../helpers/dataLoader';
import { Lang } from '../types/langTypes';
import { Content } from '../types/contentType';
import useLanguage from '../hooks/useLanguage';
import Gallery from '../components/Gallery/Gallery';

function App() {
  const [lang, setLang] = useLanguage();
  const [content, setContent] = useState<Content| null>(null)
  
  useEffect(() => {
    const fetchData = async () => {
      const data = await loadData(lang);
      setContent(data);
    }

    fetchData();
  }, [lang])
  

  return (
    <>
      <div>
        <button type="button"
          onClick={()=> setLang(Lang.UA)}
        >UKR</button>
        <br />
        <button type="button"
          onClick={()=> setLang(Lang.PL)}
        >PL</button>
      </div>
      <h1>{content?.title}</h1>
      <p>{content?.about}</p>
      <Gallery/>
    </>
  )
}

export default App
