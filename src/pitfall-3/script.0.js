function Component({ myNameId }) {
  const [name, setName] = useState(null);

  // imagine you also have loading/error states. omitting to save space...

  useEffect(() => {
    getMyName(myNameId).then(res => setName(res));
  }, []); // 😱️

  return <div>{/* render the my name here */}</div>;
}
