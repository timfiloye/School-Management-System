import './App.css';
import React, { useEffect } from 'react'

function App() {
  const [data, setData] = React.useState('')
  const getData = async () => {
    const res = await fetch('/users')
    const data = await res.json();
    setData(data.data)
    console.log(data.data);
  }

  useEffect(() => {
    getData()
  }, [])
  

  return (
    <div className="App">
      <header className="App-header">
        <h1>{data.name}</h1>
        <p>{data.age}</p>
        <h2>{data.position}</h2>
      </header>
    </div>
  );
}


export default App;
