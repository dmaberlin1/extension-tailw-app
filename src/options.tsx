import React from 'react';
import Button from "./components/Button.tsx";
import ReactDOM from "react-dom/client";

const Options = () => {
    console.log('this is options page');
    return (
        <div className={'flex'}>
            <header className={'flex'}>
                <h1 className={'capitalize'}>Title of Options</h1>
                <Button>button options</Button>
            </header>
        </div>
    );
};

const index=document.createElement('div')
index.id="options";
document.body.appendChild(index);

ReactDOM.createRoot(index).render(
    <React.StrictMode>
        <Options/>
    </React.StrictMode>
)