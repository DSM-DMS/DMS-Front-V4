export interface scheduleType {
  name: string;
  time: string | null;
  place: string | null;
}

export interface mealType {
  breakfast: string[];
  lunch: string[];
  dinner: string[];
}
