import { StrictMode } from 'react'; //* Dúvida!
import { createRoot } from 'react-dom/client'; //* Dúvida!
//import React from 'react'; => Dúvida!
//import ReactDOM from 'react-dom/client'; => Dúvida!
import GlobalStyles from './styles/global'; //* Pq não 'createGlobalStyles' aqui, é pq não é uma importação default?
import { ThemeProvider } from 'styled-components';
import theme from './styles/theme.js';
import { Routes } from './routes';

createRoot(document.getElementById('root')).render(
<StrictMode>
    <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Routes />
    </ThemeProvider>
</StrictMode>
)

//* "ReactDOM".createRoot(document.getElementById('root')).render(...) => ?
//* <"React."StrictMode> ... </"React."StrictMode> => ?