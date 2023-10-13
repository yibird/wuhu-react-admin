import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'virtual:uno.css';
import '@/styles/index.css';
import 'remixicon/fonts/remixicon.css';

function bootstrap(el: HTMLElement | null, children: React.ReactNode) {
  if (!el) return;
  ReactDOM.createRoot(el).render(children);
}
bootstrap(document.getElementById('root'), <App />);

// function addStyle(styleStr = ';', className = '') {
//   const style = document.createElement('style');
//   style.className = 'xxx-red';
//   const styleStrs = '.ant-btn .ant-btn-icon {display:none!important}';
//   style.appendChild(document.createTextNode(styleStrs));
//   const head = document.getElementsByTagName('head')[0];
//   head.appendChild(style);
//   console.log('head', head.querySelector('.xxx-red'));
// }
// addStyle();
// requestAnimationFrame(() => {
//   let el: any = document.querySelector('.xxx-red');
//   console.log('el:', el);
//   el?.parentNode.removeChild(el);
// });
