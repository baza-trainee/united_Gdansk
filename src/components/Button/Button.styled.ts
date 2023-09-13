import styled from "@emotion/styled";

export const Btn = styled.button`
    max-width: 276px;
    height: 72px;
    padding: 20px 40px;
    border-radius: 12px ;
    border: 5px solid #0059B2;
    background-color: #FFFFFF;
    color: #101010;
    text-decoration: underline;
    cursor: pointer;
    font-size: 24px;
    line-height: 1;
    font-weight: 700;
    &:hover,
    :focus{
    box-shadow: 0px 6px 1px 0px #ffe600, -6px 0px 1px 0px #ffe600, 6px -1px 1px 0px #ffe600;
    transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

    @media (max-width: 768px) {
        max-width: 340px;
        padding: 24px 86px;
    }
}
`;