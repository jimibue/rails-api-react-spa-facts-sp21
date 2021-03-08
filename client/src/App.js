import { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css';

import Facts from './components/Facts';
import FactForm from './components/FactForm';

function App() {
  const [facts, setFacts] = useState([])
  const [showForm, setShowForm] = useState(false)
  const [editFactObj, setEditFactObj] = useState(null)
  useEffect(() => {
    getFacts()
  }, [])

  const getFacts = async () => {
    try {
      let res = await axios.get('/api/facts')
      setFacts(res.data)
    } catch (err) {
      console.log(err)
      alert('error, check console')
    }
  }

  const editFactClickHandler = (id) => {
    const factToUpdate = facts.find( (fact) => fact.id ==  id)
    setEditFactObj(factToUpdate)
  }

  const renderPage = () => {
    return showForm ? <FactForm addFact={addFact} setShowForm={setShowForm} /> :
           editFactObj ? <FactForm {...editFactObj} setShowForm={setShowForm} /> :
                         <Facts editFactClickHandler={editFactClickHandler} facts={facts} />
  }
  const goBack =()=> {
    setShowForm(false)
    setEditFactObj(null)
  }
  const renderNavBar = () => {
    return showForm || editFactObj ? <div onClick={goBack}>Back to Facts</div> :
                <div onClick={() => setShowForm(true)}>New Fact</div>
  }
  // need function to add Fact to DB then UI
  const addFact = async (factFromForm) => {
    try {
      let res = await axios.post('api/facts', factFromForm)
      // res.data is going to be the newly created fact
      // how do add something to my facts
      setFacts([...facts, res.data])
    } catch (err) {
      alert('error')
    }
  }
  return (
    <div className="App">
      {renderNavBar()}
      {renderPage()}

    </div>
  );
}

export default App;
