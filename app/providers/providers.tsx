"use client";

import { PropsWithChildren } from "react";
import { SnackbarProvider } from "notistack";
import ReduxProvider from "./redux-provider";

const Providers = ({ children }: PropsWithChildren) => (
  <ReduxProvider>
    <SnackbarProvider
      anchorOrigin={{ horizontal: "center", vertical: "bottom" }}
    >
      {children}
    </SnackbarProvider>
  </ReduxProvider>
);

export default Providers;
