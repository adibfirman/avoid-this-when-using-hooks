function Form() {
  // 1. Use the name state variable
  const [name, setName] = useState('Adib');

  // 🔴 We're breaking the first rule by using a Hook in a condition
  if (name !== '') {
    useEffect(function persistForm() {
      localStorage.setItem('formData', name);
    });
  }

  // are code in here it's same with prev code
}
