import ReactDOM from 'react-dom';
import App from './App';
import { Provider as StyletronProvider, DebugEngine } from "styletron-react";
import { Client as Styletron } from "styletron-engine-atomic";
import { ThemeProvider, StyleReset } from 'atomize';
import { BrowserRouter } from "react-router-dom";



const debug =
  process.env.NODE_ENV === "production" ? void 0 : new DebugEngine();

// 1. Create a client engine instance
const engine = new Styletron();

const theme = {
  colors: {
    primary: 'white',
    environment: '#68d391',
    givingback: '#f687b3',
    safety: '#f6e05e',
    accent: 'yellow',
  },
  fontFamily: {
    primary: "monospace",
  }
};

ReactDOM.render(
  <BrowserRouter>
  <StyletronProvider value={engine} debug={debug} debugAfterHydration>
    <ThemeProvider theme={theme}>
    <StyleReset/>
    <App />
    </ThemeProvider>
  </StyletronProvider>
  </BrowserRouter>,
  document.getElementById('root'),
);
