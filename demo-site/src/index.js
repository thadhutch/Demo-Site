import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { MoralisProvider } from "react-moralis";

const appId = 'mQR7k1NobAMkMfqKdgIQowcepJpSPcOTCNn2Ds8f';
const serverUrl = 'https://4nunoqoexvrk.usemoralis.com:2053/server';

ReactDOM.render(
  <React.StrictMode>
    <MoralisProvider appId={appId} serverUrl={serverUrl}>
      <App />
    </MoralisProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

