import { configureStore } from "@reduxjs/toolkit";
import { useSelector, TypedUseSelectorHook } from "react-redux";
import { player } from "./slices/player";

// STORE: É o estado global da APP
export const store = configureStore({
  reducer: {
    player,
  },
});

// getState: Retorna TODO o ESTADO
export type RootState = ReturnType<typeof store.getState>;

// Recriando o useSelector para "useAppSelector", porém, com toda Tipagem
// Quando for usar o "useAppSelector" para buscar as informações, o mesmo vai
// reconhecer a tipagem do Estador (STORE)
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
