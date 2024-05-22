interface LoadScriptOptions {
  url: string;
  id: string;
  appendPosition?: 'header' | 'footer';
}

// 加载样式脚本
export function loadLinkScript(options: LoadScriptOptions) {
  options = {
    appendPosition: 'footer',
    ...options,
  };
  const link = (document.getElementById(options.id) ||
    document.createElement('link')) as HTMLLinkElement;
  link.rel = 'stylesheet';
  link.href = options.url;
  link.id = options.id;
  if (options.appendPosition === 'header') {
    document.head.insertBefore(link, document.head.firstChild);
  } else {
    document.head.appendChild(link);
  }
}
