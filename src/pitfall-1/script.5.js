import React from 'react'

function HookComponent() {
  React.useEffect(() => {
    return function cleanUp() { ... }
  }, [])

  React.useEffect(() => { ... }, [when, any, ofThese, change])

  React.useEffect(() => { ... })
}
