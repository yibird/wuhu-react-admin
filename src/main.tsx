import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '@/pages/app';
import '@/styles';

function bootstrap(el: HTMLElement | null, children: React.ReactNode) {
  if (!el) return;
  ReactDOM.createRoot(el).render(children);
}
const el = document.getElementById('root');
bootstrap(el, <App />);
