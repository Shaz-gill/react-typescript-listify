import { ITask } from "../types/Task";

export const headers: {
  key: keyof ITask;
  label: string;
}[] = [
  { key: "title_description", label: "Title / Description" },
  { key: "status", label: "Status" },
  { key: "dueDate", label: "Due Date" },
  { key: "priority", label: "Priority" },
  { key: "category", label: "Category" },
];
