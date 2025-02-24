import { create } from "zustand";
import { persist } from "zustand/middleware";

interface BearState {
  open: boolean;
  setOpen: (open: boolean) => void;
}

export const useWidgetStore = create<BearState>()(
  persist(
    (set) => ({
      open: false,
      setOpen: (open) => set(() => ({ open })),
    }),
    {
      name: "widget-storage",
    }
  )
);
