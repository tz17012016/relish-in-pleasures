import React, { useState } from 'react';
import YouTubeContainer from './core/YouTubeContainer';
import {
  YouTubeColumn,
  YouTubeWrapper,
  YouTubeInput,
  YouTubeSection,
  YouTubeRow,
  YouTubeLabel,
  YouTubeInputRow,
  YouTubeMessage,
  YouTubeButton,
  YouTubeTitle,
} from './YouTubeStyles';
import { Container } from '../../globalStyles';

const YouTube = () => {
  return (
    <YouTubeSection>
      <Container>
        <YouTubeContainer />
      </Container>
    </YouTubeSection>
  );
};

export default YouTube;
