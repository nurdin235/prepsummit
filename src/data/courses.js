export const coursesData = [
  {
    id: "ftce-professional-education-test",
    title: "FTCE Professional Education Test (PEd) Study Guide and Test Prep",
    subject: "FTCE Exams",
    level: "Teacher Certification",
    duration: "6 Weeks",
    lessonsCount: 105,
    rating: 4.8,
    color: "#13809c",
    lightBg: "#f2f6f9",
    practiceQuestions: 507,
    practiceTests: 9,
    videos: 92,
    hoursOfVideo: 9,
    image: "https://images.unsplash.com/photo-1577896851231-70ef18881754?w=500&auto=format&fit=crop&q=60",
    description: "PrepSumit.com's FTCE Professional Education Test (083) study guide helps you prepare for this important Florida teacher certification exam with confidence. This comprehensive prep course features engaging video lessons, quick self-check quizzes, and realistic full-length practice tests designed to strengthen your teaching knowledge and test-taking skills.",
    lessons: [
      {
        id: "ftce-passing-score",
        title: "FTCE Professional Education Test: Passing Score",
        duration: "8 mins",
        videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
        summary: "The FTCE Professional Education test is scored using a PASS / NOT PASS system and requires a scaled score of 200. Read on for a description of this system, and find out what percentage of questions you'll need to answer correctly to pass.",
        transcript: [
          { time: "00:00", text: "Welcome to the FTCE Professional Education Test study guide. Today we will explain the scoring system." },
          { time: "01:15", text: "First, you should know that this is a computer-based exam consisting of approximately 110 multiple-choice questions." },
          { time: "02:30", text: "The score is reported on a scaled scale from 100 to 300, and a scaled score of at least 200 is required to pass." },
          { time: "03:45", text: "To earn a scaled score of 200, you generally need to answer between 70% and 75% of the questions correctly." },
          { time: "05:00", text: "Let's review the breakdown of the areas covered, including instructional design, learning environments, and delivery." }
        ],
        quiz: [
          {
            id: "ftce-q1",
            question: "An English-speaking student attends a class in which instruction is 100% in French. This approach to second-language learning is referred to as _____.",
            options: ["bilingual education", "foreign language education", "multicultural education", "immersion"],
            answer: 3,
            explanation: "In immersion programs, instruction is conducted entirely in the target language (in this case, French), helping students develop native-like proficiency."
          },
          {
            id: "ftce-q2",
            question: "A teacher wants to foster critical thinking during a class discussion. Which type of question would be most effective?",
            options: ["A closed-ended question", "An open-ended question", "A recall question", "A yes/no question"],
            answer: 1,
            explanation: "Open-ended questions encourage students to analyze, synthesize, and evaluate information, fostering high-order critical thinking."
          }
        ]
      },
      {
        id: "ftce-what-is-on-test",
        title: "What is on the FTCE Professional Education Test?",
        duration: "10 mins",
        videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
        summary: "Understand the blueprint of the FTCE Professional Education Test. Explore the key core competencies, domain distributions, and task analyses that align with Florida's education standards.",
        transcript: [
          { time: "00:00", text: "Hello candidates. Let's analyze the blueprint and competency structure of the FTCE PEd." },
          { time: "02:30", text: "The exam spans 8 key competencies, including instructional design, student assessments, and professional development." },
          { time: "05:00", text: "Competency 1 focuses on instructional design, making up about 15% of the test questions." },
          { time: "07:30", text: "We will now examine key study standards for each domain." }
        ],
        quiz: [
          {
            id: "ftce-q3",
            question: "Which competency makes up the largest share of the FTCE Professional Education Test?",
            options: ["Instructional Design & Planning", "Classroom Management & Learning Environments", "Instructional Delivery & Facilitation", "Assessing Student Learning"],
            answer: 2,
            explanation: "Instructional Delivery and Facilitation is highly emphasized, testing practical teaching techniques and standard-aligned lesson delivery."
          }
        ]
      },
      {
        id: "ftce-registration-how-to",
        title: "FTCE Registration | How to Sign Up for the FTCE Exam",
        duration: "6 mins",
        videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
        summary: "Step-by-step guidance on how to register for the Florida Teacher Certification Examinations (FTCE), choose testing center locations, select testing dates, and manage your account online.",
        transcript: [
          { time: "00:00", text: "In this short clip, we walk through the FTCE online registration portal." },
          { time: "02:00", text: "You must create an account at the official FTCE/FELE website, select your test, and schedule your appointment." }
        ],
        quiz: [
          {
            id: "ftce-q4",
            question: "Where do candidates register for the FTCE exams?",
            options: ["Pearson VUE / FTCE official registration portal", "The school board office", "The local high school", "The Florida Department of Health website"],
            answer: 0,
            explanation: "All FTCE exams are administered via Pearson VUE, and registration is completed through the official FTCE/FELE website."
          }
        ]
      },
      {
        id: "ftce-retake-policy",
        title: "FTCE Retake Policy",
        duration: "5 mins",
        videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
        summary: "If you do not pass your FTCE exam on the first attempt, learn about the retake policy rules, waiting periods, and score reports before scheduling your next exam.",
        transcript: [
          { time: "00:00", text: "Let's review the FTCE retake guidelines so you're prepared in case you need to retest." },
          { time: "02:00", text: "You must wait exactly 31 calendar days before retaking a failed exam or subtest." }
        ],
        quiz: [
          {
            id: "ftce-q5",
            question: "What is the mandatory waiting period before retaking a failed FTCE exam?",
            options: ["7 days", "14 days", "31 days", "60 days"],
            answer: 2,
            explanation: "According to FTCE policies, candidates must wait at least 31 calendar days from the date of the failed attempt before retaking the same exam."
          }
        ]
      }
    ],
    flashcards: [
      { id: "ftce-fc1", term: "Immersion", definition: "A method of teaching a foreign language by having the student speak and hear only the target language." },
      { id: "ftce-fc2", term: "Formative Assessment", definition: "Diagnostic, ongoing evaluations used to monitor student learning and provide feedback to improve instruction." },
      { id: "ftce-fc3", term: "Summative Assessment", definition: "Evaluations administered at the end of an instructional unit to measure student learning against a standard (e.g. final exam)." },
      { id: "ftce-fc4", term: "Differentiated Instruction", definition: "Tailoring teaching techniques, activities, and products to meet the individual learning needs, readiness, and interests of students." },
      { id: "ftce-fc5", term: "ELL (English Language Learner)", definition: "Students who are unable to communicate fluently or learn effectively in English, often requiring specialized instructional support." }
    ]
  },
  {
    id: "ap-calculus",
    title: "AP Calculus BC",
    subject: "Mathematics",
    level: "Advanced Placement",
    duration: "12 Weeks",
    lessonsCount: 8,
    rating: 4.8,
    color: "#3b82f6",
    lightBg: "rgba(59, 130, 246, 0.08)",
    practiceQuestions: 310,
    practiceTests: 4,
    videos: 45,
    hoursOfVideo: 6,
    image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=500&auto=format&fit=crop&q=60",
    description: "Master limits, derivatives, integrals, and series with interactive practice, detailed video explanations, and AP exam prep questions.",
    lessons: [
      {
        id: "limits-intro",
        title: "Introduction to Limits",
        duration: "12 mins",
        videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
        summary: "Limits are the foundational building block of calculus. A limit describes the value that a function approaches as the input approaches some value. Limits are crucial for defining derivatives, integrals, and continuity.",
        transcript: [
          { time: "00:00", text: "Welcome to AP Calculus BC. Today we will explore the core foundation of calculus: Limits." },
          { time: "01:30", text: "Let's think about a function f(x) = (x^2 - 1) / (x - 1). What happens when x equals 1? It becomes 0/0, which is undefined." },
          { time: "03:15", text: "However, if we approach x = 1 from the left and right, we see the function values approach 2. This is the concept of a limit." }
        ],
        quiz: [
          {
            id: "q1",
            question: "Evaluate the limit of (x^2 - 9)/(x - 3) as x approaches 3.",
            options: ["3", "6", "9", "Undefined / Does not exist"],
            answer: 1,
            explanation: "Factor the numerator: x^2 - 9 = (x - 3)(x + 3). Cancel out (x - 3) with the denominator to get (x + 3). As x approaches 3, x + 3 approaches 6."
          }
        ]
      },
      {
        id: "derivative-rules",
        title: "The Power, Product, and Quotient Rules",
        duration: "15 mins",
        videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
        summary: "Learn the shortcuts to finding derivatives. Instead of using the limit definition of a derivative every time, we can apply algebraic rules like the Power Rule, Product Rule, and Quotient Rule.",
        transcript: [
          { time: "00:00", text: "Hi everyone, in this lesson we are transitioning from limits to derivative shortcuts." }
        ],
        quiz: [
          {
            id: "q2",
            question: "Find the derivative of f(x) = 4x^3 - 5x + 7.",
            options: ["12x^2 - 5", "12x^3 - 5", "4x^2 - 5", "12x^2"],
            answer: 0,
            explanation: "Apply the Power Rule: d/dx(4x^3) = 12x^2, d/dx(-5x) = -5, and d/dx(7) = 0. Combine them to get 12x^2 - 5."
          }
        ]
      }
    ],
    flashcards: [
      { id: "fc1", term: "Limit", definition: "The value that a function approaches as the input approaches some value." },
      { id: "fc2", term: "Derivative", definition: "The instantaneous rate of change of a function, represented geometrically as the slope of the tangent line." }
    ]
  },
  {
    id: "cell-biology",
    title: "Cell Biology",
    subject: "Science",
    level: "College Prep",
    duration: "8 Weeks",
    lessonsCount: 6,
    rating: 4.9,
    color: "#10b981",
    lightBg: "rgba(16, 185, 129, 0.08)",
    practiceQuestions: 180,
    practiceTests: 3,
    videos: 32,
    hoursOfVideo: 4.5,
    image: "https://images.unsplash.com/photo-1576086213369-97a306d36557?w=500&auto=format&fit=crop&q=60",
    description: "Explore the structural and functional units of life. Learn organelle functions, cell division, membrane transport, and bioenergetics.",
    lessons: [
      {
        id: "organelles",
        title: "Organelles and Cellular Structure",
        duration: "10 mins",
        videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
        summary: "Cells contain specialized structures called organelles, each performing specific tasks. Eukaryotic cells have membrane-bound organelles like the nucleus and mitochondria, whereas prokaryotes do not.",
        transcript: [
          { time: "00:00", text: "Welcome to Cell Biology. Cells are the fundamental units of all living systems." }
        ],
        quiz: [
          {
            id: "q1",
            question: "Which organelle is responsible for generating ATP?",
            options: ["Nucleus", "Ribosome", "Mitochondria", "Golgi Apparatus"],
            answer: 2,
            explanation: "Mitochondria convert nutrients into adenosine triphosphate (ATP), the chemical energy currency of the cell."
          }
        ]
      }
    ],
    flashcards: [
      { id: "fc1", term: "Mitochondria", definition: "Organelle that produces ATP through cellular respiration; known as the powerhouse of the cell." }
    ]
  },
  {
    id: "intro-psychology",
    title: "Introduction to Psychology",
    subject: "Humanities & Social Sciences",
    level: "Introductory",
    duration: "10 Weeks",
    lessonsCount: 10,
    rating: 4.7,
    color: "#8b5cf6",
    lightBg: "rgba(139, 92, 246, 0.08)",
    practiceQuestions: 250,
    practiceTests: 4,
    videos: 50,
    hoursOfVideo: 7,
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=500&auto=format&fit=crop&q=60",
    description: "Delve into the study of mind and behavior. Learn about cognitive development, behavioral conditioning, mental health, and social interactions.",
    lessons: [
      {
        id: "conditioning",
        title: "Classical and Operant Conditioning",
        duration: "14 mins",
        videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
        summary: "Behavioral psychology explains learning through conditioning. Classical conditioning involves pairing an involuntary response to a stimulus, whereas operant conditioning shapes voluntary behaviors using rewards and punishments.",
        transcript: [
          { time: "00:00", text: "Hello! Today we will examine how organisms learn from their environment." }
        ],
        quiz: [
          {
            id: "q1",
            question: "In Pavlov's experiment, what was the conditioned response?",
            options: ["The food", "Salivation to the food", "The bell sound", "Salivation to the bell sound"],
            answer: 3,
            explanation: "The salivation in response to the bell alone is the conditioned response (CR) because it was learned through training."
          }
        ]
      }
    ],
    flashcards: [
      { id: "fc1", term: "Classical Conditioning", definition: "A learning process that occurs when two stimuli are repeatedly paired." }
    ]
  },
  {
    id: "macroeconomics",
    title: "Macroeconomics",
    subject: "Business",
    level: "Introductory",
    duration: "9 Weeks",
    lessonsCount: 7,
    rating: 4.6,
    color: "#f97316",
    lightBg: "rgba(249, 115, 22, 0.08)",
    practiceQuestions: 210,
    practiceTests: 3,
    videos: 38,
    hoursOfVideo: 5,
    image: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=500&auto=format&fit=crop&q=60",
    description: "Understand the mechanics of inflation, GDP, fiscal policies, banking systems, and central bank monetary interventions.",
    lessons: [
      {
        id: "gdp-intro",
        title: "Gross Domestic Product (GDP) Explained",
        duration: "11 mins",
        videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
        summary: "GDP is the total market value of all final goods and services produced within a country's borders in a given time period. It serves as a comprehensive scorecard of a country's economic health.",
        transcript: [
          { time: "00:00", text: "Welcome to Macroeconomics. Today we study the most watched economic metric: GDP." }
        ],
        quiz: [
          {
            id: "q1",
            question: "Which formula represents the expenditure approach to calculating GDP?",
            options: ["GDP = C + I + G + NX", "GDP = C + S + T", "GDP = Wages + Rent + Interest + Profit", "GDP = Exports - Imports"],
            answer: 0,
            explanation: "The expenditure formula is GDP = Consumption (C) + Investment (I) + Government Spending (G) + Net Exports (NX, which is Exports - Imports)."
          }
        ]
      }
    ],
    flashcards: [
      { id: "fc1", term: "Gross Domestic Product (GDP)", definition: "The total value of goods produced and services provided in a country during one year." }
    ]
  },
  {
    id: "us-history",
    title: "AP US History (APUSH)",
    subject: "History",
    level: "Advanced Placement",
    duration: "12 Weeks",
    lessonsCount: 15,
    rating: 4.7,
    color: "#8b5cf6",
    lightBg: "rgba(139, 92, 246, 0.08)",
    practiceQuestions: 420,
    practiceTests: 5,
    videos: 80,
    hoursOfVideo: 11,
    image: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=500&auto=format&fit=crop&q=60",
    description: "Master American history from the pre-Columbian era to the 21st century. Prepares students for the AP US History exam or CLEP college credit.",
    lessons: [
      {
        id: "apush-revolution",
        title: "The American Revolution & Causes",
        duration: "15 mins",
        videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
        summary: "The American Revolution was sparked by colonial opposition to British policies of taxation without representation, leading to military conflict and the founding of a new nation.",
        transcript: [
          { time: "00:00", text: "Today we will analyze the political and economic causes of the American Revolutionary War." }
        ],
        quiz: [
          {
            id: "apush-q1",
            question: "Which British act directly triggered the Boston Tea Party?",
            options: ["The Stamp Act", "The Quartering Act", "The Tea Act", "The Declaratory Act"],
            answer: 2,
            explanation: "The Tea Act of 1773 granted the East India Company a monopoly on tea sales, prompting angry colonial protestors to dump tea into Boston Harbor."
          }
        ]
      }
    ],
    flashcards: [
      { id: "apush-fc1", term: "Common Sense", definition: "A pamphlet written by Thomas Paine in 1776 that advocated independence from Great Britain." }
    ]
  },
  {
    id: "english-composition",
    title: "College English Composition & Writing",
    subject: "English",
    level: "College Prep",
    duration: "6 Weeks",
    lessonsCount: 8,
    rating: 4.5,
    color: "#13809c",
    lightBg: "#f2f6f9",
    practiceQuestions: 220,
    practiceTests: 2,
    videos: 25,
    hoursOfVideo: 3.5,
    image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=500&auto=format&fit=crop&q=60",
    description: "Develop college-level reading and writing skills. Learn rhetorical analysis, argumentative structuring, essay drafting, and academic citation styles.",
    lessons: [
      {
        id: "english-thesis",
        title: "Crafting a Strong Thesis Statement",
        duration: "9 mins",
        videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
        summary: "A thesis statement forms the core argument of an academic essay, providing a clear roadmap for the reader and defining the writer's central claim.",
        transcript: [
          { time: "00:00", text: "Let's explore how to write a concise, arguable, and specific thesis statement." }
        ],
        quiz: [
          {
            id: "eng-q1",
            question: "A strong thesis statement must be which of the following?",
            options: ["A simple fact", "An arguable claim", "A broad topic", "A question"],
            answer: 1,
            explanation: "A thesis statement must present an arguable claim that requires evidence and analysis to support; it cannot be a simple fact or a question."
          }
        ]
      }
    ],
    flashcards: [
      { id: "eng-fc1", term: "Plagiarism", definition: "The practice of taking someone else's work or ideas and passing them off as one's own without proper attribution." }
    ]
  },
  {
    id: "nclex-rn-prep",
    title: "NCLEX-RN Exam Prep & Nursing Study Guide",
    subject: "Nursing Exams",
    level: "Teacher Certification", // matches Allied Health/Nursing Exams category
    duration: "10 Weeks",
    lessonsCount: 65,
    rating: 4.9,
    color: "#10b981",
    lightBg: "rgba(16, 185, 129, 0.08)",
    practiceQuestions: 650,
    practiceTests: 6,
    videos: 54,
    hoursOfVideo: 8.5,
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=500&auto=format&fit=crop&q=60",
    description: "Pass your NCLEX-RN exam with confidence. Features comprehensive reviews of pharmacology, physiological integrity, and clinical decision-making strategies.",
    lessons: [
      {
        id: "nclex-cardio",
        title: "Pharmacology: Cardiac Medications",
        duration: "13 mins",
        videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
        summary: "Review major classes of cardiovascular drugs, including Beta-blockers, ACE inhibitors, Calcium channel blockers, and nursing considerations for safe administration.",
        transcript: [
          { time: "00:00", text: "Welcome to NCLEX Cardiac Pharmacology. Today we cover antihypertensive medications." }
        ],
        quiz: [
          {
            id: "nclex-q1",
            question: "Which vital sign must a nurse assess immediately before administering Beta-blockers?",
            options: ["Temperature", "Heart rate & Blood pressure", "Respiratory rate", "Oxygen saturation"],
            answer: 1,
            explanation: "Beta-blockers slow the heart rate and lower blood pressure; therefore, apical pulse and blood pressure must be assessed prior to administration."
          }
        ]
      }
    ],
    flashcards: [
      { id: "ncl-fc1", term: "Bradycardia", definition: "A slow heart rate, typically defined as under 60 beats per minute in adults." }
    ]
  },
  {
    id: "real-estate-salesperson",
    title: "Real Estate License Exam Prep",
    subject: "Real Estate Exams",
    level: "Teacher Certification", // matches licensing category
    duration: "4 Weeks",
    lessonsCount: 22,
    rating: 4.6,
    color: "#f97316",
    lightBg: "rgba(249, 115, 22, 0.08)",
    practiceQuestions: 380,
    practiceTests: 3,
    videos: 18,
    hoursOfVideo: 4,
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=500&auto=format&fit=crop&q=60",
    description: "Prepare for your state Real Estate Salesperson exam. Learn real property ownership laws, agency relationships, valuation methods, and finance contracts.",
    lessons: [
      {
        id: "re-ownership",
        title: "Types of Real Property Ownership",
        duration: "11 mins",
        videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
        summary: "Understand the differences between Freehold and Leasehold estates, Joint Tenancy, Tenancy in Common, and the rights associated with property deeds.",
        transcript: [
          { time: "00:00", text: "Let's review the fundamental legal definitions of real estate ownership." }
        ],
        quiz: [
          {
            id: "re-q1",
            question: "Which type of co-ownership features the right of survivorship?",
            options: ["Tenancy in Common", "Joint Tenancy", "Partnership Estate", "Leasehold Estate"],
            answer: 1,
            explanation: "Joint Tenancy includes the right of survivorship, meaning that when one co-owner dies, their interest automatically passes to the surviving co-owners."
          }
        ]
      }
    ],
    flashcards: [
      { id: "re-fc1", term: "Eminent Domain", definition: "The power of a government to take private property for public use, with payment of just compensation." }
    ]
  },
  {
    id: "asvab-prep",
    title: "ASVAB Exam Study Guide & Test Prep",
    subject: "Military Exams",
    level: "Teacher Certification", // matches licensing/exam categories
    duration: "5 Weeks",
    lessonsCount: 30,
    rating: 4.7,
    color: "#3b82f6",
    lightBg: "rgba(59, 130, 246, 0.08)",
    practiceQuestions: 480,
    practiceTests: 4,
    videos: 35,
    hoursOfVideo: 5.5,
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=500&auto=format&fit=crop&q=60",
    description: "Prepare for the Armed Services Vocational Aptitude Battery. Review Arithmetic Reasoning, General Science, Paragraph Comprehension, and Mechanical Comprehension.",
    lessons: [
      {
        id: "asvab-arith",
        title: "Arithmetic Reasoning: Ratio Word Problems",
        duration: "10 mins",
        videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
        summary: "Learn algebraic shortcuts to solving word problems involving ratios, mixtures, and work rates, which are heavily tested on the ASVAB exam.",
        transcript: [
          { time: "00:00", text: "In this ASVAB session, we will demystify ratio and proportion word problems." }
        ],
        quiz: [
          {
            id: "asvab-q1",
            question: "If a blueprint ratio is 1 inch = 12 feet, how many feet does 3.5 inches represent?",
            options: ["36 feet", "42 feet", "48 feet", "50 feet"],
            answer: 1,
            explanation: "Set up the proportion: 1 / 12 = 3.5 / x. Cross-multiply: x = 12 * 3.5 = 42 feet."
          }
        ]
      }
    ],
    flashcards: [
      { id: "asv-fc1", term: "Force", definition: "A push or pull exerted on an object, measured in Newtons (F = ma)." }
    ]
  },
  {
    id: "praxis-core",
    title: "Praxis Core Academic Skills for Educators",
    subject: "Praxis Exams",
    level: "Teacher Certification",
    duration: "8 Weeks",
    lessonsCount: 45,
    rating: 4.8,
    color: "#13809c",
    lightBg: "#f2f6f9",
    practiceQuestions: 350,
    practiceTests: 3,
    videos: 40,
    hoursOfVideo: 7.5,
    image: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=500&auto=format&fit=crop&q=60",
    description: "Comprehensive preparation guide for the Praxis Core exams. Perfect your scores in reading comprehension, grammar writing, and foundational math formulas.",
    lessons: [
      {
        id: "praxis-math",
        title: "Praxis Math: Geometry & Area Formulas",
        duration: "12 mins",
        videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
        summary: "Understand the geometric principles, Pythagorean theorem, and coordinate plane equations required to pass the Praxis Math subtest.",
        transcript: [
          { time: "00:00", text: "Hello future teachers! Let's review standard geometry principles for the Praxis Core." }
        ],
        quiz: [
          {
            id: "prax-q1",
            question: "What is the area of a triangle with a base of 10 cm and a height of 6 cm?",
            options: ["60 sq cm", "30 sq cm", "20 sq cm", "15 sq cm"],
            answer: 1,
            explanation: "The formula for the area of a triangle is 0.5 * base * height. Here: 0.5 * 10 * 6 = 30 square centimeters."
          }
        ]
      }
    ],
    flashcards: [
      { id: "prx-fc1", term: "Pythagorean Theorem", definition: "In a right triangle, the square of the hypotenuse is equal to the sum of the squares of the other two sides (a^2 + b^2 = c^2)." }
    ]
  },
  {
    id: "toefl-prep",
    title: "TOEFL iBT English Test Preparation Guide",
    subject: "TOEFL Exams",
    level: "Teacher Certification", // matches certification
    duration: "6 Weeks",
    lessonsCount: 24,
    rating: 4.6,
    color: "#8b5cf6",
    lightBg: "rgba(139, 92, 246, 0.08)",
    practiceQuestions: 300,
    practiceTests: 2,
    videos: 30,
    hoursOfVideo: 5,
    image: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?w=500&auto=format&fit=crop&q=60",
    description: "Score high on the TOEFL iBT exam. Boost your english fluency with targeted practice tests, vocabulary flashcards, and strategies for speaking and writing tasks.",
    lessons: [
      {
        id: "toefl-speaking",
        title: "TOEFL Independent Speaking Task Strategies",
        duration: "10 mins",
        videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
        summary: "Learn how to structure your 45-second speaking response, use logical transitions, and express your opinions fluently within the time limit.",
        transcript: [
          { time: "00:00", text: "Welcome to TOEFL Speaking prep. Today we look at structuring independent responses." }
        ],
        quiz: [
          {
            id: "toefl-q1",
            question: "How long do candidates have to speak during the Independent Speaking Task?",
            options: ["30 seconds", "45 seconds", "60 seconds", "90 seconds"],
            answer: 1,
            explanation: "Candidates are given exactly 15 seconds to prepare and 45 seconds to record their speaking response."
          }
        ]
      }
    ],
    flashcards: [
      { id: "toefl-fc1", term: "Fluency", definition: "The ability to speak or write a foreign language easily, smoothly, and accurately." }
    ]
  },
  {
    id: "clep-college-algebra",
    title: "CLEP College Algebra Study Guide",
    subject: "Mathematics",
    level: "College Prep", // matches College Credit CLEP category
    duration: "8 Weeks",
    lessonsCount: 16,
    rating: 4.7,
    color: "#3b82f6",
    lightBg: "rgba(59, 130, 246, 0.08)",
    practiceQuestions: 290,
    practiceTests: 3,
    videos: 28,
    hoursOfVideo: 4.8,
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=500&auto=format&fit=crop&q=60",
    description: "Earn college credit by passing the CLEP College Algebra exam. Review quadratic equations, systems of linear equations, logarithmic models, and matrices.",
    lessons: [
      {
        id: "algebra-quad",
        title: "Solving Quadratic Equations",
        duration: "12 mins",
        videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
        summary: "Study three standard methods for solving quadratic equations: factoring, completing the square, and applying the quadratic formula.",
        transcript: [
          { time: "00:00", text: "Today we will review the quadratic formula: negative b plus or minus the square root..." }
        ],
        quiz: [
          {
            id: "quad-q1",
            question: "Solve for x: x^2 - 5x + 6 = 0.",
            options: ["x = 1, 6", "x = -2, -3", "x = 2, 3", "x = -1, 6"],
            answer: 2,
            explanation: "Factor the equation: (x - 2)(x - 3) = 0. Therefore, x = 2 and x = 3 are the solutions."
          }
        ]
      }
    ],
    flashcards: [
      { id: "quad-fc1", term: "Discriminant", definition: "The expression b^2 - 4ac, which determines the nature of the roots of a quadratic equation." }
    ]
  },
  {
    id: "lesson-planning-101",
    title: "K-12 Lesson Planning & Instruction",
    subject: "Teacher Resources",
    level: "Teacher Certification",
    duration: "4 Weeks",
    lessonsCount: 10,
    rating: 4.6,
    color: "#13809c",
    lightBg: "#f2f6f9",
    practiceQuestions: 150,
    practiceTests: 1,
    videos: 12,
    hoursOfVideo: 2.5,
    image: "https://images.unsplash.com/photo-1544717305-2782549b5136?w=500&auto=format&fit=crop&q=60",
    description: "Learn to design engaging lesson plans that align with state education standards. Includes mock template printables, math worksheets, and assessment tools.",
    lessons: [
      {
        id: "lesson-standards",
        title: "Aligning Objectives to State Standards",
        duration: "9 mins",
        videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
        summary: "Understand how to write clear, measurable learning objectives (e.g. using Bloom's Taxonomy) that directly support mandated state educational benchmarks.",
        transcript: [
          { time: "00:00", text: "Let's explore standard alignments using behavioral objectives." }
        ],
        quiz: [
          {
            id: "lp-q1",
            question: "Which verb represents a measurable objective in Bloom's Taxonomy?",
            options: ["Understand", "Analyze", "Appreciate", "Learn"],
            answer: 1,
            explanation: "The verb 'Analyze' represents a clear, measurable behavior that can be observed and graded in a student assessment, unlike 'Understand'."
          }
        ]
      }
    ],
    flashcards: [
      { id: "lp-fc1", term: "Bloom's Taxonomy", definition: "A classification system used to define and distinguish different levels of human cognition (e.g., remembering, analyzing, creating)." }
    ]
  },
  {
    id: "working-scholars-intro",
    title: "Working Scholars® Program Orientation",
    subject: "College Credit",
    level: "College Prep",
    duration: "2 Weeks",
    lessonsCount: 5,
    rating: 4.9,
    color: "#13809c",
    lightBg: "#f2f6f9",
    practiceQuestions: 50,
    practiceTests: 1,
    videos: 6,
    hoursOfVideo: 1.5,
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=500&auto=format&fit=crop&q=60",
    description: "Learn how the Working Scholars® program enables working adults to earn high-quality college degrees fully funded, with flexible credit transfers.",
    lessons: [
      {
        id: "scholars-transfer",
        title: "How to Transfer College Credits",
        duration: "8 mins",
        videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
        summary: "A step-by-step overview of how to request transcripts, review credit recommendations (ACE/NCCRS), and apply transfer courses toward your partner degree.",
        transcript: [
          { time: "00:00", text: "Today we will guide you on transferring your course credits into your degree path." }
        ],
        quiz: [
          {
            id: "ws-q1",
            question: "Which bodies recommend PrepSumit course credits for transfer?",
            options: ["Pearson and Pearson VUE", "ACE (American Council on Education) and NCCRS", "The Department of State", "Local High Schools"],
            answer: 1,
            explanation: "Both ACE and NCCRS evaluate and recommend PrepSumit courses for college credit transfers to over 1,500 institutions."
          }
        ]
      }
    ],
    flashcards: [
      { id: "ws-fc1", term: "ACE Recommendation", definition: "A review process by the American Council on Education that validates non-traditional education for college transfer credit." }
    ]
  },
  {
    id: "teas-prep",
    title: "TEAS Test Prep | Test of Essential Academic Skills Exam",
    subject: "Nursing Exams",
    level: "Nursing Certification",
    duration: "4 Weeks",
    lessonsCount: 42,
    rating: 4.7,
    color: "#007791",
    lightBg: "#f2f9fa",
    practiceQuestions: 380,
    practiceTests: 5,
    videos: 36,
    hoursOfVideo: 4,
    image: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?w=500&auto=format&fit=crop&q=60",
    description: "PrepSumit.com's TEAS study guide is designed to fully prepare you for the Test of Essential Academic Skills. Master the Math, Science, English, and Reading sections with our micro-video lessons, flashcards, and standard-aligned practice quizzes.",
    lessons: [
      {
        id: "teas-what-is-exam",
        title: "What is on the TEAS Exam?",
        duration: "7 mins",
        videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
        summary: "An overview of the TEAS test, including its format, sections, timing, scoring, and registration details. Learn how to strategize your study schedule.",
        transcript: [
          { time: "00:00", text: "Welcome to the TEAS Exam Prep study guide. Today we will explain what to expect on the test." },
          { time: "02:00", text: "The TEAS consists of 170 multiple-choice questions covering Reading, Math, Science, and English." }
        ],
        quiz: [
          {
            id: "teas-q1",
            question: "How many scored questions are on the TEAS exam?",
            options: ["150 questions", "170 questions", "110 questions", "200 questions"],
            answer: 0,
            explanation: "Although there are 170 total questions on the TEAS, only 150 questions are scored. The remaining 20 are unscored pretest questions."
          }
        ]
      },
      {
        id: "teas-math-fractions",
        title: "TEAS Math: Fractions, Decimals & Percentages",
        duration: "9 mins",
        videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
        summary: "Learn how to convert between fractions, decimals, and percentages, and solve standard word problems found on the TEAS Math section.",
        transcript: [
          { time: "00:00", text: "In this lesson, we cover essential TEAS math conversions." }
        ],
        quiz: [
          {
            id: "teas-q2",
            question: "Convert 3/8 to a percentage.",
            options: ["37.5%", "3.75%", "0.375%", "38%"],
            answer: 0,
            explanation: "To convert a fraction to a percentage, divide 3 by 8 to get 0.375, then multiply by 100 to get 37.5%."
          }
        ]
      }
    ],
    flashcards: [
      { id: "teas-fc1", term: "TEAS", definition: "Test of Essential Academic Skills, a standardized test used for nursing school admissions." }
    ]
  }
];

export const userStatsData = {
  name: "Alex Mercer",
  rank: "Scholar",
  xp: 1450,
  streak: 5,
  weeklyGoal: 4,
  studiedHours: 2.8,
  completedLessons: 4,
  achievements: [
    { id: "ach1", title: "Daily Streak Champion", icon: "Flame", description: "Studied 5 days in a row" },
    { id: "ach2", title: "Limit Buster", icon: "TrendingUp", description: "Scored 100% on the Calculus Limits Quiz" },
    { id: "ach3", title: "Biology Initiate", icon: "ShieldAlert", description: "Completed cellular structure introduction" }
  ],
  recentlyViewed: [
    { courseId: "ap-calculus", lessonId: "limits-intro", progress: 65 },
    { courseId: "cell-biology", lessonId: "organelles", progress: 20 }
  ]
};
