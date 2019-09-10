import React from "react";

class LifecycleComponent extends React.Component {
  constructor() {
    // initialize component instance
  }
  componentDidMount() {
    // run this code when the component is first added to the page
  }
  componentDidUpdate(prevProps, prevState) {
    // run this code when the component is updated on the page
  }
  componentWillUnmount() {
    // run this code when the component is removed from the page
  }
  render() {
    // call me anytime you need some react elements...
  }
}

export default LifecycleComponent;
