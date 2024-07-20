"use client";
import { store } from "@/lib/store";
import { PropsWithChildren } from "react";
import { Provider } from "react-redux";

const ReduxProvider = ({ children }: PropsWithChildren) => (
  <Provider store={store}>{children}</Provider>
);

export default ReduxProvider;
