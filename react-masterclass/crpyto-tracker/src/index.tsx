import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { QueryClient, QueryClientProvider } from "react-query"
import { ThemeProvider } from "styled-components";
import { theme } from "./theme";

const queryClient = new QueryClient() // 다른 컴포넌트에서 사용할 수 있도록 props(client)로 넘김

ReactDOM.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById("root")
);