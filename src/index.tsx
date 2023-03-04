import App from "./app/App";

import {render} from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import {VariantProvider} from "app/providers/VariantProvider";
import { ErrorBoundary } from "app/providers/ErrorBoundary";

import "shared/config/i18n/i18n";

render(
    <BrowserRouter>
        <ErrorBoundary>
            <VariantProvider>
                <App/>
            </VariantProvider>
        </ErrorBoundary>
    </BrowserRouter>,
    document.getElementById('root')
)