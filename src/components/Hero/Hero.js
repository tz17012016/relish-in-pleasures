import React from 'react';
import {Link} from 'react-router-dom';
import {Button, Container} from '../../globalStyles';
import {
  HeroVideo,
  HeroSection,
  HeroText,
  ButtonWrapper,
  HeroButton,
  HeroHeading,
} from './HeroStyles';

const Hero = () => {
  return (
    <HeroSection>
      <HeroVideo src="./assets/WavesRushing.mp4" autoPlay loop muted />
      <Container>
        <HeroHeading>ברוכים הבאים לאתר של הרב לירון אהרון</HeroHeading>
        <HeroText>היו גם אתם חלק מהעשייה של הרב בהפצת תורה בעם ישראל</HeroText>
        <ButtonWrapper>
          <Link to="signup">
            <Button>תרום כעת</Button>
          </Link>
          {/* <HeroButton>Find More</HeroButton> */}
        </ButtonWrapper>
      </Container>
    </HeroSection>
  );
};

export default Hero;
