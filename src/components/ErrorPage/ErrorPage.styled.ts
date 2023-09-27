import styled from "@emotion/styled";

export const ErrorPageSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh; 
  `;

export const errorPageTitle = styled.div`
color: black;
font-size: 32px;
font-family: Roboto;
font-weight: 400;
word-wrap: break-word 

@media (max-width: 480px) {
    font-size: 18px; 
  }
`;

export const errorPage404 = styled.div`
color: black;
font-size: 128px;
font-family: Roboto;
font-weight: 400;
letter-spacing: 11.52px;
word-wrap: break-word;

@media (max-width: 768px) {
    font-size: 128px; 
    letter-spacing: 11.52px; 
  }
@media (max-width: 480px) {
    font-size: 64px; 
    letter-spacing: 5.76px; 
  }
`

export const ImgBackground = styled.div`
background: rgba(241, 241, 241, 0.62) url('./images/hero/firstSlide.jpg'); 
background-size: cover;
background-position: center;
width: 100vw;
height: 100vh;
position: fixed;
top: 0;
left: 0;
z-index: -1;
`
export const ButtonError = styled.div`
display: flex;
width: 232px;
height: 56px;
padding: 16px 80px;
justify-content: center;
align-items: center;
gap: 10px; 

@media (max-width: 480px) {
width: 172px;
  }
`