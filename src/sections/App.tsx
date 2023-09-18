import Header from "../components/Header/Header.tsx"
import Hero from "../components/Hero/Hero.tsx";

import { useEffect, useState } from 'react'
import { loadData } from '../helpers/dataLoader';
import { Lang } from '../types/langTypes';
import { Content } from '../types/contentType';
import useLanguage from '../hooks/useLanguage';
import Gallery from '../components/Gallery/Gallery';

function App() {
	const [lang, setLang] = useLanguage();
	const [content, setContent] = useState<Content | null>(null)

	useEffect(() => {
		const fetchData = async () => {
			const data = await loadData(lang);
			setContent(data);
		}

		fetchData();
	}, [lang])

	const languageChange = (selectedLanguage: Lang) => {
		return setLang(selectedLanguage)
	}
	return (
		content &&
		<>
			<Header
				languageChange={languageChange}
				contentBtn={content.headerButton}
			/>
			<Hero contentHero={content.heroSection}/>

			<h1>{content?.title}</h1>
			<p>{content?.about}</p>
			<p>{content?.headerButton}</p>

			<Gallery />
		</>
	)

}

export default App
