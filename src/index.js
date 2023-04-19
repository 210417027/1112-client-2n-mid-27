import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App_27 from './App_27';

import { DemoProvider_27 } from './context/DemoContext_27';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <DemoProvider_27>
      <App_27 />
    </DemoProvider_27>
  </React.StrictMode>
);

