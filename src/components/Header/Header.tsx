import { useState } from "react";
import { Lang } from "../../types/langTypes";
import { HeaderProps } from "../../types/headerTypes";

import {
	HeaderBar,
	Logo,
	MenuButton,
	MenuLanguage,
	MenuLeftSide,
	MenuList,
	MenuRightSide
} from "./Header.styled";

const Header: React.FC<HeaderProps> = ({ languageChange, contentBtn, activeLanguage }) => {

	const [open, setOpen] = useState<boolean>(false);
	const anchorLink = ["aboutUs", "activities", "gallery", "contacts"]


	const openMenu = (): void => {
		setOpen(!open)
	}

	const reloadPage = (): void => {
		window.location.reload();
	}

	const renderMenuList: JSX.Element[] = contentBtn.map(
		(array: string, index: number): JSX.Element => (
			<li key={index}>
				<a href={`#${anchorLink[index]}`} onClick={openMenu}>{array}</a>
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
						className={`${activeLanguage === Lang.UA ? "active" : ""}`}
						onClick={() => languageChange(Lang.UA)}>ukr</li>
					<li
						className={`${activeLanguage === Lang.PL ? "active" : ""}`} onClick={() => languageChange(Lang.PL)}>pl</li>
				</MenuLanguage>
			</MenuLeftSide>

			<MenuRightSide>
				<MenuButton onClick={openMenu} className={open ? "fixed" : ""}>
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


