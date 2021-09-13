import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { MoralisProvider } from "react-moralis";

const appId = '7Ku6X8CPeLsTB1hNuxKbkK3zsNXRW9GrRid3wCnD';
const serverUrl = 'https://kp2g9eqiyitu.bigmoralis.com:2053/server';

ReactDOM.render(
  <React.StrictMode>
    <MoralisProvider appId={appId} serverUrl={serverUrl}>
      <App />
    </MoralisProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

