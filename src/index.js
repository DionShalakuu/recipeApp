import React from 'react';
import { createRoot } from 'react-dom/client';

// REDUX
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'
import {store, presisted} from './redux/store';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

// React 18 Render Method
const container = document.getElementById('root');
const root = createRoot(container); 
root.render(  
  <Provider store={store}>
   <PersistGate loading={null} persistor={presisted}>  
      <BrowserRouter>
        <App />
        </BrowserRouter>
   </PersistGate>
 </Provider>

);