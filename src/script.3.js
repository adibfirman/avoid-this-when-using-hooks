// ------------
// First render
// ------------
useState('Adib')           // 1. Initialize the name state variable with 'Adib'
useEffect(persistForm)     // 2. Add an effect for persisting the form
useState('Firman')         // 3. Initialize the surname state variable with 'Firman'
useEffect(updateTitle)     // 4. Add an effect for updating the title

// -------------
// Second render
// -------------
useState('Adib')           // 1. Read the name state variable (argument is ignored)
useEffect(persistForm)     // 2. Replace the effect for persisting the form
useState('Firman')         // 3. Read the surname state variable (argument is ignored)
useEffect(updateTitle)     // 4. Replace the effect for updating the title
