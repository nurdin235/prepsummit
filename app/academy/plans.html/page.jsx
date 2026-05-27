"use client";

import Plans from '@/src/pages/Plans';
import { useAppContext } from '../../providers';

export default function PlansPage() {
  const { 
    setShowEmailPopup, 
    setSignupDetails, 
    setActivePage 
  } = useAppContext();

  return (
    <Plans 
      onStartSignup={(details) => {
        if (details) {
          setSignupDetails(details);
          setActivePage('signup');
        } else {
          setShowEmailPopup(true);
        }
      }}
      setActivePage={setActivePage}
    />
  );
}
