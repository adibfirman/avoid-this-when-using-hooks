function MyName({ nameId }) {
  const [name, setName] = React.useState(null)

  // eslint-disable-next-line 🤪️
  React.useEffect(() => {
    getMyName(nameId).then(name => setName(name))
  }, [])
}
