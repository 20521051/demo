import React, { Component, ErrorInfo, ReactNode } from "react";
import ErrorLayout from "../../layouts/ErrorLayout/ErrorLayout";
interface Props {
  children?: ReactNode;
}

interface State {
  hasError: boolean;
}

export default class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
  };

  public static getDerivedStateFromError(error: Error): State {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // You can also log the error to an error reporting service
    console.error("Uncaught error: ", error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        <React.Fragment>
          <p className="">Oops... There has been an error!</p>
          <ErrorLayout></ErrorLayout>
        </React.Fragment>
      );
    }
    return this.props.children;
  }
}
