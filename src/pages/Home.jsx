import React, { useState } from 'react';
import { Search, Compass, BookOpen, Sparkles, Brain, Calculator, Dna, DollarSign, ArrowRight, Star, GraduationCap, School, Bot, MessageSquare } from 'lucide-react';

export default function Home({ courses, setActivePage, setSearchQuery, onSelectCourse }) {
  const [aiInput, setAiInput] = useState('');
  const [aiResponse, setAiResponse] = useState('');
  const [activeCardDropdown, setActiveCardDropdown] = useState(null);

  const programs = [
    {
      title: "Study for class",
      description: "Master new concepts with helpful video lessons, practice questions and step-by-step answer explanations.",
      dropdownText: "Explore our programs",
      icon: <GraduationCap size={24} style={{ color: '#13809c' }} />,
      items: ["K-12 Subject Help", "College Courses", "AP Exam Help"]
    },
    {
      title: "Ace your test prep",
      description: "92% pass rate. Prep for 1,500+ exams with custom study guides, practice tests and video lessons.",
      dropdownText: "Explore our programs",
      icon: <Star size={24} style={{ color: '#ffb627' }} fill="#ffb627" />,
      items: ["FTCE Teacher Certification", "CLEP Exams", "SAT/ACT Prep"]
    },
    {
      title: "Earn college credit",
      description: "Save time and money on 220+ upper and lower-division courses and skip what you already know.",
      dropdownText: "Explore our programs",
      icon: <School size={24} style={{ color: '#38a169' }} />,
      items: ["Transferable Credit courses", "Degree pathways", "Partner Colleges"]
    },
    {
      title: "Teach your class",
      description: "Plan lessons with ease using state-standard-aligned videos and practice for all K-12 subjects.",
      dropdownText: "Select subject or resource",
      icon: <Compass size={24} style={{ color: '#3182ce' }} />,
      items: ["Lesson Plans", "Classroom Activities", "Teacher Professional Development"]
    },
    {
      title: "Homeschool your child",
      description: "Earn certificates of completion and potential college credit with full 6-12 curriculum.",
      dropdownText: "Select subject or resource",
      icon: <Brain size={24} style={{ color: '#805ad5' }} />,
      items: ["Middle School Curriculum", "High School Curriculum", "Progress Reports"]
    },
    {
      title: "AI mastery",
      description: "Practical AI skills for the modern workforce, with optional college credit available. Gain the AI skills for the careers of tomorrow.",
      dropdownText: "Explore AI courses",
      icon: <Bot size={24} style={{ color: '#e53e3e' }} />,
      items: ["Generative AI Basics", "AI Prompt Engineering", "AI Ethics & Application"]
    }
  ];

  const handleAskAI = (e) => {
    e.preventDefault();
    if (!aiInput.trim()) return;
    
    // Custom responses tailored to the teacher FTCE test prep!
    const query = aiInput.toLowerCase();
    if (query.includes('ftce') || query.includes('ped') || query.includes('test') || query.includes('passing')) {
      setAiResponse("Hi! I'm Study AI. For the FTCE Professional Education Test (PEd), you need a scaled score of 200 to pass, which represents approximately 70-75% correct answers. The test covers 8 competencies, including instructional design, learning environments, and teaching English language learners (ELL). PrepSummit.com's prep course offers 105 video lessons and 507 test-aligned practice questions to guarantee your first-time pass!");
    } else if (query.includes('calculus') || query.includes('limit')) {
      setAiResponse("Hello! I'm Study AI. Limits describe what value a function approaches as x gets closer to a target value. For AP Calculus BC, mastering limits, derivatives, and Taylor series is critical. Check out our limits lesson in the catalog to practice interactive quizzes!");
    } else {
      setAiResponse("Hello there! I'm Study AI, your custom conversational study helper. You can ask me any academic or test preparation questions! Ask me about 'FTCE passing score' or 'Limits in Calculus' for specialized, test-aligned guidelines.");
    }
    setAiInput('');
  };

  return (
    <div className="fade-in" style={{ display: 'flex', flexDirection: 'column', gap: '56px' }}>
      
      {/* 1. Medical Professional Hero Section (Screenshot 507) */}
      <section style={{
        position: 'relative',
        height: '420px',
        borderRadius: '8px',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        padding: '0 48px',
        // High quality happy medical professionals photo background overlay
        background: "linear-gradient(90deg, rgba(31,78,90,0.92) 0%, rgba(31,78,90,0.6) 50%, rgba(31,78,90,0.2) 100%), url('https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1200&auto=format&fit=crop&q=80')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        boxShadow: 'var(--shadow-lg)'
      }}>
        {/* Yellow graphic elements mimicking prepsummit.com details */}
        <div style={{
          position: 'absolute',
          right: '25%',
          top: '20%',
          width: '180px',
          height: '180px',
          border: '6px solid #ffb627',
          borderRadius: '50%',
          borderBottomColor: 'transparent',
          borderLeftColor: 'transparent',
          transform: 'rotate(45deg)',
          opacity: 0.7,
          pointerEvents: 'none'
        }} />
        <div style={{
          position: 'absolute',
          right: '40%',
          top: '40%',
          display: 'flex',
          gap: '8px',
          pointerEvents: 'none',
          opacity: 0.8
        }}>
          <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#ffb627' }} />
          <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#ffb627' }} style={{ transform: 'translateY(-12px)' }} />
          <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#ffb627' }} style={{ transform: 'translateY(-24px)' }} />
        </div>

        <div style={{ maxWidth: '520px', zIndex: 10, display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <h1 className="responsive-hero-title">
            Unlock your potential.
          </h1>
          <p className="responsive-hero-desc">
            Blaze a trail. Learn something new. Opportunity's knocking. Will you answer?
          </p>
          <div>
            <button 
              onClick={() => setActivePage('signup')}
              style={{
                backgroundColor: '#ffb627',
                border: 'none',
                borderRadius: '4px',
                color: '#222222',
                fontWeight: '800',
                fontSize: '1.1rem',
                padding: '14px 32px',
                cursor: 'pointer',
                boxShadow: '0 4px 10px rgba(255,182,39,0.25)',
                transition: 'all 0.2s'
              }}
              onMouseOver={e => e.target.style.backgroundColor = '#fba919'}
              onMouseOut={e => e.target.style.backgroundColor = '#ffb627'}
            >
              Get started
            </button>
          </div>
        </div>
      </section>

      {/* 2. Interactive Study AI Assistant chat bubble */}
      <section className="card" style={{ padding: '24px', backgroundColor: '#eef4f7', borderLeft: '5px solid #13809c' }}>
        <div style={{ display: 'flex', gap: '16px', alignItems: 'center', marginBottom: '16px' }}>
          <div style={{ 
            width: '42px', height: '42px', borderRadius: '50%', backgroundColor: '#13809c', color: 'white',
            display: 'flex', alignItems: 'center', justifyContent: 'center'
          }}>
            <Bot size={22} />
          </div>
          <div>
            <h3 style={{ fontSize: '1.1rem', color: '#1f4e5a', margin: 0, fontWeight: '800' }}>Study AI Interactive Assistant</h3>
            <span style={{ fontSize: '0.8rem', color: '#718096' }}>Instant educational guidance and FTCE test scoring assistance</span>
          </div>
        </div>

        {aiResponse ? (
          <div className="fade-in" style={{ 
            backgroundColor: '#ffffff', 
            padding: '16px', 
            borderRadius: '6px', 
            border: '1px solid #d2dbe5',
            color: '#222222',
            fontSize: '0.92rem',
            lineHeight: '1.6',
            marginBottom: '16px'
          }}>
            {aiResponse}
          </div>
        ) : (
          <p style={{ fontSize: '0.9rem', color: '#4a5568', marginBottom: '16px' }}>
            Hi, I'm Study AI! Ask me a question about the <strong>FTCE Professional Education Test</strong> or any subject topic (like "How is the FTCE scored?").
          </p>
        )}

        <form onSubmit={handleAskAI} style={{ display: 'flex', gap: '12px' }}>
          <input 
            type="text" 
            placeholder="Ask Study AI, e.g. How is the FTCE Professional Education test scored?"
            value={aiInput}
            onChange={e => setAiInput(e.target.value)}
            style={{
              flex: 1,
              padding: '12px 16px',
              border: '1.5px solid #d2dbe5',
              borderRadius: '4px',
              outline: 'none',
              fontSize: '0.95rem'
            }}
          />
          <button 
            type="submit" 
            className="btn" 
            style={{ backgroundColor: '#13809c', color: 'white', padding: '12px 20px', borderRadius: '4px' }}
          >
            Ask AI
          </button>
        </form>
      </section>

      {/* 3. Dark Teal Section: "Learn faster. Stay motivated. Study smarter." (Screenshots 492 & 493) */}
      <section style={{
        backgroundColor: '#1f4e5a',
        borderRadius: '8px',
        padding: '56px 32px',
        color: '#ffffff',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '40px'
      }}>
        
        {/* Floating Sparkles decoration */}
        <span style={{ position: 'absolute', left: '6%', top: '15%', color: '#ffb627', fontSize: '2.5rem', fontWeight: 'bold' }}>*</span>
        <span style={{ position: 'absolute', right: '8%', top: '10%', color: '#ffb627', fontSize: '2rem', fontWeight: 'bold' }}>*</span>

        <h2 style={{ 
          fontSize: '2.4rem', 
          fontWeight: '900', 
          color: '#ffffff', 
          textAlign: 'center',
          maxWidth: '750px',
          margin: '0 auto',
          lineHeight: '1.2'
        }}>
          Learn faster. Stay motivated. Study smarter.
        </h2>

        {/* 6 Program Cards Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(310px, 1fr))',
          gap: '24px',
          width: '100%'
        }}>
          {programs.map((prog, idx) => (
            <div 
              key={idx}
              style={{
                backgroundColor: '#ffffff',
                borderRadius: '8px',
                padding: '28px',
                color: '#222222',
                display: 'flex',
                flexDirection: 'column',
                gap: '16px',
                boxShadow: '0 4px 15px rgba(0,0,0,0.04)',
                position: 'relative'
              }}
            >
              {/* Graphic icon representing the program card */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{
                  width: '48px', height: '48px', borderRadius: '50%', backgroundColor: '#f2f6f9',
                  display: 'flex', alignItems: 'center', justifyContent: 'center'
                }}>
                  {prog.icon}
                </div>
                <h3 style={{ fontSize: '1.35rem', color: '#1f4e5a', fontWeight: '800' }}>
                  {prog.title} &rarr;
                </h3>
              </div>

              <p style={{ fontSize: '0.88rem', color: '#4a5568', lineHeight: '1.5', minHeight: '66px' }}>
                {prog.description}
              </p>

              {/* Programs Selector Dropdown */}
              <div style={{ marginTop: 'auto', position: 'relative' }}>
                <button
                  onClick={() => setActiveCardDropdown(activeCardDropdown === idx ? null : idx)}
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    backgroundColor: '#f2f6f9',
                    border: '1px solid #d2dbe5',
                    borderRadius: '4px',
                    textAlign: 'left',
                    fontSize: '0.9rem',
                    color: '#13809c',
                    fontWeight: '700',
                    cursor: 'pointer',
                    display: 'flex',
                    justifyItems: 'center',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                  }}
                >
                  <span>{prog.dropdownText}</span>
                  <span style={{ fontSize: '0.75rem' }}>▼</span>
                </button>

                {activeCardDropdown === idx && (
                  <div className="card fade-in" style={{
                    position: 'absolute',
                    bottom: '50px',
                    left: 0,
                    right: 0,
                    zIndex: 99,
                    backgroundColor: '#ffffff',
                    padding: '12px',
                    border: '1.5px solid #13809c',
                    borderRadius: '4px',
                    boxShadow: 'var(--shadow-xl)',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '10px'
                  }}>
                    {prog.items.map((item, keyIdx) => (
                      <span 
                        key={keyIdx} 
                        onClick={() => {
                          setActiveCardDropdown(null);
                          if (item.includes("FTCE")) {
                            setSearchQuery("FTCE");
                            setActivePage("catalog");
                          } else if (item.includes("AP")) {
                            setSearchQuery("Calculus");
                            setActivePage("catalog");
                          } else {
                            setActivePage("catalog");
                          }
                        }}
                        style={{ fontSize: '0.85rem', color: '#4a5568', cursor: 'pointer', padding: '4px 0' }}
                        onMouseOver={e => e.target.style.color = '#13809c'}
                        onMouseOut={e => e.target.style.color = '#4a5568'}
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Subject Showcase (specifically FTCE highlight) */}
      <section>
        <div style={{ display: 'flex', justifyItems: 'center', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '32px' }}>
          <div>
            <h2 className="section-title" style={{ margin: 0 }}>Featured Test Prep</h2>
            <p style={{ color: '#718096', marginTop: '6px' }}>Excel in your teacher credentials and AP standard exams</p>
          </div>
          <button className="btn" style={{ backgroundColor: '#13809c', color: 'white', padding: '10px 20px' }} onClick={() => setActivePage('catalog')}>
            Explore Library &rarr;
          </button>
        </div>

        {/* Catalog grid */}
        <div className="courses-grid">
          {courses.map((course) => (
            <div 
              key={course.id} 
              className="card card-hover" 
              style={{ 
                display: 'flex', 
                flexDirection: 'column', 
                gap: '16px',
                cursor: 'pointer',
                borderTop: `4px solid ${course.color}`
              }}
              onClick={() => onSelectCourse(course)}
            >
              <div style={{ display: 'flex', justifyItems: 'center', justifyContent: 'space-between', alignItems: 'center' }}>
                <span className="badge" style={{ backgroundColor: course.lightBg, color: course.color }}>
                  {course.subject}
                </span>
                <div style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '0.85rem', fontWeight: '700', color: 'var(--text-primary)' }}>
                  <Star size={14} fill="var(--accent)" stroke="var(--accent)" />
                  <span>{course.rating}</span>
                </div>
              </div>

              <div>
                <h3 style={{ fontSize: '1.2rem', marginBottom: '8px', color: '#1f4e5a', fontWeight: '800' }}>
                  {course.title}
                </h3>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: '1.5', minHeight: '60px' }}>
                  {course.description.substring(0, 110)}...
                </p>
              </div>

              <div style={{ 
                marginTop: 'auto', 
                paddingTop: '16px', 
                borderTop: '1px solid var(--border-light)',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                fontSize: '0.8rem',
                color: 'var(--text-tertiary)',
                fontWeight: '600'
              }}>
                <span>{course.lessonsCount} lessons</span>
                <span style={{ color: '#13809c', fontWeight: '700' }}>View Lessons &rarr;</span>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
