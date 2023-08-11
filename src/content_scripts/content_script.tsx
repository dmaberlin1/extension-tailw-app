import React from 'react';
import Button from "../components/Button";
import ReactDOM from "react-dom/client";

const ContentScript = () => {
    return (
        <div className={'flex'}>
            <header>
                <h1>ContentScript</h1>
                <Button>btn one</Button>
            </header>
        </div>
    );
};

const index = document.createElement('div')
index.id='content-script'
document.body.appendChild(index)

ReactDOM.createRoot(index).render(
    <React.StrictMode>
        <ContentScript/>
    </React.StrictMode>
)
