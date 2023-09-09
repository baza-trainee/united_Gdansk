import { useState } from "react";
import { styled } from "styled-components";


const HeaderBar = styled.header`
  align-items: center;
  display: grid;
  grid-template-columns: repeat(2, auto);
  justify-content: space-between;
  padding: 4px 96px 4px 26px;
  background-color: #FFF;

  @media (max-width: 768px) {
    padding: 4px 28px;
  }
`;
const MenuLeftSide = styled.div`
  display: flex;
  align-items: center;

  grid-template-columns: repeat(2, auto);
  justify-content: space-between;
`;
const Logo = styled.div`
  min-height: 84px;
  min-width: 84px;
  position: relative;
  z-index: 5;
`;
const MenuLanguage = styled.ul`
  display: flex;
  padding: 10px;
  gap: 8px;
  cursor: pointer;

  & li {
    color: #3a3a3a;
    font-family: Roboto;
    font-size: 14px;
    font-weight: 600;
    line-height: 24px;
    text-transform: uppercase;
  }
`;
const MenuRightSide = styled.div``;

const MenuButton = styled.button`
  display: none;

  @media (max-width: 768px) {
    display: block;
    position: relative;
    width: 30px;
    height: 18px;
    z-index: 5;

    @media (any-hover: none) {
      cursor: default;
    }
    & span,
    &::before,
    &::after {
      content: "";
      transition: all 0.3s ease 0s;
      right: 0;
      position: absolute;
      width: 100%;
      height: 2px;
      background-color: black;
    }
    &::before {
      top: 0;
    }
    &::after {
      bottom: 0;
    }
    & span {
      top: calc(50% - 1px);
    }
    .menu-open & {
      span {
        width: 0;
      }
      &::before,
      &::after {
      }
      &::before {
        top: calc(50% - 1px);
        transform: rotate(-45deg);
      }
      &::after {
        bottom: calc(50% - 1px);
        transform: rotate(45deg);
      }
    }
  }
`;

const MenuList = styled.nav`
  min-width: 130px;

  @media (max-width: 768px) {
    padding: 76px 28px 30px 15px;
    position: fixed;
    width: 20%;
    height: 100%;
    top: 0;
    right: -200px;
    background-color: #fff;
    overflow: auto;
    display: flex;
    flex-direction: column;
    transition: right 0.3s;

    .menu-open & {
      right: 0px;
    }
  }

  & ul {
    display: flex;
    flex-wrap: wrap;
    row-gap: 3px;
    column-gap: 40px;

    @media (max-width: 768px) {
      display: flex;
      flex-direction: column;
      flex: 1 1 auto;
      align-items: flex-start;
      row-gap: 24px;
    }

    & li {
      color: #3a3a3a;
      font-family: Roboto;
      font-size: 18px;
      font-weight: 800;
      line-height: 24px;
      letter-spacing: 0.5px;
		
      &:hover {
        color: #ffffff;
      }
      &:active {
        color: #0059b2;
      }
    }
  }
`;

const Header = () => {
	const [open, setOpen] = useState<boolean>(false)
	const menuList: string[] = ["Про нас", "Діяльність", "Галерея", "Контакти"]

	const openMenu = (): void => {
		setOpen(!open)
	}

	const reloadPage = (): void => {
		window.location.reload();
	}

	const renderMenuList: JSX.Element[] = menuList.map((array: string): JSX.Element => <li><a href="#">{array}</a></li>)

	return (
		<HeaderBar className={`${open ? 'menu-open' : ''}`}>
			<MenuLeftSide>
				<Logo onClick={reloadPage}>
					<img src="src/components/Header/img/logo.svg" alt="logo" />
				</Logo>

				<MenuLanguage>
					<li>ukr</li>
					<li>pl</li>
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


