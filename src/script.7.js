// ------------
// The first render of our component it's still work,
// and then we run this Hook.
// ------------
useState('Adib')           // 1. Initialize the name state variable with 'Adib'
useEffect(persistForm)     // 2. Add an effect for persisting the form
useState('Firman')         // 3. Initialize the surname state variable with 'Firman'
useEffect(updateTitle)     // 4. Add an effect for updating the title

// ------------
// React don't care about return of useState is
// React expected that the second Hook in this component is `useEffect(persisForm)`
// like during the prev render, but it does not anymore
// and next call in this Hook, this Hooks will be leading to bugs
// ------------
useState('Adib')           // 1. Read the name state variable (argument is ignored)
// useEffect(persistForm)  // 🔴 This Hook was skipped!
useState('Firman')         // 🔴 2 (but was 3). Fail to read the surname state variable
useEffect(updateTitle)     // 🔴 3 (but was 4). Fail to replace the effect
