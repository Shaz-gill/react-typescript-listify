export interface ITodo {
  id: number;
  title: string;
  description: string;
  status: "pending" | "in-progress" | "completed";
  dueDate: string;
  priority: "low" | "medium" | "high";
  category: string;
  createdAt: string;
  updatedAt: string;
  isRecurring: boolean;
  tags: string[];
}
