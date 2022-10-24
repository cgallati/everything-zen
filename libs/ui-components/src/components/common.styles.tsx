import styled from 'styled-components';
import Image, { ImageProps } from 'next/image';

export const PageHeading = styled.h1`
  font: normal normal normal 16px/32px Stencilia-A;
  letter-spacing: 3.2px;
  color: #13293a;
  text-align: center;
  margin-bottom: 3.75rem;
  @media (min-width: 600px) {
    font: normal normal normal 25px/32px Stencilia-A;
  }
`;

export const ContentSection = styled.section`
  max-width: 800px;
  margin: 4rem auto 8rem;
  padding: 0 0 1rem 0;
`;

export const Subheading = styled.h2`
  margin: 4rem 0 3rem 2rem;
  font: normal normal 600 16px/20px Source Sans Pro;
  letter-spacing: 3.2px;
  color: #001d2c;
`;

export const ResponsiveSubheading = styled(Subheading)`
  margin: 2rem auto;
  text-align: center;
  letter-spacing: 2.8px;
  font: normal normal 600 12px/25px Source Sans Pro;
  @media (min-width: 350px) {
    margin: 4rem auto;
    font: normal normal 600 15px/30px Source Sans Pro;
  }
  @media (min-width: 600px) {
    font: normal normal 600 18px/33px Source Sans Pro;
  }
`;

export const LongerTextSubheading = styled(Subheading)`
  font: normal normal 600 12px/25px Source Sans Pro;
  text-align: center;
  letter-spacing: 2.8px;
  @media (min-width: 350px) {
    margin: 4rem auto;
    font: normal normal 600 12px/30px Source Sans Pro;
  }
  @media (min-width: 600px) {
    font: normal normal 600 15px/33px Source Sans Pro;
  }
`;

export const SubheadingAndFriend = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 4rem 2.2rem 4rem 2rem;
  // TODO: responsive icon layout
  > h2 {
    line-height: 60px;
    flex-grow: 1;
    margin: 0;
  }

  > img {
    flex-grow: 0;
  }
`;

export const Paragraph = styled.p`
  font: normal normal 400 15px/28px Source Sans Pro;
  letter-spacing: 1px;
  color: #040505;
  margin: 0 1.75rem 3.5rem;
  @media (min-width: 600px) {
    font: normal normal 400 17px/32px Source Sans Pro;
  }
`;

export const ResponsiveImg = styled.img`
  display: block;
  margin: 3rem auto;
  width: 40%;
  max-width: 300px;
`;

const StyledImage = styled(Image)<ImageProps>`
  border-radius: 3px;
`;

const ImageMargins = styled.div`
  margin: 2rem;
`;

export const ImageSection: React.FC<ImageProps> = (props) => (
  <ImageMargins>
    <StyledImage {...props} />
  </ImageMargins>
);

export const TileGrid = styled.section`
  display: flex;
  flex-direction: column;
  margin: 3.6rem auto 0;
  @media (min-width: 1000px) {
    flex-direction: row;
  }

  > div {
    display: flex;
    justify-content: center;
    flex-direction: row;
  }
`;

export const MapScale = styled(ResponsiveImg)`
  width: 50%;
  max-width: 250px;
`;

export const Formlet = styled.section`
  width: 267px;
  margin: auto;
  padding: 2.5rem 0;
`;
export const HR = styled.div`
  width: 100%;
  height: 0;
  margin: 0;
  background: #00263a;
  border-bottom: 0.25px solid #00263a;
  opacity: 0.5;
`;
export const SubmitButton = styled.input`
  display: block;
  width: 240px;
  height: 43px;
  background: #00263a 0% 0% no-repeat padding-box;
  box-shadow: 0px 1px 3px #00000066;
  border-radius: 3px;
  color: white;
  border: none;
  font: normal normal normal 13px/16px Source Sans Pro;
  letter-spacing: 2.6px;
  margin-top: 2.5rem;
  margin-left: auto;
  margin-right: auto;
  -webkit-appearance: none;

  :active {
    color: #00263a;
    background: white;
    box-shadow: none;
    border: 0.5px solid #003d5e;
    opacity: 0.7;
  }

  :disabled {
    opacity: 0.25;
  }
`;
export const SubtleHeader = styled.h2`
  margin-left: 2rem;
  margin-top: 1.5rem;
  font: normal normal normal 11px/13px Source Sans Pro;
  letter-spacing: 2.2px;
  color: #00263a;
  opacity: 0.5;
`;
export const HeavyHeader = styled.h2`
  margin-left: 2rem;
  margin-top: 1.25rem;
  font: normal normal normal 15px/18px Source Sans Pro;
  letter-spacing: 3px;
  color: #00263a;
`;
