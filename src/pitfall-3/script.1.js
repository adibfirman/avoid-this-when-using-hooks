function Component({ myNameId }) {
  const [name, setName] = useState(null);

  // imagine you also have loading/error states. omitting to save space...

  useEffect(() => {
    getMyName(myId).then(res => setName(res));
  }, [myId]); // ✔️

  return <div>{/* render the my name here */}</div>;
}
