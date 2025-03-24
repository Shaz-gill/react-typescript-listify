import { ITask } from "../types/Task";

const tasks: ITask[] = [
  {
    id: 1,
    title: "Clean the kitchen",
    description: "Wipe counters, clean the stove, and mop the floor",
    status: "pending",
    dueDate: new Date(),
    priority: "medium",
    category: "Household",
    createdAt: new Date(),
    updatedAt: new Date(),
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
    dueDate: new Date(),
    priority: "low",
    category: "Work",
    createdAt: new Date(),
    updatedAt: new Date(),
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
    dueDate: new Date(),
    priority: "low",
    category: "Health",
    createdAt: new Date(),
    updatedAt: new Date(),
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
    dueDate: new Date(),
    priority: "medium",
    category: "Household",
    createdAt: new Date(),
    updatedAt: new Date(),
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
    dueDate: new Date(),
    priority: "medium",
    category: "Shopping",
    createdAt: new Date(),
    updatedAt: new Date(),
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
    dueDate: new Date(),
    priority: "high",
    category: "Education",
    createdAt: new Date(),
    updatedAt: new Date(),
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
    dueDate: new Date(),
    priority: "high",
    category: "Health",
    createdAt: new Date(),
    updatedAt: new Date(),
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
    dueDate: new Date(),
    priority: "high",
    category: "Work",
    createdAt: new Date(),
    updatedAt: new Date(),
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
    dueDate: new Date(),
    priority: "low",
    category: "Personal",
    createdAt: new Date(),
    updatedAt: new Date(),
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
    dueDate: new Date(),
    priority: "high",
    category: "Education",
    createdAt: new Date(),
    updatedAt: new Date(),
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
    dueDate: new Date(),
    priority: "medium",
    category: "Leisure",
    createdAt: new Date(),
    updatedAt: new Date(),
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
    dueDate: new Date(),
    priority: "medium",
    category: "Shopping",
    createdAt: new Date(),
    updatedAt: new Date(),
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
    dueDate: new Date(),
    priority: "high",
    category: "Vehicle",
    createdAt: new Date(),
    updatedAt: new Date(),
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
    dueDate: new Date(),
    priority: "medium",
    category: "Work",
    createdAt: new Date(),
    updatedAt: new Date(),
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
    dueDate: new Date(),
    priority: "low",
    category: "Personal Development",
    createdAt: new Date(),
    updatedAt: new Date(),
    isRecurring: false,
    tags: ["reading", "habits", "self-improvement"],
    assignedTo: null,
    completionPercentage: 0,
    notes: ["Read 10 pages daily"],
    attachment: null,
  },
];

export default tasks;
