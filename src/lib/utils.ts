import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const BASE_URL = `http://127.0.0.1:8090/api/collections/notes/records`;

export const colorPickerColors = [
  "#FAAFA8",
  "#F7D4C7",
  "#FFF8B8",
  "#E2F6D3",
  "#B4DDD3",
  "#D4E4ED",
];
