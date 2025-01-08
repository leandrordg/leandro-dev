import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatRepositoryName(name: string) {
  // first letter of each word to uppercase
  name = name.replace(/\b\w/g, (char) => char.toUpperCase());

  // replace hyphens with spaces
  name = name.replace(/-/g, " ");

  return name;
}

export function getAge(fullBirthDate: string) {
  const [day, month, year] = fullBirthDate.split("-").map(Number); // 00-00-0000
  const birthDate = new Date(year, month - 1, day);
  const now = new Date();

  let age = now.getFullYear() - birthDate.getFullYear();
  const monthDiff = now.getMonth() - birthDate.getMonth();
  const dayDiff = now.getDate() - birthDate.getDate();

  if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
    age--;
  }

  return age;
}
