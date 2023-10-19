import React from 'react';
import type { ErrorInfo } from 'react';
import type { ErrorBoundaryProps } from './types';

interface State {
  hasError: boolean;
  error: Error | null;
  errorInfo: ErrorInfo | null;
}

export class ErrorBoundary extends React.Component<ErrorBoundaryProps, State> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error: Error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  // 当组件内部出现错误时调用此钩子函数
  componentDidCatch(error: Error, info: ErrorInfo) {
    // You can also log the error to an error reporting service
    // console.log(error, info);
  }

  render() {
    const { fallback, children } = this.props;
    const { hasError } = this.state;
    if (hasError) {
      return fallback || <h1>Something went wrong.</h1>;
    }
    return children;
  }
}
