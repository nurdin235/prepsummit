"use client";

import Login from '@/src/pages/Login';
import { useAppContext } from '../providers';

export default function LoginPage() {
  const { 
    setActivePage, 
    setShowEmailPopup, 
    handleSelectCategoryLanding, 
    handleOpenInfo 
  } = useAppContext();

  return (
    <Login 
      setActivePage={setActivePage}
      onStartSignup={() => setShowEmailPopup(true)}
      onSelectCategoryLanding={handleSelectCategoryLanding}
      onOpenInfo={handleOpenInfo}
    />
  );
}
