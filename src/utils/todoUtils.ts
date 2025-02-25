import { ITodo } from "../types/Todo";

export const headers: { key: keyof ITodo; label: string }[] = [
  { key: "id", label: "ID" },
  { key: "title", label: "Title" },
  { key: "description", label: "description" },
  { key: "status", label: "Status" },
  { key: "dueDate", label: "Due Date" },
  { key: "priority", label: "Priority" },
  { key: "category", label: "Category" },
];
