import './App.scss';
import { useEffect, useState } from "react";
import axios from "axios";


function App() {

  const [visits, setVistis] = useState([]);
  const [allvisits, setAllVistis] = useState([]);

  useEffect(() => {
    const getVisits = async () => {
      const response = await axios.get('/visit')
      setVistis(response.data)
    }
    console.log('?');
    getVisits()
  }, []);

  useEffect(() => {
    const getVisitsTotal = async () => {
      const response = await axios.get('/visited')
      setAllVistis(response.data)
    }
    getVisitsTotal()

  }, []);

  return (
    <div className="App">
      <h1>Visitor-Counter</h1>
      <div className='counter'>
        {visits}
      </div>
    </div>
  )
}

export default App;
