import React from "react";

function Input() {
  const [value, setValue] = React.useState();
  const handleUpdate = React.useCallback(e => {
    setValue(e.target.value);
  }, []);

  return <input value={value} onChange={handleUpdate} />;
}
