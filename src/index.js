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
    primary: 'tomato',
    accent: 'yellow',
  },
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
