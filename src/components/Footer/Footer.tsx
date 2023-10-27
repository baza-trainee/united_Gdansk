import { useNavigate } from "react-router-dom";
import {
  FooterContainer,
  FooterBlocks,
  BlockMenu,
  BlockContact,
  BlockSocial,
  Developer,
  TitleMenu,
  TitleContact,
  TitleSocial,
  ListMenu,
  ListContact,
  ListSocial,
} from "./Footer.styled";
import { Content } from "@/types/contentType";

type FooterProps = { content: Content };

const Footer: React.FC<FooterProps> = ({ content: { footer } }) => {
  const navigate = useNavigate();

  return (
    <FooterContainer id="contacts">
      <FooterBlocks>
        <BlockMenu>
          <TitleMenu>
            <a href="#aboutUs">{footer.titleMenu}</a>
          </TitleMenu>
          <ListMenu>
            <ul>
              <li>
                <a
                  onClick={() => {
                    if (location.pathname !== "/") {
                      navigate(`/#activities`);
                    }
                  }}
                  href="#activities"
                >
                  {footer.diaMenu}
                </a>
              </li>
              <li>
                <a
                  onClick={() => {
                    if (location.pathname !== "/") {
                      navigate(`/#gallery`);
                    }
                  }}
                  href="#gallery"
                >
                  {footer.galeryMenu}
                </a>
              </li>
            </ul>
          </ListMenu>
        </BlockMenu>
        <BlockContact>
          <TitleContact>{footer.titleContact}</TitleContact>
          <ListContact>
            <ul>
              <li>{footer.address}</li>
              <li>
                <a href="mailto:zjednoczeni.gdansk@gmail.com">{footer.email}</a>
              </li>
            </ul>
          </ListContact>
        </BlockContact>
        <BlockSocial>
          <TitleSocial>{footer.titleSocial}</TitleSocial>
          <ListSocial>
            <a href="https://t.me/zjednoczeni_gdansk" target="_blank">
              <img
                src="./images/social/telegram_inact.svg"
                alt="Telegram"
                width="44"
                height="44"
              />
            </a>

            <a
              href="https://www.facebook.com/people/%D0%9E%D0%B1%D1%94%D0%B4%D0%BD%D0%B0%D0%BD%D1%96-Zjednoczeni/100085363522655/"
              target="_blank"
            >
              <img
                src="./images/social/facebook_inact.svg"
                alt="Facebook"
                width="44"
                height="44"
              />
            </a>

            <a
              href="https://www.instagram.com/zjednoczeni_gdansk/?igshid=YmMyMTA2M2Y%3D"
              target="_blank"
            >
              <img
                src="./images/social/insta_inact.svg"
                alt="Instagram"
                width="44"
                height="44"
              />
            </a>
          </ListSocial>
        </BlockSocial>
      </FooterBlocks>
      <Developer>{footer.developer}</Developer>
    </FooterContainer>
  );
};

export default Footer;
