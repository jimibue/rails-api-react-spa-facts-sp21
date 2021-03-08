import {useEffect, useState} from 'react'
import axios from 'axios'
import './App.css';

import Facts from './components/Facts';
import FactForm from './components/FactForm';

function App() {
  const [facts, setFacts] = useState([])
  const [showForm, setShowFrom] = useState(false)
  useEffect(()=>{
      getFacts()
  },[])

  const getFacts = async()=>{
      try{
        let res = await axios.get('/api/facts')
        setFacts(res.data)
      }catch(err) {
          console.log(err)
          alert('error, check console')
      }
  }
  const renderPage = ()=>{
    return  showForm ? <FactForm /> : <Facts facts={facts} />
  }
  const renderNavBar = ()=> {
    return showForm ? <div onClick={()=> setShowFrom(false)}>Back to Facts</div> :
                      <div onClick={()=> setShowFrom(true)}>New Fact</div>
  }
  return (
    <div className="App">
      {renderNavBar()}
      {renderPage()}
    
    </div>
  );
}

export default App;
