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
    image: "https://images.unsplash.com/photo-1577896851231-70ef18881754?w=500&auto=format&fit=crop&q=60", // classroom/teacher image
    description: "PrepSummit.com's FTCE Professional Education Test (083) study guide helps you prepare for this important Florida teacher certification exam with confidence. This comprehensive prep course features engaging video lessons, quick self-check quizzes, and realistic full-length practice tests designed to strengthen your teaching knowledge and test-taking skills.",
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
            answer: 3, // index of "immersion"
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
    color: "var(--math-color)",
    lightBg: "var(--math-light-bg)",
    description: "Master limits, derivatives, integrals, and series with interactive practice, detailed video explanations, and AP exam prep questions.",
    lessons: [
      {
        id: "limits-intro",
        title: "Introduction to Limits",
        duration: "12 mins",
        videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4", // placeholder placeholder mp4 that works
        summary: "Limits are the foundational building block of calculus. A limit describes the value that a function approaches as the input approaches some value. Limits are crucial for defining derivatives, integrals, and continuity.",
        transcript: [
          { time: "00:00", text: "Welcome to AP Calculus BC. Today we will explore the core foundation of calculus: Limits." },
          { time: "01:30", text: "Let's think about a function f(x) = (x^2 - 1) / (x - 1). What happens when x equals 1? It becomes 0/0, which is undefined." },
          { time: "03:15", text: "However, if we approach x = 1 from the left and right, we see the function values approach 2. This is the concept of a limit." },
          { time: "05:00", text: "Formally, we write this as the limit of f(x) as x approaches c is equal to L." },
          { time: "07:45", text: "We will now look at how to evaluate limits algebraically, using factoring and rationalizing techniques." },
          { time: "10:15", text: "To summarize: a limit is about what value a function is heading toward, not necessarily where it lands." }
        ],
        quiz: [
          {
            id: "q1",
            question: "Evaluate the limit of (x^2 - 9)/(x - 3) as x approaches 3.",
            options: ["3", "6", "9", "Undefined / Does not exist"],
            answer: 1, // index of "6"
            explanation: "Factor the numerator: x^2 - 9 = (x - 3)(x + 3). Cancel out (x - 3) with the denominator to get (x + 3). As x approaches 3, x + 3 approaches 6."
          },
          {
            id: "q2",
            question: "What is the limit of sin(x)/x as x approaches 0?",
            options: ["0", "1", "Infinity", "Does not exist"],
            answer: 1, // index of "1"
            explanation: "The limit of sin(x)/x as x approaches 0 is a fundamental trigonometric limit equal to 1, which can be proven using the Squeeze Theorem."
          },
          {
            id: "q3",
            question: "When does a limit at a point x = c exist?",
            options: [
              "Only when f(c) is defined.",
              "Only when the left-hand limit is greater than the right-hand limit.",
              "When the left-hand limit and right-hand limit both exist and are equal.",
              "Always, for any function."
            ],
            answer: 2,
            explanation: "A limit exists at a point if and only if both one-sided limits exist and are equal: lim(x->c-) f(x) = lim(x->c+) f(x)."
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
          { time: "00:00", text: "Hi everyone, in this lesson we are transitioning from limits to derivative shortcuts." },
          { time: "02:10", text: "First up is the Power Rule: the derivative of x to the n is n times x to the n minus one." },
          { time: "05:30", text: "Next, the Product Rule: the derivative of f times g is f-prime g plus f g-prime." },
          { time: "08:45", text: "Lastly, the Quotient Rule: low d-high minus high d-low over the square of what's below." },
          { time: "12:00", text: "Let's do some examples combining these rules with trigonometric functions." }
        ],
        quiz: [
          {
            id: "q1",
            question: "Find the derivative of f(x) = 4x^3 - 5x + 7.",
            options: ["12x^2 - 5", "12x^3 - 5", "4x^2 - 5", "12x^2"],
            answer: 0,
            explanation: "Apply the Power Rule: d/dx(4x^3) = 12x^2, d/dx(-5x) = -5, and d/dx(7) = 0. Combine them to get 12x^2 - 5."
          },
          {
            id: "q2",
            question: "Apply the Product Rule to find d/dx [x * e^x].",
            options: ["e^x", "x * e^x", "e^x * (x + 1)", "e^x * (x - 1)"],
            answer: 2,
            explanation: "Product rule: (u*v)' = u'v + uv'. Here, u = x, v = e^x. So u' = 1, v' = e^x. Derivative is 1*e^x + x*e^x = e^x(x + 1)."
          }
        ]
      }
    ],
    flashcards: [
      { id: "fc1", term: "Limit", definition: "The value that a function approaches as the input approaches some value." },
      { id: "fc2", term: "Derivative", definition: "The instantaneous rate of change of a function, represented geometrically as the slope of the tangent line." },
      { id: "fc3", term: "Integral", definition: "The area under a curve, or the accumulation of quantities over an interval." },
      { id: "fc4", term: "Continuity", definition: "A function is continuous at x = c if f(c) is defined, the limit as x approaches c exists, and the limit equals f(c)." },
      { id: "fc5", term: "Chain Rule", definition: "A formula for computing the derivative of the composition of two or more functions: (f(g(x)))' = f'(g(x)) * g'(x)." }
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
    color: "var(--science-color)",
    lightBg: "var(--science-light-bg)",
    description: "Explore the structural and functional units of life. Learn organelle functions, cell division, membrane transport, and bioenergetics.",
    lessons: [
      {
        id: "organelles",
        title: "Organelles and Cellular Structure",
        duration: "10 mins",
        videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
        summary: "Cells contain specialized structures called organelles, each performing specific tasks. Eukaryotic cells have membrane-bound organelles like the nucleus and mitochondria, whereas prokaryotes do not.",
        transcript: [
          { time: "00:00", text: "Welcome to Cell Biology. Cells are the fundamental units of all living systems." },
          { time: "01:45", text: "The nucleus is the command center, housing the cell's genetic code, DNA." },
          { time: "03:30", text: "Mitochondria are the powerhouses of the cell, generating ATP through cellular respiration." },
          { time: "06:00", text: "Ribosomes and the Endoplasmic Reticulum cooperate to synthesize and package proteins." },
          { time: "08:30", text: "Lysosomes contain digestive enzymes to break down waste materials." }
        ],
        quiz: [
          {
            id: "q1",
            question: "Which organelle is responsible for generating ATP?",
            options: ["Nucleus", "Ribosome", "Mitochondria", "Golgi Apparatus"],
            answer: 2,
            explanation: "Mitochondria convert nutrients into adenosine triphosphate (ATP), the chemical energy currency of the cell."
          },
          {
            id: "q2",
            question: "What is the primary difference between eukaryotic and prokaryotic cells?",
            options: [
              "Prokaryotes contain a nucleus, whereas eukaryotes do not.",
              "Eukaryotes have membrane-bound organelles, while prokaryotes do not.",
              "Prokaryotes are always larger than eukaryotes.",
              "Only eukaryotes have cell membranes."
            ],
            answer: 1,
            explanation: "Eukaryotes have a true nucleus and membrane-bound organelles (like mitochondria, ER, and lysosomes), which are absent in prokaryotes."
          }
        ]
      }
    ],
    flashcards: [
      { id: "fc1", term: "Mitochondria", definition: "Organelle that produces ATP through cellular respiration; known as the powerhouse of the cell." },
      { id: "fc2", term: "Ribosome", definition: "Cellular structure made of RNA and protein that acts as the site of protein synthesis." },
      { id: "fc3", term: "Eukaryote", definition: "An organism consisting of cell(s) in which the genetic material is DNA in the form of chromosomes contained within a distinct nucleus." },
      { id: "fc4", term: "ATP (Adenosine Triphosphate)", definition: "The primary energy carrier molecule used by cells to perform work." },
      { id: "fc5", term: "Osmosis", definition: "The diffusion of water across a selectively permeable membrane from lower solute concentration to higher solute concentration." }
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
    color: "var(--psych-color)",
    lightBg: "var(--psych-light-bg)",
    description: "Delve into the study of mind and behavior. Learn about cognitive development, behavioral conditioning, mental health, and social interactions.",
    lessons: [
      {
        id: "conditioning",
        title: "Classical and Operant Conditioning",
        duration: "14 mins",
        videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
        summary: "Behavioral psychology explains learning through conditioning. Classical conditioning involves pairing an involuntary response to a stimulus, whereas operant conditioning shapes voluntary behaviors using rewards and punishments.",
        transcript: [
          { time: "00:00", text: "Hello! Today we will examine how organisms learn from their environment." },
          { time: "02:15", text: "Ivan Pavlov discovered classical conditioning when studying salivary reflexes in dogs." },
          { time: "05:00", text: "By pairing a bell (neutral stimulus) with food (unconditioned stimulus), the bell alone eventually triggered salivation." },
          { time: "08:10", text: "B.F. Skinner expanded this with Operant Conditioning, showing how consequences shape behavior." },
          { time: "11:30", text: "Reinforcement increases the likelihood of a behavior; punishment decreases it." }
        ],
        quiz: [
          {
            id: "q1",
            question: "In Pavlov's experiment, what was the conditioned response?",
            options: ["The food", "Salivation to the food", "The bell sound", "Salivation to the bell sound"],
            answer: 3,
            explanation: "The salivation in response to the bell alone is the conditioned response (CR) because it was learned through training."
          },
          {
            id: "q2",
            question: "Which of the following is an example of negative reinforcement?",
            options: [
              "Giving a child candy for doing chores.",
              "Slamming the door when angry.",
              "Taking an aspirin to remove a headache.",
              "Fining a driver for speeding."
            ],
            answer: 2,
            explanation: "Negative reinforcement involves removing an unpleasant stimulus (headache) to increase a desired behavior (taking aspirin)."
          }
        ]
      }
    ],
    flashcards: [
      { id: "fc1", term: "Classical Conditioning", definition: "A learning process that occurs when two stimuli are repeatedly paired; a response which is at first elicited by the second stimulus is eventually elicited by the first stimulus alone." },
      { id: "fc2", term: "Operant Conditioning", definition: "A method of learning that occurs through rewards and punishments for behavior." },
      { id: "fc3", term: "Cognition", definition: "The mental action or process of acquiring knowledge and understanding through thought, experience, and the senses." },
      { id: "fc4", term: "Schema", definition: "A cognitive framework or concept that helps organize and interpret information." },
      { id: "fc5", term: "Neurotransmitter", definition: "Chemical messengers that transmit signals across a chemical synapse from one neuron to another." }
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
    color: "var(--econ-color)",
    lightBg: "var(--econ-light-bg)",
    description: "Understand the mechanics of inflation, GDP, fiscal policies, banking systems, and central bank monetary interventions.",
    lessons: [
      {
        id: "gdp-intro",
        title: "Gross Domestic Product (GDP) Explained",
        duration: "11 mins",
        videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
        summary: "GDP is the total market value of all final goods and services produced within a country's borders in a given time period. It serves as a comprehensive scorecard of a country's economic health.",
        transcript: [
          { time: "00:00", text: "Welcome to Macroeconomics. Today we study the most watched economic metric: GDP." },
          { time: "02:00", text: "GDP stands for Gross Domestic Product. It focuses on production within national borders." },
          { time: "04:30", text: "The expenditure approach calculates GDP as Consumption + Investment + Government Spending + Net Exports." },
          { time: "07:10", text: "Nominal GDP uses current prices, while Real GDP adjusts for inflation to show true volume growth." },
          { time: "09:45", text: "Understanding GDP allows governments and central banks to adjust fiscal and monetary policies." }
        ],
        quiz: [
          {
            id: "q1",
            question: "Which formula represents the expenditure approach to calculating GDP?",
            options: ["GDP = C + I + G + NX", "GDP = C + S + T", "GDP = Wages + Rent + Interest + Profit", "GDP = Exports - Imports"],
            answer: 0,
            explanation: "The expenditure formula is GDP = Consumption (C) + Investment (I) + Government Spending (G) + Net Exports (NX, which is Exports - Imports)."
          },
          {
            id: "q2",
            question: "Why is Real GDP preferred over Nominal GDP when measuring economic growth over time?",
            options: [
              "Real GDP is easier to calculate.",
              "Real GDP includes transactions in the underground economy.",
              "Real GDP controls for changes in the price level (inflation).",
              "Nominal GDP only includes government spending."
            ],
            answer: 2,
            explanation: "By holding prices constant in a base year, Real GDP removes the distorting effects of inflation, isolating actual changes in production volume."
          }
        ]
      }
    ],
    flashcards: [
      { id: "fc1", term: "Gross Domestic Product (GDP)", definition: "The total value of goods produced and services provided in a country during one year." },
      { id: "fc2", term: "Inflation", definition: "A general increase in prices and fall in the purchasing value of money." },
      { id: "fc3", term: "Fiscal Policy", definition: "The use of government spending and taxation to influence the economy." },
      { id: "fc4", term: "Monetary Policy", definition: "The actions taken by a central bank (like the Federal Reserve) to control the money supply and interest rates." },
      { id: "fc5", term: "Aggregate Demand", definition: "The total demand for final goods and services in an economy at a given time and price level." }
    ]
  }
];

export const userStatsData = {
  name: "Alex Mercer",
  rank: "Scholar",
  xp: 1450,
  streak: 5,
  weeklyGoal: 4, // 4 hours
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
