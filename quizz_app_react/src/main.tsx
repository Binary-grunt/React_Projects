import React from 'react'
import ReactDOM from 'react-dom/client'
import {App} from './App.tsx'
import './index.css'
import {DevSupport} from "@react-buddy/ide-toolbox";
import {ComponentPreviews, useInitial} from "./dev";
import {BackGroundIcon} from "./themes/BackGroundIcon.tsx";

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <DevSupport ComponentPreviews={ComponentPreviews}
                    useInitialHook={useInitial}
        >
            <BackGroundIcon>
                <App/>
            </BackGroundIcon>
        </DevSupport>
    </React.StrictMode>,
)
