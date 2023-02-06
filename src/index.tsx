import App from "./app/App";

import {render} from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import ThemeProvider from "./app/providers/ThemeProvider/ui/ThemeProvider";


render(
    <BrowserRouter>
        <ThemeProvider>
            <App/>
        </ThemeProvider>
    </BrowserRouter>,
    document.getElementById('root')
)