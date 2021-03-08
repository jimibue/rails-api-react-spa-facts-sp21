import {useEffect, useState} from 'react'
import axios from 'axios'
import Fact from './Fact'
import FactForm from './FactForm'

const Facts = () => {
    const [facts, setFacts] = useState([])
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

    const renderFacts = () => {
        return facts.map( fact => <Fact key={fact.id} {...fact}/>)
    }
    return (
        <>
          <h1>Facts Here</h1>
          <FactForm />
          {renderFacts()}
        </>
    )
}

export default Facts