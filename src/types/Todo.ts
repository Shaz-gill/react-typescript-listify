type ITodoLabel = {
  title_description?: string;
};

export type ITodo = {
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
  assignedTo?: number | null;
  completionPercentage?: number;
  notes?: string[];
  attachment?: string | null;
} & ITodoLabel;
