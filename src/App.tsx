import React from 'react';
import './App.css';
import tw from 'twin.macro';
import {TopSection} from './containers/TopSection';
import {ExploreSection} from './containers/ExploreSection';
import { Footer } from './components/footer';

const AppContainer = tw.div`
  flex
  w-full
  h-full
  flex-col
  overflow-hidden
`

function App() {
  return (
    <AppContainer>
      <TopSection />
      <ExploreSection />
      <Footer />
    </AppContainer>
  );
}

export default App;
