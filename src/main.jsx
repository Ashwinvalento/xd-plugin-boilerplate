import './react-shim';
import React from 'react';
import { render } from 'react-dom';
import App from './HelloForm.jsx';

function main(selection,root) {
    let dialog;

    function getDialog() {
        if (dialog == null) {
            dialog = document.createElement('dialog');
            render(<App dialog={dialog} selection={selection} root={root}/>, dialog);
        }
        return dialog;
    }

    return document.body.appendChild(getDialog()).showModal();
}

export const commands = {
    myCommand: main
};