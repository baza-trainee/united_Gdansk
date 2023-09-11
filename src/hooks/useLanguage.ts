import { useState, useEffect } from 'react';
import { Lang } from '../types/langTypes';

const useLanguage = () => {
   const storedLang = localStorage.getItem('lang');
  const [lang, setLang] = useState<Lang>(storedLang ? JSON.parse(storedLang) : Lang.UA);

  useEffect(() => {
    localStorage.setItem('lang', JSON.stringify(lang));
  }, [lang]);

  return [lang, setLang] as const;
};

export default useLanguage;
