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
    padding: 24px 60px 12px 60px;
  }

  @media (min-width: 1280px) {
    padding: 28px 110px 12px 110px;
  }
`;

export const FooterBlocks = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 32px;
  font-size: 16px;
  line-height: 24px;
  
  @media (min-width: 768px) and (max-width: 1279px) {
    flex-direction: row;
    margin-bottom: 40px;
    }
  @media (min-width: 1280px) {
    flex-direction: row;
    margin-bottom: 32px;
  }
`;

export const Developer = styled.p`
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  margin-left: auto;
  margin-right: auto;
  text-align: start;
  @media (max-width: 767px) {
    width: 300px;
   }
`;

export const BlockMenu = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 767px) {
    margin-bottom: 24px;
  }
  @media (min-width: 768px) and (max-width: 1279px) {
    margin-right: 64px;
    align-items: start;
  }
  @media (min-width: 1280px) {
    margin-bottom: 10px;
    align-items: start;
  }
`;
export const BlockContact = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 767px) {
    margin-bottom: 24px;
  }
  @media (min-width: 768px) and (max-width: 1279px) {
    margin-right: 64px;
    align-items: start;
  }
  @media (min-width: 1280px) {
    align-items: start;
    }
`;
export const BlockSocial = styled.div`
display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 767px) {
    margin-bottom: 0px;
  }
  @media (min-width: 768px) {
    align-items: start;
  }
`;
export const ListSocial = styled.div`
  display: flex;
  flex-direction: row;
  gap: 12px;
  cursor: pointer;
  
  @media (min-width: 768px) {
    justify-content: start;
  }

  .img {
    display: inline-block;
    width: 44px;
    height: 44px;
  }
`;

export const TitleMenu = styled.h3`
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 18px;
  
  
  @media (min-width: 768px) {
    font-weight: 600;
    margin-bottom: 12px;
  }
`;

export const TitleContact = styled.h3`
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 12px;
    
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
  
  @media (min-width: 768px) and (max-width: 1279px) {
    font-weight: 600;
    width: 200px;
  }
`;

export const ListMenu = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  li {
    font-family: Roboto;
    color: #fff;
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    padding-bottom: 8px;
  }
  @media (min-width: 768px) {
  text-align: start;
  }
`;
export const ListContact = styled.ul`
  display: flex;
  gap: 12px;
  
    li {
    font-family: Roboto;
    color: #fff;
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    padding-bottom: 8px;
  }

  @media (min-width: 768px) {
    text-align: start;
  }
`;