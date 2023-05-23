import React, { PropsWithChildren } from "react";

interface Props {
  fallback?: React.ReactNode;
}

interface State {
  hasError: boolean;
}

export default class ErrorBoundary extends React.Component<
  PropsWithChildren<Props>,
  State
> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: any) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error: any, info: any) {
    // You can also log the error to an error reporting service
    console.log(error, info);
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
