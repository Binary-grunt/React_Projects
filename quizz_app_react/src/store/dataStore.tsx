// store/dataStore.ts
import {create} from 'zustand';
import jsonData from '../../data.json';

type Quiz = {
    title: string;
    icon: string;
    questions: Question[];
};

type Question = {
    question: string;
    options: string[];
    answer: string;
};

type DataState = {
    quizzes: Quiz[];
    setQuizzes: (newQuizzes: Quiz[]) => void;
};

export const useDataStore = create<DataState>((set) => ({
    quizzes: jsonData.quizzes,
    setQuizzes: (newQuizzes) => set({ quizzes: newQuizzes })
}));
