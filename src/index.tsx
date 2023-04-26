import App from "./app/App";

import {render} from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import {VariantProvider} from "app/providers/VariantProvider";
import {StoreProvider} from "app/providers/StoreProvider";
import { ErrorBoundary } from "app/providers/ErrorBoundary";

import 'app/styles/index.scss'
import "shared/config/i18n/i18n";

render(
    <StoreProvider>
        <BrowserRouter>
            <ErrorBoundary>
                <VariantProvider>
                    <App/>
                </VariantProvider>
            </ErrorBoundary>
        </BrowserRouter>
    </StoreProvider>,
    document.getElementById('root')
)