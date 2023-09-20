import { Lang } from "../types/langTypes";

export interface HeaderProps {
  languageChange: (selectedLanguage: Lang) => void;
  contentBtn: string[];
  activeLanguage: string;
}
