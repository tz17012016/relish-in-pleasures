import styled from 'styled-components';
import {Button, MainHeading} from '../../globalStyles';

export const HeroSection = styled.section`
  height: 75vh;
  background-position: center;
  background-size: cover;
  padding-top: clamp(70px, 25vh, 50vh);
  box-shadow: inset 0 0 0 1000px rgba (0, 0, 0, 0.2);
  @media screen and (max-width: 768px) {
    padding-top: clamp(70px, 25vh, 500px);
  }
`;
export const HeroHeading = styled(MainHeading)`
  color: ${({inverse}) => (inverse ? '$403ae1' : '#004d66')};
`;

export const HeroVideo = styled.video`
  object-fit: cover;
  width: 100%;
  height: 75%;
  background: linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.1));
  top: 0;
  position: absolute;
  z-index: -1;
`;

export const HeroText = styled.p`
  margin-bottom: 35px;
  font-size: clamp(0.9rem, 1.5vw, 1.3rem);
  line-height: 24px;
  text-align: center;
  letter-spacing: 2px;
  color: #000;
`;

export const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-flow: wrap;
  gap: 0.5rem;
`;

export const HeroButton = styled(Button)`
  color: black;

  &:before {
    background: #fff;
    height: 500%;
  }

  &:hover:before {
    height: 0%;
  }

  &:hover {
    color: white;
  }
`;
