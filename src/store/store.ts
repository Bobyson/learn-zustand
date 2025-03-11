import { create } from "zustand";

export interface Habit {
  id: string;
  name: string;
  frequency: "daily" | "weekly";
  completedDates: string[];
  createdAt: string;
}

interface habitStore {
  habits: Habit[];
  addHabit: (name: string, frequency: "daily" | "weekly") => void;
}

const useHabitStore = create<habitStore>()((set) => {
  return {
    habits: [],
    addHabit: (name, frequency) =>
      set((state) => {
        return {
          habits: [
            ...state.habits,
            {
              id: Date.now().toString(),
              name,
              frequency,
              completedDates: [],
              createdAt: new Date().toISOString(),
            },
          ],
        };
      }),
  };
});

export default useHabitStore;
