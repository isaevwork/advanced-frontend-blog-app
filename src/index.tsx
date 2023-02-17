import App from "./app/App";

import {render} from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import {VariantProvider} from "app/providers/VariantProvider";

import "shared/config/i18n/i18n";

render(
    <BrowserRouter>
        <VariantProvider>
            <App/>
        </VariantProvider>
    </BrowserRouter>,
    document.getElementById('root')
)