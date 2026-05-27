"use client";

import CourseCatalog from '@/src/pages/CourseCatalog';
import { useAppContext } from '../providers';

export default function CatalogPage() {
  const { 
    courses, 
    searchQuery, 
    setSearchQuery, 
    handleSelectCourse 
  } = useAppContext();

  return (
    <CourseCatalog 
      courses={courses}
      searchQuery={searchQuery}
      setSearchQuery={setSearchQuery}
      onSelectCourse={handleSelectCourse}
    />
  );
}
