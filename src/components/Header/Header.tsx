import { useState, useEffect } from "react";
import { Lang } from "../../types/langTypes";
import { HeaderProps } from "../../types/headerTypes";
import { useNavigate } from "react-router-dom";
import {
  HeaderBar,
  Logo,
  MenuButton,
  MenuButtonClose,
  MenuLanguage,
  MenuLeftSide,
  MenuListBg,
  MenuList,
  MenuRightSide,
} from "./Header.styled";

const Header: React.FC<HeaderProps> = ({
  languageChange,
  contentBtn,
  activeLanguage,
}) => {
  const [open, setOpen] = useState<boolean>(false);
  const anchorLink = ["aboutUs", "activities", "gallery", "contacts"];
  const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);

  const navigate = useNavigate();

  useEffect(() => {
    handleResize();
  }, []);

  function handleResize() {
    setWindowWidth(window.innerWidth);
  }

  const openMenu = (): void => {
    setOpen(!open);
    if (open || windowWidth > 1279) {
      document.body.style.overflow = "auto";
    } else {
      document.body.style.overflow = "hidden";
    }
  };

  const reloadPage = (): void => {
    window.location.reload();
  };

//   const scrollToSection = (sectionId: string) => {
//     console.log("🚀 : sectionId", sectionId);
//     const targetSection = document.getElementById(sectionId);
//     console.log("🚀 : targetSection", targetSection);
//     if (targetSection) {
//       targetSection.scrollIntoView({
//         behavior: "smooth",
//         block: "center",
//       });
//     }
//   };

  const renderMenuList: JSX.Element[] = contentBtn.map(
    (array: string, index: number): JSX.Element => (
      <li key={index}>
        <a
          href={`#${anchorLink[index]}`}
          onClick={() => {
            if (location.pathname !== "/") {
              navigate(`/#${anchorLink[index]}`);
            //   scrollToSection(`/#${anchorLink[index]}`);
            }
          }}
        >
          {array}
        </a>
      </li>
    )
  );

  return (
    <HeaderBar className={`${open ? "menu-open  overlay" : ""}`}>
      <MenuLeftSide>
        <Logo onClick={reloadPage}>
          <img onClick={() => navigate("/")} src="./logo.svg" alt="logo" />
        </Logo>

        <MenuLanguage>
          <li
            className={`${activeLanguage === Lang.UA ? "active" : ""}`}
            onClick={() => languageChange(Lang.UA)}
          >
            ukr
          </li>
          <li
            className={`${activeLanguage === Lang.PL ? "active" : ""}`}
            onClick={() => languageChange(Lang.PL)}
          >
            pl
          </li>
        </MenuLanguage>
      </MenuLeftSide>

      <MenuRightSide>
        <MenuButton onClick={openMenu} className={open ? "fixed" : ""}>
          <span></span>
        </MenuButton>
        {/* onClick={openMenu} */}
        <MenuListBg onClick={openMenu}>
          <MenuList>
            <ul>{renderMenuList}</ul>
            <MenuButtonClose onClick={openMenu} className={open ? "fixed" : ""}>
              <span></span>
            </MenuButtonClose>
          </MenuList>
        </MenuListBg>
      </MenuRightSide>
    </HeaderBar>
  );
};

export default Header;
