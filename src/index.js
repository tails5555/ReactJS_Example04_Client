import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ApplicationRoot from './ApplicationRoot';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<ApplicationRoot />, document.getElementById('root'));
registerServiceWorker();
