import React from "react";
import { GameSection } from "../components/layout/GameSection";
import GameOptionsSection from "../components/layout/GameOptionsSection";
import { create } from "zustand";

export const allAppStates = create((set, get) => ({
  numSelected: null,
  currentMistakes: 0,
  currentDiff: "easy",
  isPaused: false,
  isCompleted: false,
  currentTime: 0,
  setIsCompleted: () => set((state) => ({ isComplted: !state.isCompleted })),
  increaseMistakes: () =>
    set((state) => ({ currentMistakes: state.currentMistakes + 1 })),
  selectDiff: (diff) => set((state) => ({ currentDiff: diff })),
  numSelectedState: () => get().numSelected,
  changeNumSelected: (number) => set((state) => ({ numSelected: number })),
  changeIsPaused: () => set((state) => ({ isPaused: !state.isPaused })),
  setIsCompleted: () => set((state) => ({ isCompleted: !state.isCompleted })),
  incrementCurrentTime: (time) => set((state) => ({ currentTime: time })),
}));

const Home = () => {
  return (
    <>
      <div className="container">
        <GameSection />
        <GameOptionsSection />
      </div>
    </>
  );
};

export default Home;
