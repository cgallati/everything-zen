import styled from 'styled-components';

export const BG = styled.table`
  background: #fff;
  width: 100%;
`;

export const Frame = styled.td`
  max-width: 800px;
`;

export const Heading = styled.h1`
  text-align: center;
  letter-spacing: 3.66px;
  color: #001d2c;
  font: normal normal normal 24px/28px 'Title Wave Regular', serif;
  margin: 2.25rem 0 0 0;
`;

export const SubHeading = styled.span`
  display: inline-flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  margin: 0 0 2rem 0;
  transform: translateX(-2px);
  > h2,
  span {
    margin: 0 0.4rem;
    font-size: 6px;
    line-height: 10px;
    font: normal normal normal 9px/11px Source Sans Pro;
    letter-spacing: 1.34px;
    color: #001d2c;
  }
`;

export const Card = styled.div`
  box-sizing: border-box;
  //max-width: 26rem;
  margin: 0.5rem auto;
  box-shadow: 0 3px 8px #07060666;
  border-radius: 3px;
  padding: 1.55rem 1.8rem;
  background: white;
`;

export const WelcomeCardBase = styled(Card)`
  margin-bottom: 0.8rem;
  background-color: #00263a;
`;

export const WelcomeCardContent = styled(Card)`
  padding: 1.55rem 0.6rem;
  text-align: center;
  > h3 {
    font: normal normal normal 16px/19px Source Sans Pro;
    letter-spacing: 3.2px;
    color: #001d2c;
    margin: 0 0 1.5rem 0;
  }
  > h4 {
    font: normal normal normal 11px/13px Source Sans Pro;
    letter-spacing: 1.1px;
    color: #001d2c;
    margin: 1.2rem 0;
    > strong {
      letter-spacing: 0.8px;
    }
  }
  > h5 {
    font: normal normal normal 10px/13px Source Sans Pro;
    letter-spacing: 0.92px;
    color: #001d2c;
    margin: 1.2rem 0 0 0;
  }
`;
export const LetterCard = styled(Card)`
  padding: 2rem 2.5rem;
  z-index: -2;
  box-shadow: 0 5px 14px #07060666;
  margin-bottom: 2rem;
  > p {
    font: normal normal normal 12px/14px Source Sans Pro;
    letter-spacing: 1.2px;
    color: #001d2c;
    margin: 1rem 0 2.5rem 0;
  }
  > footer {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    font: normal normal normal 10px/12px Source Sans Pro;
    letter-spacing: 0.8px;
    color: #001d2c;
  }
`;

export const DockMap = styled.div`
  border-radius: 3px;
  display: flex;
  justify-content: center;
  margin: 3rem;
  > div {
    border-radius: 3px;
  }
`;

export const CHSHBR = styled.img`
  position: relative;
  float: right;
  //right: 0.5rem;
  top: 0.5rem;
  z-index: 1;
`;

export const Signature = styled.h6`
  letter-spacing: 1.2px;
  font-family: 'Title Wave Regular', serif;
  color: #001d2c;
  font-size: 14px;
  line-height: 16px;
`;

export const Stencil = styled.div`
  text-align: center;
  margin: 0.5rem auto;
  letter-spacing: 2.41px;
  color: #001d2c;
  font-family: 'Stencilia-A', sans-serif;
  font-size: 16px;
  line-height: 20px;
`;

export const Coordinates = styled.div`
  margin: 0.5rem auto;
  //width: 400px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const Footer = styled.footer`
  height: 2.25rem;
  margin: 0.5rem auto 0 auto;
  //max-width: 26rem;
  background: #001d2c 0% 0% no-repeat padding-box;
  box-shadow: 0px 1px 4px #07060666;
`;
