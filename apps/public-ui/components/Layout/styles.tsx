import styled from "styled-components";

const headerHeight = "4rem";

export const Hamburger = styled.div`
  float: right;
  margin-right: calc(10vw - 11px);

  :focus {
    outline: none;
  }
`;

export const Header = styled.header`
  position: fixed;
  top: 0;
  z-index: 10;
  padding-top: 0.5rem;
  width: 100vw;
  height: ${headerHeight};
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 0px 10px #00000060;
  box-sizing: border-box;
`;

export const EZ = styled.h1`
  position: absolute;
  top: 1.5rem;
  left: 2rem;
  margin: 0;
  display: inline;
  cursor: pointer;
  letter-spacing: 3px;
  color: #00263a;
  font: normal normal 600 15px/18px "Title Wave Regular";
`;

interface SideBarProps {
  open: boolean;
}

export const SideBar = styled.aside<SideBarProps>`
  padding-top: 3rem;
  z-index: 3;
  background-color: white;
  position: fixed;
  top: 0;
  overflow: hidden;
  width: 100vw;
  height: ${({ open }) => (open ? "calc(100vh - 3rem)" : "0")};
  //transform: translateY();
  transition: height 0.5s;

  h2 {
    font: normal normal normal 17px/24px Source Sans Pro;
    letter-spacing: 3px;
    color: #13293a;
    position: relative;
    display: block;
  }

  ul {
    display: block;
    height: inherit;
    position: relative;
    list-style: none;
    padding: 0 2rem;
    overflow: scroll;
  }
  li {
    position: relative;
    display: block;
    background: url("/icons/rightarrow.svg") no-repeat left center;
    background-size: 15px;
    padding-left: 2.5rem;
    margin: 2.2rem 0;
    cursor: pointer;
  }
`;

export const Body = styled.main`
  padding-top: ${headerHeight};
`;

export const FooterWrapper = styled.footer`
  margin: 15vw auto 0;
  background: #00263a;
  padding: 2.25rem 0 3.75rem;
  position: relative;
  box-shadow: 0 50vh 0 50vh #00263a;
  @media (min-width: 700px) {
    margin: 25vw auto 0;
  }

  img {
    width: 100vw;
    position: absolute;
    top: -15vw;
  }
  h2 {
    font: normal normal normal 20px/39px Source Sans Pro;
    letter-spacing: 4px;
    color: white;
  }

  ul {
    list-style: none;
    padding: 0;
    text-align: center;
    margin: 2rem auto 4rem;
    @media (min-width: 750px) {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      max-width: 750px;
      justify-content: space-evenly;
    }
  }
  li {
    margin: 1.4rem 1.5rem;
    cursor: pointer;
  }

  //icon wrapper
  div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    max-width: 240px;
    margin: 0 auto 3rem;
  }

  span {
    position: absolute;
    width: 100vw;
    height: 1rem;
    bottom: -1rem;
  }
`;

export const UpArrowButton = styled.button`
  display: block;
  background: url("/icons/up-arrow.svg") no-repeat center;
  background-size: 28px 17px;
  height: 5rem;
  width: 5rem;
  border: none;
  margin: 0 auto;
  cursor: pointer;
`;

type SocialIconProps = {
  href: string;
  bg: string;
  target: "_blank";
};
export const SocialIcon = styled.a<SocialIconProps>`
  display: block;
  height: 3rem;
  width: 3rem;
  cursor: pointer;
  background-image: url(${({ bg }) => bg});
  background-size: 3rem;
`;

export const PageWrapper = styled.div`
  margin: 3rem auto 8rem;
  max-width: 800px;
  padding-bottom: 2rem;
  @media (min-width: 600px) {
    margin-bottom: 10rem;
  }
`;
