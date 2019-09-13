import React from "react";

function Input() {
  function handleChange(e) {
    console.log(`wow the value is ${e.target.value}`);
  }

  return <input onChange={handleUpdate} />;
}
