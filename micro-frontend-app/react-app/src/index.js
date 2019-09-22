import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

class AppReact extends HTMLElement {
	  connectedCallback() {
			    const mountPoint = document.createElement('span');
			    this.attachShadow({ mode: 'open' }).appendChild(mountPoint);

					ReactDOM.render(<App />, mountPoint)
			  }
}
customElements.define('app-react', AppReact);
