import { useEffect, useState } from "react";
import { Lang } from '../../types/langTypes';


import {
	HeaderBar,
	MenuLeftSide,
	Logo,
	MenuLanguage,
	MenuRightSide,
	MenuButton,
	MenuList
} from "./HeaderStyled"


interface HeaderProps {
	languageChange: (selectedLanguage: Lang) => void,
	contentBtn: string[],
	activeLanguage: string,
}

const Header: React.FC<HeaderProps> = ({ languageChange, contentBtn, activeLanguage }) => {

	const [open, setOpen] = useState<boolean>(false);
	const [language, setLanguage] = useState<string>("UKR");

	useEffect(() => {
		setLanguage(activeLanguage)


	}, [activeLanguage])


	const openMenu = (): void => {
		setOpen(!open)
	}

	const reloadPage = (): void => {
		window.location.reload();
	}

	const renderMenuList: JSX.Element[] = contentBtn.map(
		(array: string, index: number): JSX.Element => (
			<li key={index}>
				<a href="#">{array}</a>
			</li>
		)
	)

	return (
		<HeaderBar className={`${open ? 'menu-open' : ''}`}>
			<MenuLeftSide>
				<Logo onClick={reloadPage}>
					<img src="./logo.svg" alt="logo" />
				</Logo>

				<MenuLanguage>
					<li
						className={`${language === Lang.UA ? "active" : ""}`}
						onClick={() => languageChange(Lang.UA)}>ukr</li>
					<li
						className={`${language === Lang.PL ? "active" : ""}`} onClick={() => languageChange(Lang.PL)}>pl</li>
				</MenuLanguage>
			</MenuLeftSide>

			<MenuRightSide>
				<MenuButton onClick={openMenu}>
					<span></span>
				</MenuButton>

				<MenuList>
					<ul>
						{renderMenuList}
					</ul>
				</MenuList>
			</MenuRightSide>
		</HeaderBar>
	)
}

export default Header;


