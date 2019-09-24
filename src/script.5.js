// ------------
// The first render of our component it's still work,
// and then we run this Hook.
// ------------
useState('Adib')           // 1. Initialize the name state variable with 'Adib'
useEffect(persistForm)     // 2. Add an effect for persisting the form
useState('Firman')         // 3. Initialize the surname state variable with 'Firman'
useEffect(updateTitle)     // 4. Add an effect for updating the title
