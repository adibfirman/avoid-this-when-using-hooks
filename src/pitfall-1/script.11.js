function HookComponent() {
  // use React.useRef for instance variable

  React.useEffect(() => {
    // it's like a CDM

    return function cleanUp() {
      // just return a func to cleanup prev side-effect
    };
  }, []);

  React.useEffect(() => {
    // it's like a CDU, this side effect will re-run
    // every component re-render
  });

  React.useEffect(() => {
    // it's like a CDU, but this side effect will re-run
    // when second arguments has changed
  }, [any, ofThese, change]);

  return; // awesome component
}
