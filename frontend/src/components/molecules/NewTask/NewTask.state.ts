import { create } from 'zustand';
import type { NewTaskState } from './NewTaskModal.types';

export const useAddNewTask = create<NewTaskState>((set) => ({
  modalOpen: false,
  showAddNewTaskModal: () => set({ modalOpen: true }),
  closeAddNewTaskModal: () => set({ modalOpen: false }),
}));