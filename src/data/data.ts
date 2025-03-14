import { ITodo } from "../types/Todo";

const todos: ITodo[] = [
  {
    id: 1,
    title: "Clean the kitchen",
    description: "Wipe counters, clean the stove, and mop the floor",
    status: "pending",
    dueDate: "2025-03-01",
    priority: "medium",
    category: "Household",
    createdAt: "2025-02-24",
    updatedAt: "2025-02-24",
    isRecurring: true,
    tags: ["cleaning", "kitchen", "chores"],
    assignedTo: null,
    completionPercentage: 0,
    notes: ["Need to buy cleaning supplies before starting"],
    attachment: null,
  },
  {
    id: 2,
    title: "Check email",
    description: "Review important emails and respond to them",
    status: "in-progress",
    dueDate: "2025-02-26",
    priority: "low",
    category: "Work",
    createdAt: "2025-02-25",
    updatedAt: "2025-02-25",
    isRecurring: false,
    tags: ["email", "work", "communication"],
    assignedTo: null,
    completionPercentage: 50,
    notes: ["Mark emails as read and follow up with priority ones"],
    attachment: null,
  },
  {
    id: 3,
    title: "Attend yoga class",
    description: "Join the weekly yoga session at the community center",
    status: "pending",
    dueDate: "2025-03-05",
    priority: "low",
    category: "Health",
    createdAt: "2025-02-27",
    updatedAt: "2025-02-27",
    isRecurring: true,
    tags: ["exercise", "yoga", "health"],
    assignedTo: null,
    completionPercentage: 0,
    notes: ["Bring a yoga mat"],
    attachment: null,
  },
  {
    id: 4,
    title: "Fix the leaky faucet",
    description: "Repair the kitchen sink faucet that is leaking",
    status: "in-progress",
    dueDate: "2025-02-28",
    priority: "medium",
    category: "Household",
    createdAt: "2025-02-22",
    updatedAt: "2025-02-24",
    isRecurring: false,
    tags: ["plumbing", "maintenance", "household"],
    assignedTo: null,
    completionPercentage: 40,
    notes: ["Waiting for plumber’s tools"],
    attachment: null,
  },
  {
    id: 5,
    title: "Buy new shoes",
    description: "Purchase a new pair of running shoes for exercise",
    status: "pending",
    dueDate: "2025-03-10",
    priority: "medium",
    category: "Shopping",
    createdAt: "2025-02-26",
    updatedAt: "2025-02-26",
    isRecurring: false,
    tags: ["shopping", "shoes", "fitness"],
    assignedTo: null,
    completionPercentage: 0,
    notes: ["Look for discounts online before buying"],
    attachment: null,
  },
  {
    id: 6,
    title: "Complete Python tutorial",
    description: "Finish the free online Python tutorial for beginners",
    status: "in-progress",
    dueDate: "2025-03-15",
    priority: "high",
    category: "Education",
    createdAt: "2025-02-20",
    updatedAt: "2025-02-22",
    isRecurring: false,
    tags: ["coding", "Python", "tutorial"],
    assignedTo: null,
    completionPercentage: 70,
    notes: ["Review practice exercises and submit them"],
    attachment: null,
  },
  {
    id: 7,
    title: "Visit the dentist",
    description: "Annual checkup and cleaning at the dentist’s office",
    status: "pending",
    dueDate: "2025-03-18",
    priority: "high",
    category: "Health",
    createdAt: "2025-02-15",
    updatedAt: "2025-02-15",
    isRecurring: true,
    tags: ["health", "dentist", "checkup"],
    assignedTo: null,
    completionPercentage: 0,
    notes: ["Make sure to brush before appointment"],
    attachment: null,
  },
  {
    id: 8,
    title: "Prepare project presentation",
    description:
      "Design and prepare the PowerPoint for the upcoming project meeting",
    status: "pending",
    dueDate: "2025-03-02",
    priority: "high",
    category: "Work",
    createdAt: "2025-02-28",
    updatedAt: "2025-02-28",
    isRecurring: false,
    tags: ["work", "presentation", "project"],
    assignedTo: null,
    completionPercentage: 20,
    notes: ["Include graphs and data visuals"],
    attachment: null,
  },
  {
    id: 9,
    title: "Buy birthday gift",
    description: "Get a birthday gift for best friend",
    status: "pending",
    dueDate: "2025-03-08",
    priority: "low",
    category: "Personal",
    createdAt: "2025-02-22",
    updatedAt: "2025-02-22",
    isRecurring: false,
    tags: ["gift", "birthday", "personal"],
    assignedTo: null,
    completionPercentage: 0,
    notes: ["Check wishlist for gift ideas"],
    attachment: null,
  },
  {
    id: 10,
    title: "Study for final exams",
    description: "Review all subjects for the final exam",
    status: "pending",
    dueDate: "2025-03-12",
    priority: "high",
    category: "Education",
    createdAt: "2025-02-18",
    updatedAt: "2025-02-18",
    isRecurring: false,
    tags: ["studying", "exams", "education"],
    assignedTo: null,
    completionPercentage: 0,
    notes: ["Create a study schedule"],
    attachment: null,
  },
  {
    id: 11,
    title: "Buy concert tickets",
    description: "Purchase tickets for the upcoming concert",
    status: "pending",
    dueDate: "2025-03-06",
    priority: "medium",
    category: "Leisure",
    createdAt: "2025-02-21",
    updatedAt: "2025-02-21",
    isRecurring: false,
    tags: ["leisure", "music", "tickets"],
    assignedTo: null,
    completionPercentage: 0,
    notes: ["Check availability on ticket platform"],
    attachment: null,
  },
  {
    id: 12,
    title: "Buy laptop stand",
    description: "Get a portable laptop stand for working from home",
    status: "completed",
    dueDate: "2025-02-23",
    priority: "medium",
    category: "Shopping",
    createdAt: "2025-02-20",
    updatedAt: "2025-02-22",
    isRecurring: false,
    tags: ["shopping", "home office", "work"],
    assignedTo: null,
    completionPercentage: 100,
    notes: ["Ordered online, arriving tomorrow"],
    attachment: null,
  },
  {
    id: 13,
    title: "Schedule car maintenance",
    description: "Book an appointment for oil change and tire check",
    status: "pending",
    dueDate: "2025-03-15",
    priority: "high",
    category: "Vehicle",
    createdAt: "2025-02-28",
    updatedAt: "2025-02-28",
    isRecurring: true,
    tags: ["car", "maintenance", "oil change"],
    assignedTo: null,
    completionPercentage: 0,
    notes: ["Look for service discounts"],
    attachment: null,
  },
  {
    id: 14,
    title: "Write blog post on TypeScript",
    description: "Draft and publish an article about advanced TypeScript tips",
    status: "in-progress",
    dueDate: "2025-03-05",
    priority: "medium",
    category: "Work",
    createdAt: "2025-02-25",
    updatedAt: "2025-02-26",
    isRecurring: false,
    tags: ["blogging", "TypeScript", "development"],
    assignedTo: null,
    completionPercentage: 30,
    notes: ["Research the latest TypeScript updates"],
    attachment: null,
  },
  {
    id: 15,
    title: "Read 'Atomic Habits'",
    description: "Finish reading 'Atomic Habits' by James Clear",
    status: "pending",
    dueDate: "2025-03-20",
    priority: "low",
    category: "Personal Development",
    createdAt: "2025-02-22",
    updatedAt: "2025-02-22",
    isRecurring: false,
    tags: ["reading", "habits", "self-improvement"],
    assignedTo: null,
    completionPercentage: 0,
    notes: ["Read 10 pages daily"],
    attachment: null,
  },
  {
    id: 16,
    title: "Update LinkedIn profile",
    description: "Revise work experience and add new certifications",
    status: "pending",
    dueDate: "2025-03-10",
    priority: "medium",
    category: "Work",
    createdAt: "2025-02-20",
    updatedAt: "2025-02-20",
    isRecurring: false,
    tags: ["career", "LinkedIn", "profile update"],
    assignedTo: null,
    completionPercentage: 0,
    notes: ["Include recent project details"],
    attachment: null,
  },
  {
    id: 17,
    title: "Grocery shopping",
    description: "Buy vegetables, dairy, and snacks for the week",
    status: "completed",
    dueDate: "2025-02-24",
    priority: "high",
    category: "Shopping",
    createdAt: "2025-02-23",
    updatedAt: "2025-02-24",
    isRecurring: true,
    tags: ["shopping", "groceries", "weekly"],
    assignedTo: null,
    completionPercentage: 100,
    notes: ["Check for offers before purchasing"],
    attachment: null,
  },
  {
    id: 18,
    title: "Plan weekend trip",
    description: "Decide on a destination and book a hotel",
    status: "pending",
    dueDate: "2025-03-07",
    priority: "medium",
    category: "Leisure",
    createdAt: "2025-02-21",
    updatedAt: "2025-02-21",
    isRecurring: false,
    tags: ["travel", "trip", "weekend"],
    assignedTo: null,
    completionPercentage: 0,
    notes: ["Look for budget-friendly stays"],
    attachment: null,
  },
  {
    id: 19,
    title: "Enroll in an online course",
    description: "Sign up for a full-stack development course",
    status: "pending",
    dueDate: "2025-03-15",
    priority: "high",
    category: "Education",
    createdAt: "2025-02-22",
    updatedAt: "2025-02-22",
    isRecurring: false,
    tags: ["learning", "web development", "education"],
    assignedTo: null,
    completionPercentage: 0,
    notes: ["Compare courses on Udemy and Coursera"],
    attachment: null,
  },
  {
    id: 20,
    title: "Workout session",
    description: "Do 30 minutes of cardio and strength training",
    status: "in-progress",
    dueDate: "2025-02-27",
    priority: "high",
    category: "Health",
    createdAt: "2025-02-25",
    updatedAt: "2025-02-25",
    isRecurring: true,
    tags: ["fitness", "exercise", "workout"],
    assignedTo: null,
    completionPercentage: 60,
    notes: ["Try a new HIIT routine"],
    attachment: null,
  },
  {
    id: 21,
    title: "Fix website bugs",
    description: "Resolve layout issues on the home page",
    status: "in-progress",
    dueDate: "2025-02-28",
    priority: "high",
    category: "Work",
    createdAt: "2025-02-26",
    updatedAt: "2025-02-26",
    isRecurring: false,
    tags: ["development", "bug fixing", "website"],
    assignedTo: null,
    completionPercentage: 20,
    notes: ["Check console errors before debugging"],
    attachment: "screenshot_issue.jpg",
  },
  {
    id: 22,
    title: "File tax return",
    description: "Gather documents and file annual tax return",
    status: "pending",
    dueDate: "2025-04-15",
    priority: "high",
    category: "Finance",
    createdAt: "2025-02-28",
    updatedAt: "2025-02-28",
    isRecurring: true,
    tags: ["finance", "taxes", "deadline"],
    assignedTo: null,
    completionPercentage: 0,
    notes: ["Consult an accountant if needed"],
    attachment: "tax_documents.pdf",
  },
  {
    id: 23,
    title: "Meal prep for the week",
    description: "Cook and store meals for the week ahead",
    status: "pending",
    dueDate: "2025-03-03",
    priority: "medium",
    category: "Health",
    createdAt: "2025-02-25",
    updatedAt: "2025-02-25",
    isRecurring: true,
    tags: ["meal prep", "cooking", "healthy eating"],
    assignedTo: null,
    completionPercentage: 0,
    notes: ["Include protein-rich meals"],
    attachment: null,
  },
  {
    id: 24,
    title: "Organize closet",
    description: "Sort and donate old clothes",
    status: "pending",
    dueDate: "2025-03-12",
    priority: "low",
    category: "Household",
    createdAt: "2025-02-22",
    updatedAt: "2025-02-22",
    isRecurring: false,
    tags: ["organization", "decluttering", "household"],
    assignedTo: null,
    completionPercentage: 0,
    notes: ["Drop off donations at a local charity"],
    attachment: null,
  },
  {
    id: 25,
    title: "Pay utility bills",
    description: "Settle electricity and water bills",
    status: "pending",
    dueDate: "2025-03-06",
    priority: "high",
    category: "Finance",
    createdAt: "2025-02-26",
    updatedAt: "2025-02-26",
    isRecurring: true,
    tags: ["finance", "bills", "payments"],
    assignedTo: null,
    completionPercentage: 0,
    notes: ["Check if any discounts apply"],
    attachment: null,
  },
  {
    id: 26,
    title: "Complete Python basics course",
    description: "Finish the online Python beginner course on Udemy",
    status: "in-progress",
    dueDate: "2025-03-10",
    priority: "high",
    category: "Education",
    createdAt: "2025-02-28",
    updatedAt: "2025-02-28",
    isRecurring: false,
    tags: ["Python", "learning", "programming"],
    assignedTo: null,
    completionPercentage: 50,
    notes: ["Focus on data structures and functions"],
    attachment: null,
  },
  {
    id: 27,
    title: "Build a small project in JavaScript",
    description: "Create a to-do list app using vanilla JavaScript",
    status: "pending",
    dueDate: "2025-03-15",
    priority: "medium",
    category: "Development",
    createdAt: "2025-02-28",
    updatedAt: "2025-02-28",
    isRecurring: false,
    tags: ["JavaScript", "project", "learning"],
    assignedTo: null,
    completionPercentage: 0,
    notes: ["Use localStorage for persistence"],
    attachment: null,
  },
  {
    id: 28,
    title: "Learn TypeScript fundamentals",
    description: "Go through TypeScript documentation and practice examples",
    status: "in-progress",
    dueDate: "2025-03-20",
    priority: "high",
    category: "Education",
    createdAt: "2025-02-28",
    updatedAt: "2025-02-28",
    isRecurring: false,
    tags: ["TypeScript", "learning", "frontend"],
    assignedTo: null,
    completionPercentage: 30,
    notes: ["Focus on interfaces and generics"],
    attachment: null,
  },
  {
    id: 29,
    title: "Practice SQL queries",
    description: "Solve 20 SQL problems on LeetCode",
    status: "pending",
    dueDate: "2025-03-18",
    priority: "high",
    category: "Database",
    createdAt: "2025-02-28",
    updatedAt: "2025-02-28",
    isRecurring: false,
    tags: ["SQL", "databases", "LeetCode"],
    assignedTo: null,
    completionPercentage: 0,
    notes: ["Focus on JOINs and subqueries"],
    attachment: null,
  },
  {
    id: 30,
    title: "Build a REST API in Node.js",
    description: "Create a simple CRUD API using Express and MongoDB",
    status: "pending",
    dueDate: "2025-03-25",
    priority: "high",
    category: "Backend",
    createdAt: "2025-02-28",
    updatedAt: "2025-02-28",
    isRecurring: false,
    tags: ["Node.js", "backend", "API"],
    assignedTo: null,
    completionPercentage: 0,
    notes: ["Use Postman for testing"],
    attachment: null,
  },
  {
    id: 31,
    title: "Explore Rust programming language",
    description: "Go through Rust book and write small programs",
    status: "pending",
    dueDate: "2025-03-30",
    priority: "medium",
    category: "Education",
    createdAt: "2025-02-28",
    updatedAt: "2025-02-28",
    isRecurring: false,
    tags: ["Rust", "systems programming", "learning"],
    assignedTo: null,
    completionPercentage: 0,
    notes: ["Focus on memory management concepts"],
    attachment: null,
  },
  {
    id: 32,
    title: "Learn Go concurrency",
    description: "Study goroutines and channels in Golang",
    status: "pending",
    dueDate: "2025-03-22",
    priority: "medium",
    category: "Backend",
    createdAt: "2025-02-28",
    updatedAt: "2025-02-28",
    isRecurring: false,
    tags: ["Go", "concurrency", "backend"],
    assignedTo: null,
    completionPercentage: 0,
    notes: ["Write a concurrent downloader as a practice project"],
    attachment: null,
  },
  {
    id: 33,
    title: "Create a React.js portfolio website",
    description: "Develop a personal portfolio using React and Tailwind CSS",
    status: "in-progress",
    dueDate: "2025-03-12",
    priority: "high",
    category: "Frontend",
    createdAt: "2025-02-28",
    updatedAt: "2025-02-28",
    isRecurring: false,
    tags: ["React.js", "frontend", "portfolio"],
    assignedTo: null,
    completionPercentage: 20,
    notes: ["Use Next.js if time permits"],
    attachment: null,
  },
  {
    id: 34,
    title: "Learn Django framework",
    description: "Build a small blog app using Django and SQLite",
    status: "pending",
    dueDate: "2025-03-28",
    priority: "medium",
    category: "Backend",
    createdAt: "2025-02-28",
    updatedAt: "2025-02-28",
    isRecurring: false,
    tags: ["Django", "Python", "backend"],
    assignedTo: null,
    completionPercentage: 0,
    notes: ["Follow the Django official tutorial"],
    attachment: null,
  },
  {
    id: 35,
    title: "Solve 5 algorithm problems in C++",
    description: "Practice data structures and algorithms using C++",
    status: "pending",
    dueDate: "2025-03-14",
    priority: "high",
    category: "Coding Practice",
    createdAt: "2025-02-28",
    updatedAt: "2025-02-28",
    isRecurring: true,
    tags: ["C++", "DSA", "competitive coding"],
    assignedTo: null,
    completionPercentage: 0,
    notes: ["Focus on dynamic programming"],
    attachment: null,
  },
];

export default todos;
