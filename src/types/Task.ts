type ITaskLabel = {
  title_description?: string;
};

export type ITask = {
  id: number;
  title: string;
  description: string;
  status: "pending" | "in-progress" | "completed";
  dueDate: Date;
  priority: "low" | "medium" | "high";
  category: string;
  createdAt: Date;
  updatedAt: Date;
  isRecurring: boolean;
  tags: string[];
  assignedTo?: number | null;
  completionPercentage?: number;
  notes?: string[];
  attachment?: string | null;
} & ITaskLabel;
