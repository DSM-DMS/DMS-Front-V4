export interface scheduleType {
  schedule: {
    name: string;
    time: string;
    place: string;
  }[];
}

export interface mealType {
  breakfast: string[];
  lunch: string[];
  dinner: string[];
}
