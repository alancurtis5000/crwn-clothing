import React from "react";
import {
  ErrorImageOverlay,
  ErrorImageContainer,
  ErrorImageText,
} from "./error-boundary.styles";
import somethingWentWrongImage from "../../assets/something-went-wrong.png";

class ErrorBoundary extends React.Component {
  constructor() {
    super();
    this.state = {
      hasErrored: false,
    };
  }
  // static lifecycle method
  static getDerivedStateFromError(error) {
    // process the error
    return { hasErrored: true };
  }
  // lifecycle method did catch error
  componentDidCatch(error, info) {
    console.log(error, info);
  }

  render() {
    if (this.state.hasErrored) {
      return (
        <ErrorImageOverlay>
          <ErrorImageContainer imageUrl={somethingWentWrongImage} />
          <ErrorImageText> Sorry this page is broken </ErrorImageText>
        </ErrorImageOverlay>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
