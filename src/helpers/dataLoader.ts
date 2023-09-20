import { Lang } from '../types/langTypes';

export const loadData = (selectedLang: Lang) => {
  if (selectedLang === 'UKR') {
    return import('../content/dataUA.json');
  } else {
    return import('../content/dataPL.json');
  }
};
