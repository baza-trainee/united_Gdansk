import styled from "@emotion/styled";

export const HeaderBar = styled.header`
  align-items: center;
  display: grid;
  grid-template-columns: repeat(2, auto);
  justify-content: space-between;
  padding: 4px 96px 4px 26px;
  background-color: #fff;

  @media (max-width: 1279px) {
    padding: 4px 30px;
  }

  @media (max-width: 768px) {
    padding: 4px 20px;
  }
`;
export const MenuLeftSide = styled.div`
  display: flex;
  align-items: center;
  grid-template-columns: repeat(2, auto);
  justify-content: space-between;
`;
export const Logo = styled.div`
  min-height: 84px;
  min-width: 84px;
  position: relative;
  cursor: pointer;
  z-index: 5;
`;
export const MenuLanguage = styled.ul`
  display: flex;
  padding: 10px;
  gap: 16px;
  cursor: pointer;

  & li {
    font-family: Roboto;
    color: #737373;
    font-size: 14px;
    font-weight: 700;
    line-height: 24px;
    text-transform: uppercase;
  }

  .active {
    color: #3a3a3a;
  }
`;

export const MenuRightSide = styled.div``;

export const MenuButton = styled.button`
  display: none;

  @media (max-width: 1279px) {
    display: block;
    position: relative;
    width: 30px;
    height: 18px;
    z-index: 11;

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

    &.fixed {
      position: fixed;
      top: 37px;
      right: 30px;

      @media (max-width: 768px) {
        right: 20px;
      }
    }
  }
`;

export const MenuButtonClose = styled.button`
  display: none;
  @media (max-width: 1279px) {
    .menu-open & {
      display: block;
      width: 30px;
      height: 18px;
      z-index: 13;
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

      & span {
        top: calc(50% - 1px);
      }

      &.fixed {
        position: absolute;
        top: 37px;
        right: 30px;
      }

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

export const MenuListBg = styled.div`
  min-width: 100%;
  z-index: 11;

  @media (max-width: 1279px) {
    position: fixed;
    height: 100%;
    top: 0;
    left: -100%;

    .menu-open & {
      left: 0%;
      background-color: rgb(0, 0, 0, 0.65);
    }
  }
`;

export const MenuList = styled.nav`
  min-width: 90%;
  z-index: 12;

  @media (max-width: 1279px) {
    padding-top: 15vh;
    padding-right: 28px;
    padding-bottom: 10vh;
    padding-left: 36px;
    position: fixed;
    width: 100%;
    height: 54vh;
    top: -100%;
    left: 0;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    transition: top 0.5s;

    .menu-open & {
      top: 0;
      background-color: #fff;
    }
  }

  @media (max-width: 767px) {
    width: 20%;
    height: 100%;
    top: 0;
    left: -100%;
    transition: left 0.5s;

    .menu-open & {
      left: 0%;
    }
  }

  & ul {
    display: flex;
    flex-wrap: wrap;
    row-gap: 3px;
    column-gap: 40px;

    @media (max-width: 1279px) {
      display: flex;
      flex-direction: column;
      flex: 1 1 auto;
      align-items: flex-start;
      /* row-gap: 44px; */
      row-gap: 5vh;
    }
    & li {
      color: #3a3a3a;
      font-family: Roboto;
      font-size: 18px;
      font-weight: 500;
      line-height: 24px;
      letter-spacing: 0.5px;
      &:hover {
        color: #0059b2;
      }
      &:active {
        color: #0059b2;
      }
    }
  }
`;
