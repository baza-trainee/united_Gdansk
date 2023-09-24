import styled from "@emotion/styled";

export const FooterContainer = styled.div`
  padding: 16px;
  background-color: #0059b2;
  color: #ffffff;
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  letter-spacing: 0;
  display: block;

  @media (min-width: 768px) and (max-width: 1279px) {
    padding: 24px 86px 12px 86px;
  }

  @media (min-width: 1280px) {
    padding: 28px 110px 12px 110px;
  }
`;

export const FooterBlocks = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 48px;
  font-size: 16px;
  line-height: 24px;
  
  @media (min-width: 768px) and (max-width: 1279px) {
    flex-direction: row;
    margin-bottom: 40px;
    }

  @media (min-width: 1280px) {
    flex-direction: row;
    margin-bottom: 10px;
  }
`;

export const Developer = styled.p`
  font-size: 12px;
  line-height: 18px;
  text-align: start;
  @media (max-width: 767px) {
    width: 248px;
  }
`;

export const BlockMenu = styled.div`
  
  @media (max-width: 767px) {
    margin-bottom: 26px;
  }
  @media (min-width: 768px) and (max-width: 1279px) {
    margin-right: 38px;
  }

  @media (min-width: 1280px) {
    margin-right: 177px;
    margin-bottom: 10px;
  }
`;
export const BlockContact = styled.div`
  display: flex;
  flex-direction: column;
  @media (max-width: 767px) {
    margin-bottom: 26px;
  }
  @media (min-width: 768px) and (max-width: 1279px) {
    margin-right: 38px;
  }

  @media (min-width: 1280px) {
    margin-right: 177px;
    margin-bottom: 10px;
  }
`;
export const BlockSocial = styled.div`
display: flex;
flex-direction: column;
  @media (max-width: 767px) {
    margin-bottom: 0px;
  }
`;
export const ListSocial = styled.div`
  display: flex;
  flex-direction: row;
  gap: 12px;
  cursor: pointer;
  
  .img {
    display: inline-block;
    width: 44px;
    height: 44px;
  }
`;

export const TitleMenu = styled.h3`
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 20px;
  text-align: start;
  
  @media (min-width: 768px) {
    font-weight: 600;
    margin-bottom: 12px;
  }
`;

export const TitleContact = styled.h3`
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 24px;
  text-align: start;
  
  @media (min-width: 768px) {
    font-weight: 600;
    margin-bottom: 12px;
  }
`;

export const TitleSocial = styled.h3`
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 12px;
  text-align: start;
  
  @media (min-width: 768px) {
    font-weight: 600;
  }
`;

export const ListMenu = styled.ul`
  display: flex;
  cursor: pointer;
  
  li {
    font-family: Roboto;
    color: #fff;
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    text-align: start;
    padding-bottom: 12px;
  }

  @media (min-width: 768px) {
    margin-bottom: 8px;
  }
`;
export const ListContact = styled.ul`
  display: flex;
  gap: 12px;
  cursor: pointer;
  text-align: start;
    li {
    font-family: Roboto;
    color: #fff;
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    padding-bottom: 12px;
  }

  @media (min-width: 768px) {
    margin-bottom: 8px;
  }
`;

