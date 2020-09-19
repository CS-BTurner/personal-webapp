import React from 'react';
import ReactDOM from 'react-dom';

import App from './app';

export function reactInit(container: HTMLElement) {
  ReactDOM.render(<App />, container);
}
