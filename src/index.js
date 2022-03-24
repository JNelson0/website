import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { TerminalContextProvider } from "react-terminal";

ReactDOM.render(
    <React.StrictMode>
        <TerminalContextProvider>
            <App />
        </TerminalContextProvider>
    </React.StrictMode>,
    document.getElementById("root")
);
