import { useState, useCallback } from 'react';
import { AnimatePresence } from 'framer-motion';
import LoadingScreen from './components/LoadingScreen';
import HeroSection from './components/HeroSection';
import TickerBanner from './components/TickerBanner';
import AchievementSection from './components/AchievementSection';
import RoastSection from './components/RoastSection';
import AwardCeremony from './components/AwardCeremony';
import MemeWall from './components/MemeWall';
import FinalSection from './components/FinalSection';
import RandomPopups from './components/RandomPopups';
import CursorEffects from './components/CursorEffects';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = useCallback(() => {
    setIsLoading(false);
  }, []);

  return (
    <>
      <AnimatePresence>
        {isLoading && <LoadingScreen onComplete={handleLoadingComplete} />}
      </AnimatePresence>

      {!isLoading && (
        <>
          <CursorEffects />
          <RandomPopups />
          <HeroSection />
          <TickerBanner />
          <AchievementSection />
          <AwardCeremony />
          <RoastSection />
          <MemeWall />
          <FinalSection />
        </>
      )}
    </>
  );
}

export default App;
