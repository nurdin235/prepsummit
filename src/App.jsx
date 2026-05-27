import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import FtceCourse from './pages/FtceCourse';
import CourseCatalog from './pages/CourseCatalog';
import CourseDetail from './pages/CourseDetail';
import LessonView from './pages/LessonView';
import Dashboard from './pages/Dashboard';
import Signup from './pages/Signup';
import Checkout from './pages/Checkout';
import Login from './pages/Login';
import CategoryLanding from './pages/CategoryLanding';
import AITutor from './components/AITutor';
import EmailPopup from './components/EmailPopup';
import SearchResults from './pages/SearchResults';
import TeasLanding from './pages/TeasLanding';

import { coursesData, userStatsData } from './data/courses';
import { Award, Sparkles, X, Info } from 'lucide-react';

export default function App() {
  const [activePage, setActivePage] = useState(() => {
    const path = window.location.pathname.toLowerCase();
    const hash = window.location.hash.toLowerCase();
    const searchParams = new URLSearchParams(window.location.search);
    const q = searchParams.get('q')?.toLowerCase();

    if (
      path.includes('ftce') || 
      path.includes('ftce-courses') || 
      hash.includes('ftce') || 
      q === 'ftce'
    ) {
      return 'ftce';
    }
    if (
      path.includes('teas') || 
      hash.includes('teas') || 
      q === 'teas'
    ) {
      return 'teas';
    }
    if (q) {
      return 'search';
    }
    return 'home';
  }); 

  const [homeActiveTab, setHomeActiveTab] = useState('Overview'); 
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [selectedLesson, setSelectedLesson] = useState(null);
  const [searchQuery, setSearchQuery] = useState(() => {
    const searchParams = new URLSearchParams(window.location.search);
    return searchParams.get('q') || '';
  });
  const [darkMode, setDarkMode] = useState(false);
  const [userStats, setUserStats] = useState(userStatsData);
  
  // Custom states for modals and landing directories
  const [showEmailPopup, setShowEmailPopup] = useState(false);
  const [signupDetails, setSignupDetails] = useState(null);
  const [landingCategory, setLandingCategory] = useState('');
  const [infoModal, setInfoModal] = useState({ isOpen: false, title: '', text: '' });
  const [signupData, setSignupData] = useState(null);
  const [rewardNotification, setRewardNotification] = useState(null);

  // Info modal content descriptions mapping footer links
  const infoDetails = {
    faq: {
      title: "Frequently Asked Questions",
      text: `Welcome to the PrepSummit Help Center. Here are the answers to our most common questions:
      
      Q: How do PrepSummit online courses work?
      A: Our courses are self-paced, allowing you to study whenever it fits your schedule. Each course contains short, engaging video lessons, complete readable text transcripts, practice flashcards, and standard-aligned quizzes to track your comprehension.
      
      Q: Can I really earn college credits?
      A: Yes! Our courses carry official ACE and NCCRS recommendation status. Once you pass our online proctored exam, you request a transcript from your dashboard, which we send directly to your college registrar. More than 1,500 institutions accept these transfer credits.
      
      Q: How does the risk-free trial work?
      A: You get 5 days of unlimited access to our entire library of lessons, practice tests, and study guides. If you decide to cancel within the 5 days, you will not be charged a single penny. Cancelation is online with a single click.
      
      Q: What is the customer support phone number?
      A: You can reach our dedicated support desk by phone at (877) 266-4919, or email us at support@prepsummit.com.`
    },
    careers: {
      title: "Careers at PrepSummit",
      text: `Join the PrepSummit Team! We are on a mission to make education flexible, affordable, and accessible to everyone. We are looking for talented, passionate individuals in the following areas:
      
      - Subject Matter Experts & Lesson Writers: Help us expand our database of course guides.
      - Video Editors & Animators: Turn dry lessons into premium, engaging educational content.
      - Full-Stack Software Engineers: Develop our core web and mobile React applications.
      - Customer Success Specialists: Help students achieve their licensing and degree goals.
      
      To apply, send your resume and portfolio to careers@prepsummit.com. We offer fully remote work, competitive salaries, and unlimited learning benefits!`
    },
    teach: {
      title: "Teach for Us",
      text: `Are you a certified teacher, professor, or subject specialist? Earn money by writing lesson scripts or creating online video courses for PrepSummit!
      
      As a PrepSummit educator, you can work remotely on your own schedule. We pay competitive rates per completed lesson, and your work will be seen by millions of students striving to clear their exams or earn degrees.
      
      Learn more and submit your credentials at prepsummit.com/teach.`
    },
    terms: {
      title: "Terms of Use",
      text: `These Terms of Use govern your access to and use of PrepSummit.com. By using our website, you agree to comply with these terms:
      
      - Membership & Billing: Subscriptions are billed monthly. You can cancel at any time via your Account Settings.
      - Refund Policy: If you cancel during your trial period, you will not be charged. Standard monthly charges are non-refundable, but you retain access until the end of your billing cycle.
      - Intellectual Property: All course content, videos, animations, and quiz questions are the copyrighted property of PrepSummit.com and are licensed for personal, educational use only.
      - Honor Code: Students must complete quizzes and exams independently without external assistance. Academic integrity is vital.`
    },
    privacy: {
      title: "Privacy Policy",
      text: `At PrepSummit.com, your privacy is our top priority. Here is a summary of how we manage your information:
      
      - Data Collection: We collect account info (name, email) and study telemetry (XP, lessons completed, quiz scores) to improve your learning experience.
      - Data Protection: We use industry-standard 256-bit SSL encryption to protect all credit card and credential submissions.
      - Sharing: We do NOT sell or share your personal information with third-party advertisers. 
      - Integration: If you are sponsored by an employer or school under the Working Scholars® program, your progress reports may be shared with the sponsor.`
    },
    about: {
      title: "About PrepSummit.com",
      text: `PrepSummit.com is a leading online learning platform offering flexible and affordable study guides, certification courses, and college credit pathways.
      
      We believe that traditional educational barriers can be dismantled using modern technology. Our short, visually rich lessons help adult learners, future teachers, and students master concepts quickly and pass their exams on the first attempt.`
    }
  };

  const handleOpenInfo = (key) => {
    const data = infoDetails[key];
    if (data) {
      setInfoModal({ isOpen: true, title: data.title, text: data.text });
    } else {
      // Default fallback for program links in progress
      setInfoModal({
        isOpen: true,
        title: `${key.charAt(0).toUpperCase() + key.slice(1)} Information`,
        text: `Welcome to the PrepSummit program guide for ${key}. We are currently expanding this section. \n\nAll courses in this category are fully browseable in the Catalog. Try using the Card Dropdowns or Subjects navigation to explore specific courses, lessons, and practice exams!`
      });
    }
  };

  // Scroll to top on page navigation
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activePage, selectedCourse, selectedLesson]);

  const handleSelectCourse = (course) => {
    setSelectedCourse(course);
    setActivePage('detail');
  };

  const handleSelectLesson = (lesson) => {
    setSelectedLesson(lesson);
    setActivePage('lesson');
  };

  const handleResumeLesson = (course, lesson) => {
    setSelectedCourse(course);
    setSelectedLesson(lesson);
    setActivePage('lesson');
  };

  const handleSignupComplete = (data) => {
    setSignupData(data);
    // Find the FTCE course to pre-select, or default
    const ftceCourse = coursesData.find(c => c.id === 'ftce-professional-education-test');
    if (ftceCourse) {
      setSelectedCourse(ftceCourse);
    }
    setActivePage('checkout');
  };

  const handleCheckoutComplete = (planName) => {
    setUserStats(prev => ({
      ...prev,
      name: signupData ? `${signupData.firstName} ${signupData.lastName}` : prev.name,
      rank: `Premium Scholar (${signupData?.country || 'USA'})`,
      xp: prev.xp + 500, 
    }));

    alert(`Success! You have subscribed to ${planName}. Welcome to PrepSummit.com Premium!`);
    
    const ftceCourse = coursesData.find(c => c.id === 'ftce-professional-education-test');
    if (ftceCourse) {
      setSelectedCourse(ftceCourse);
      setActivePage('detail');
    } else {
      setActivePage('dashboard');
    }
  };

  const handleQuizComplete = (score, total) => {
    const xpGained = score * 20 + (score === total ? 50 : 0); 
    
    setUserStats(prev => {
      const isPerfect = score === total;
      const newAchievements = [...prev.achievements];
      
      if (isPerfect && !newAchievements.some(a => a.id === `perfect-${selectedLesson?.id}`)) {
        newAchievements.push({
          id: `perfect-${selectedLesson?.id}`,
          title: `${selectedLesson?.title} Master`,
          icon: "Award",
          description: `Scored 100% on the ${selectedLesson?.title} Quiz!`
        });
      }

      return {
        ...prev,
        xp: prev.xp + xpGained,
        completedLessons: prev.completedLessons + 1,
        achievements: newAchievements
      };
    });

    setRewardNotification({
      score,
      total,
      xpGained
    });

    setTimeout(() => {
      setRewardNotification(null);
    }, 5500);
  };

  // Callback to handle categories landing redirection
  const handleSelectCategoryLanding = (catName) => {
    setLandingCategory(catName);
    setActivePage('landing');
  };

  const handleEmailContinue = (popupDetails) => {
    setSignupDetails(popupDetails);
    setShowEmailPopup(false);
    setActivePage('signup');
  };

  // Dynamic SEO Meta Update Hook
  useEffect(() => {
    let title = "PrepSummit | Online Courses for College Credit, Exam Prep & Test Preparation";
    let metaDesc = "PrepSummit is a leading online learning platform offering visual micro-lessons, practice quizzes, and custom study guides for exam prep, college credit, and teacher certification. Access 88,000+ courses and study on your schedule, risk-free.";
    
    switch (activePage) {
      case 'home':
        title = "PrepSummit | Online Courses for College Credit, Exam Prep & Test Preparation";
        metaDesc = "Boost your grades, study for exams, or earn transferable college credit with PrepSummit's standard-aligned visual guides, micro-lessons, and practice tests.";
        break;
      case 'ftce':
        title = "FTCE Professional Education Test (PEd) Study Guide & Test Prep | PrepSummit";
        metaDesc = "Prepare for the Florida Teacher Certification Examinations (FTCE) with PrepSummit's comprehensive preparation program. Access practice tests, study resources, and video tutorials.";
        break;
      case 'teas':
        title = "TEAS Test Prep & Study Guide | PrepSummit Nursing";
        metaDesc = "Prepare for your Test of Essential Academic Skills (TEAS) all in one place. Master TEAS Reading, Math, Science, and English with micro-lessons, flashcards, and practice quizzes.";
        break;
      case 'catalog':
        title = "Course Catalog & Study Guides | PrepSummit";
        metaDesc = "Browse hundreds of PrepSummit study guides, video lessons, and exam prep courses across Math, Science, Humanities, Business, and Teacher Certification.";
        break;
      case 'search':
        title = searchQuery ? `Search Results for "${searchQuery}" | PrepSummit` : "Search Courses & Study Guides | PrepSummit";
        metaDesc = `Find PrepSummit study resources, practice tests, and video courses for ${searchQuery || 'your exams'}.`;
        break;
      case 'login':
        title = "Log In to Your Account | PrepSummit";
        metaDesc = "Log in to your PrepSummit account to resume your video lessons, check your quiz scores, and track your study progress.";
        break;
      case 'signup':
        title = "Create Your Account, Risk-Free | PrepSummit";
        metaDesc = "Sign up for PrepSummit today and join thousands of students boosting their exam scores and earning transferable college credits.";
        break;
      case 'checkout':
        title = "Complete Your Enrollment | PrepSummit";
        metaDesc = "Unlock full access to visual study guides, expert video lessons, and proctored certification exams on PrepSummit.";
        break;
      case 'dashboard':
        title = "Student Dashboard | PrepSummit";
        metaDesc = "Resume your courses, view your achievements, track weekly goals, and access your study materials from your custom PrepSummit dashboard.";
        break;
      default:
        break;
    }
    
    document.title = title;
    
    // Update the meta description tag dynamically
    const descTag = document.querySelector('meta[name="description"]');
    if (descTag) {
      descTag.setAttribute('content', metaDesc);
    }
  }, [activePage, searchQuery]);

  return (
    <div className={`app-container ${darkMode ? 'dark-theme' : ''}`}>
      {/* Navigation Header */}
      {/* Conditionally Render Minimal Header for Signup/Checkout, or Full Navbar */}
      {(activePage === 'signup' || activePage === 'checkout') ? (
        <header style={{
          backgroundColor: '#1f4e5a',
          height: '54px',
          display: 'flex',
          alignItems: 'center',
          padding: '0 24px',
          borderBottom: '1px solid #134e5c',
          width: '100%'
        }}>
          <div 
            style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}
            onClick={() => { setActivePage('home'); setSearchQuery(''); }}
          >
            <svg width="26" height="26" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15 15 L85 50 L15 85 Z" fill="#ffffff" />
              <path d="M15 15 L50 50 L15 85 Z" fill="#ffffff" opacity="0.3" />
              <path d="M50 50 L85 50 L15 85 Z" fill="#ffb627" />
            </svg>
            <span style={{ 
              fontFamily: "'Outfit', sans-serif",
              fontSize: '1.4rem', 
              fontWeight: '800', 
              color: '#ffffff',
              letterSpacing: '-0.03em'
            }}>
              PrepSummit<span style={{ color: '#ffb627' }}>.com</span>
            </span>
          </div>
        </header>
      ) : activePage === 'teas' ? null : (
        <Navbar 
          activePage={activePage}
          setActivePage={setActivePage}
          homeActiveTab={homeActiveTab}
          setHomeActiveTab={setHomeActiveTab}
          darkMode={darkMode}
          setDarkMode={setDarkMode}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          user={userStats}
          courses={coursesData}
          onSelectCourse={handleSelectCourse}
          onStartSignup={() => setShowEmailPopup(true)}
          onSelectCategoryLanding={handleSelectCategoryLanding}
          onOpenInfo={handleOpenInfo}
        />
      )}

      {/* Main Core View Area */}
      <main className={(activePage === 'home' || activePage === 'signup' || activePage === 'checkout' || activePage === 'teas') ? "main-content-full-width" : "main-content"} style={{ minHeight: 'calc(100vh - 400px)' }}>
        {activePage === 'home' && (
          <Home 
            courses={coursesData}
            activeTab={homeActiveTab}
            setActiveTab={setHomeActiveTab}
            setActivePage={setActivePage}
            setSearchQuery={setSearchQuery}
            onSelectCourse={handleSelectCourse}
            onSelectLesson={handleSelectLesson}
            onStartSignup={() => setShowEmailPopup(true)}
            onSelectCategoryLanding={handleSelectCategoryLanding}
          />
        )}

        {activePage === 'teas' && (
          <TeasLanding 
            onBackToHome={() => setActivePage('home')}
            onStartSignup={() => setShowEmailPopup(true)}
            setActivePage={setActivePage}
            setSearchQuery={setSearchQuery}
            onSelectCourse={handleSelectCourse}
            courses={coursesData}
          />
        )}

        {activePage === 'ftce' && (
          <FtceCourse 
            courses={coursesData}
            activeTab={homeActiveTab}
            setActiveTab={setHomeActiveTab}
            setActivePage={setActivePage}
            setSearchQuery={setSearchQuery}
            onSelectCourse={handleSelectCourse}
            onSelectLesson={handleSelectLesson}
            onStartSignup={() => setShowEmailPopup(true)}
          />
        )}

        {activePage === 'catalog' && (
          <CourseCatalog 
            courses={coursesData}
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            onSelectCourse={handleSelectCourse}
          />
        )}

        {activePage === 'search' && (
          <SearchResults 
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            onSelectCourse={handleSelectCourse}
            onStartSignup={() => setShowEmailPopup(true)}
            courses={coursesData}
          />
        )}

        {activePage === 'landing' && (
          <CategoryLanding 
            category={landingCategory}
            courses={coursesData}
            onSelectCourse={handleSelectCourse}
            onStartSignup={() => setShowEmailPopup(true)}
            onBackToHome={() => setActivePage('home')}
          />
        )}

        {activePage === 'detail' && (
          <CourseDetail 
            course={selectedCourse}
            onBack={() => setActivePage('catalog')}
            onSelectLesson={handleSelectLesson}
            onStartSignup={() => setShowEmailPopup(true)}
          />
        )}

        {activePage === 'lesson' && (
          <LessonView 
            course={selectedCourse}
            lesson={selectedLesson}
            onBackToCourse={() => setActivePage('detail')}
            onSelectLesson={handleSelectLesson}
            onQuizComplete={handleQuizComplete}
          />
        )}

        {activePage === 'dashboard' && (
          <Dashboard 
            userStats={userStats}
            courses={coursesData}
            onResumeLesson={handleResumeLesson}
            setActivePage={setActivePage}
          />
        )}

        {activePage === 'login' && (
          <Login 
            setActivePage={setActivePage}
            onStartSignup={() => setShowEmailPopup(true)}
            onSelectCategoryLanding={handleSelectCategoryLanding}
            onOpenInfo={handleOpenInfo}
          />
        )}

        {activePage === 'signup' && (
          <Signup 
            initialData={signupDetails}
            onComplete={handleSignupComplete}
            onBack={() => setActivePage('home')}
          />
        )}

        {activePage === 'checkout' && (
          <Checkout 
            signupData={signupData}
            onCheckoutComplete={handleCheckoutComplete}
            selectedCourse={selectedCourse}
            onBack={() => setActivePage('signup')}
          />
        )}
      </main>

      {/* Floating AI Tutor Chatbot on Study & Catalog Pages */}
      {(activePage === 'detail' || activePage === 'lesson' || activePage === 'ftce' || activePage === 'landing' || activePage === 'catalog' || activePage === 'search') && (
        <AITutor course={selectedCourse} lesson={selectedLesson} />
      )}

      {/* Global Informational Modal (FAQ, Terms, Careers, privacy) */}
      {infoModal.isOpen && (
        <div className="modal-backdrop" onClick={() => setInfoModal({ isOpen: false, title: '', text: '' })}>
          <div className="modal-container" onClick={e => e.stopPropagation()} style={{ maxWidth: '580px' }}>
            <div className="modal-header">
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--primary-dark)' }}>
                <Info size={20} />
                <strong style={{ fontSize: '1.05rem', fontWeight: '800' }}>{infoModal.title}</strong>
              </div>
              <button 
                onClick={() => setInfoModal({ isOpen: false, title: '', text: '' })} 
                style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-secondary)' }}
                aria-label="Close Info"
              >
                <X size={20} />
              </button>
            </div>
            <div className="modal-body" style={{ whiteSpace: 'pre-line', color: 'var(--text-primary)' }}>
              {infoModal.text}
            </div>
            <div className="modal-footer">
              <button 
                onClick={() => setInfoModal({ isOpen: false, title: '', text: '' })}
                style={{
                  backgroundColor: 'var(--primary)',
                  color: '#ffffff',
                  border: 'none',
                  borderRadius: '4px',
                  fontWeight: '700',
                  padding: '8px 20px',
                  cursor: 'pointer'
                }}
              >
                Close Window
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Footer Branding Links */}
      {activePage !== 'login' && activePage !== 'signup' && activePage !== 'checkout' && (
        <Footer 
          setActivePage={setActivePage} 
          onSelectCategoryLanding={handleSelectCategoryLanding}
          onOpenInfo={handleOpenInfo}
        />
      )}

      {/* Initial Email Capture Popup Modal */}
      <EmailPopup 
        isOpen={showEmailPopup}
        onClose={() => setShowEmailPopup(false)}
        onContinue={handleEmailContinue}
      />
    </div>
  );
}
