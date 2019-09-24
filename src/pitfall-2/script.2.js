import React from "react";

function MyComponent() {
  function handleChange(e) {
    console.log(`wow the value is ${e.target.value}`);
  }

  return <AwesomeInput onChange={handleUpdate} />;
}
